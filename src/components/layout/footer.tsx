'use client';

import Link from 'next/link';
import { ArrowUp, Instagram, Linkedin, Pinterest, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2c2c2c] text-[#faf8f5] pt-24 pb-12 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-5 pointer-events-none select-none">
        <h1 className="font-playfair text-[12vw] leading-none whitespace-nowrap text-[#faf8f5]">
          Birch & Bloom
        </h1>
      </div>

      <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold">Birch & Bloom</h3>
            <p className="text-gray-400 leading-relaxed">
              Award-winning interior design studio specializing in residential transformations. Creating spaces that are beautiful, functional, and deeply personal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl mb-6 text-[#d4c5b2]">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/process" className="text-gray-400 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl mb-6 text-[#d4c5b2]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="mt-1 shrink-0" />
                <span>225 Design District Way<br />Nashville, TN 37203</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0" />
                <a href="tel:5553216543" className="hover:text-white transition-colors">(555) 321-6543</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0" />
                <a href="mailto:hello@birchandbloom.com" className="hover:text-white transition-colors">hello@birchandbloom.com</a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-playfair text-xl mb-6 text-[#d4c5b2]">Connect</h4>
            <div className="flex gap-4 mb-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#2c2c2c] transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#2c2c2c] transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Pinterest page" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#2c2c2c] transition-all">
                <Pinterest size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-500 mb-2">Hours</p>
            <p className="text-gray-400">Mon-Fri 9am-5pm<br />Sat by Appointment</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Birch & Bloom. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-[#8b7355] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2c2c2c] transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
}