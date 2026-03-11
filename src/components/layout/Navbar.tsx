"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>
        <div className="hidden md:flex space-x-4">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-800 hover:text-gray-600">
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;