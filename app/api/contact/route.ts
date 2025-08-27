import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Here you would typically integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // For now, we'll simulate sending an email

    console.log("Contact form submission:", { name, email, message })

    // Simulate email sending to utkarsh2020051@gmail.com
    // In a real implementation, you would use an email service here

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
