"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="text-2xl font-bold">{siteConfig.name}</div>
        <div className="hidden md:flex space-x-8">
          {siteConfig.links.menu.map((link) => (
            <a key={link.title} href={link.href} className="text-gray-900 hover:text-gray-600">
              {link.title}
            </a>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 translate-x-0 transition-transform duration-300">
          {siteConfig.links.menu.map((link) => (
            <a key={link.title} href={link.href} className="text-gray-900 hover:text-gray-600">
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}