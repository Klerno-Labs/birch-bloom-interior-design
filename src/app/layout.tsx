```typescript
import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { images } from '@/config/images';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Birch & Bloom Interior Design',
  description: 'Award-winning interior design studio specializing in residential transformations.',
  openGraph: {
    title: 'Birch & Bloom Interior Design',
    description: 'Award-winning interior design studio specializing in residential transformations.',
    images: [images.hero.src],
  },
  metadataBase: new URL('https://birchandbloom.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```