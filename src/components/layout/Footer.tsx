"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-background pt-20 pb-8 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-5 pointer-events-none">
        <h1 className="font-serif text-[15vw] whitespace-nowrap">
          Birch & Bloom
        </h1>
      </div>

      <div className="max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold mb-6">
              {siteConfig.name}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Award-winning interior design studio specializing in residential transformations.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="hover:text-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-secondary mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Portfolio", "Services", "Process", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-secondary mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-muted-foreground leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-secondary" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-muted-foreground hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-secondary" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Hours */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-secondary mb-6">
              Studio Hours
            </h4>
            <p className="text-muted-foreground mb-6">
              {siteConfig.contact.hours}
            </p>
            <h4 className="text-sm uppercase tracking-widest text-secondary mb-4">
              Stay Connected
            </h4>
            <form className="flex border-b border-muted-foreground pb-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent w-full outline-none placeholder-muted-foreground text-white"
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="text-secondary hover:text-white uppercase text-sm">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;