import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // In a real deployment, integrate with an email service like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // Example with Resend:
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Portfolio <noreply@yourdomain.com>',
    //   to: 'sonawaneashwini0406@gmail.com',
    //   subject: `Portfolio Contact: ${name}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
    // })

    console.log('Contact form submission:', { name, email, message, timestamp: new Date().toISOString() })

    return NextResponse.json(
      { success: true, message: 'Message received! I will get back to you within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
