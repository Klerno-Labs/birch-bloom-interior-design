'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500 h-24 flex items-center justify-between px-[clamp(24px,5vw,80px)]',
          isScrolled || pathname !== '/' ? 'bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#d4c5b2]/50' : 'bg-transparent border-transparent'
        )}
      >
        {/* Logo */}
        <Link href="/" className="font-playfair text-2xl font-bold text-[#2c2c2c] z-50 relative">
          Birch & Bloom
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm uppercase tracking-widest text-[#2c2c2c] hover:text-[#8b7355] transition-colors relative',
                pathname === link.href && 'text-[#8b7355]'
              )}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-[#8b7355]" />
              )}
            </Link>
          ))}
        </div>

        {/* Book Button & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50 relative">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#8b7355] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#2c2c2c] transition-colors"
          >
            Book Consultation
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#2c2c2c]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-[#faf8f5] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-playfair text-4xl text-[#2c2c2c] hover:text-[#8b7355] transition-colors"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-8 flex items-center gap-2 text-[#8b7355] font-medium tracking-wider uppercase"
        >
          Book Consultation <ArrowRight size={20} />
        </Link>
      </div>
    </>
  );
}