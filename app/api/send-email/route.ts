import Welcometemplate from '@/emails/Welcometemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

export function POST() {
  resend.emails.send({
    from: 'V9d2o@example.com',
    to: 'V9d2o@example.com',
    subject: 'Hello from Resend',
    react: Welcometemplate({ name: 'John Doe' }),
  })

  return NextResponse.json({ success: true })
}
