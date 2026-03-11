"use client";
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100")}>
      <div className="flex justify-between items-center h-20 px-4">
        <Link href="/" className="text-xl font-bold">{siteConfig.name}</Link>
        <button aria-label="Open menu" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center">
          {siteConfig.navLinks.map(link => (
            <Link key={link.href} href={link.href} className="py-2" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}