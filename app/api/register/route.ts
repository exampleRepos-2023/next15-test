import prisma from '@/prisma/client'
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export async function POST(request: NextRequest) {
  const body = await request.json()

  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    )
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  })

  if (user) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 })
  }

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      hashedPassword: await bcrypt.hash(body.password, 10),
    },
  })

  return NextResponse.json(newUser, { status: 201 })
}
