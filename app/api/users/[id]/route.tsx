import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'

interface Props {
  params: {
    id: number
  }
}

export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({
    id: params.id,
    name: 'John Doe',
    email: 'P6JpO@example.com',
  })
}

export async function UPDATE(request: NextRequest, { params }: Props) {
  const body = await request.json()

  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 404 }
    )
  }

  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({
    id: params.id,
    name: 'John Doe',
    email: 'P6JpO@example.com',
  })
}

export async function DELETE(request: NextRequest, { params }: Props) {
  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({
    id: params.id,
    name: 'John Doe',
    email: 'P6JpO@example.com',
  })
}
