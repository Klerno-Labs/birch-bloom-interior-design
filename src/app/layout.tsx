"use client";
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: "Birch & Bloom Interior Design",
  description: "Award-winning interior design studio specializing in residential transformations.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}