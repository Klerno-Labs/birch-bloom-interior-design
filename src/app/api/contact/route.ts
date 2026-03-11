import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  
  // Simple validation
  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Here you would typically send the data to your email service
  // For now, we just return a success response
  return NextResponse.json({ message: "Inquiry submitted successfully!" }, { status: 200 });
}