import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  return new Response("This is a new API route");
}

// export const runtime = "edge";

export async function POST(req: NextRequest) {
  // Parse the request body
  const formDataBody = await req.json();

  // Configure Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options for notifying me
  const notifyMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Message Received",
    text: `You've received a new message from ${formDataBody.name}:\n\n${formDataBody.message}`,
  };

  // Email options for sending feedback confirmation
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: formDataBody.email,
    subject: "Message Received - Yola's World",
    text: `Hi ${formDataBody.name},\n\nI've received your message as follows:\n\n${formDataBody.message}\n\nThank you and I will reach out to you very soon!`,
  };

  try {
    // Send email
    await transporter.sendMail(notifyMailOptions);
    await transporter.sendMail(userMailOptions);
    return new NextResponse("Emails sent successfully", { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new NextResponse("Error sending emails", { status: 500 });
  }
}
