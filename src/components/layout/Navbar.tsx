"use client";

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={cn('sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-bold">Birch & Bloom</Link>
        <div className="hidden md:flex space-x-8">
          {siteConfig.links.menu.map(link => (
            <Link key={link.title} href={link.href} className="text-gray-900 hover:text-gray-600">
              {link.title}
            </Link>
          ))}
        </div>
        <button onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4">
          {siteConfig.links.menu.map(link => (
            <Link key={link.title} href={link.href} className="text-lg" onClick={toggleMenu}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}