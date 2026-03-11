"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Birch & Bloom</div>
        <button aria-label="Open menu" onClick={toggleMenu} className="md:hidden">
          <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
          <span className="block w-6 h-1 bg-gray-700"></span>
        </button>
        <div className={`md:flex ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <button aria-label="Close menu" onClick={toggleMenu} className="md:hidden">
            X
          </button>
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}