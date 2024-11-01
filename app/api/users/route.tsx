import { NextRequest, NextResponse } from 'next/server'
import schema from './schema'

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: 'John Doe',
      email: 'P6JpO@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'LHkK5@example.com',
    },
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    )
  }

  return NextResponse.json(body)
}
