```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, phone, message, _gotcha } = data;

  // Honeypot check
  if (_gotcha) {
    return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
  }

  // Validate inputs
  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // Here you would typically send the data to your email service
  // For demonstration, we will just log it
  console.log({ name, email, phone, message });

  return NextResponse.json({ message: 'Thank you! We will be in touch soon!' }, { status: 200 });
}
```