import { NextRequest, NextResponse } from 'next/server'

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

  if (!body.name) {
    return NextResponse.json({
      error: 'Name is required',
      status: 400,
    })
  }

  return NextResponse.json(body)
}
