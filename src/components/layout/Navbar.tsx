"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 border-b",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-accent/30 h-20"
            : "bg-transparent border-transparent h-24"
        )}
      >
        <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-tight text-primary relative z-50"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors duration-300 hover:text-secondary relative",
                  pathname === link.href ? "text-secondary" : "text-primary"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-secondary" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-background text-sm uppercase tracking-widest rounded-sm hover:bg-secondary transition-colors duration-300"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-serif text-4xl text-primary hover:text-secondary transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-8 px-8 py-4 bg-primary text-background text-lg uppercase tracking-widest rounded-sm hover:bg-secondary transition-colors"
        >
          Book Consultation
        </Link>
      </div>
    </>
  );
};

export default Navbar;