"use client";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Instagram, LinkedIn } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold">{siteConfig.name}</h2>
          <p className="mt-2">Spaces That Tell Your Story</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {siteConfig.links.menu.map((link) => (
              <li key={link.title}>
                <a href={link.href} className="hover:underline">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold">Contact</h3>
          <p className="mt-2">225 Design District Way, Nashville, TN 37203</p>
          <p className="mt-2">Phone: (555) 321-6543</p>
          <p className="mt-2">Email: hello@birchandbloom.com</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://instagram.com/birchandbloom" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
              <Instagram />
            </a>
            <a href="https://linkedin.com/company/birchandbloom" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© {new Date().getFullYear()} Birch & Bloom. All rights reserved.</p>
      </div>
    </footer>
  );
}