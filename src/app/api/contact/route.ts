```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Basic validation
  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // Simulate sending email or storing data
  try {
    // Here you would typically send the email or store the data
    return NextResponse.json({ message: 'Thank you for your inquiry! We will get back to you shortly.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
  }
}
```