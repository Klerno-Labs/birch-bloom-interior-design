import { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { metadataBase } from '@/config/site';

export const metadata = {
  title: 'Birch & Bloom Interior Design',
  description: 'Award-winning interior design studio specializing in residential transformations.',
  openGraph: {
    title: 'Birch & Bloom Interior Design',
    description: 'Award-winning interior design studio specializing in residential transformations.',
    url: metadataBase,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop'
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('bg-white text-gray-900')}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}