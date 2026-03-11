import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Here you would handle the form submission, e.g., send an email or save to a database
  return NextResponse.json({ success: true });
}