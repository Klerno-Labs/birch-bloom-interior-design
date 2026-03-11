import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Honeypot check
    if (body._gotcha) {
      // Return success to fool bots, but don't actually send
      return NextResponse.json({ success: true });
    }

    // In a real static export without a backend server, 
    // we can't send emails directly. 
    // You would integrate with Resend, SendGrid, or Formspree here.
    // For this demo, we simulate a successful response after a delay.
    
    // console.log("Form submission received:", body);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}