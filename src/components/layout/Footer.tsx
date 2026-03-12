"use client";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Birch & Bloom</h2>
          <p>225 Design District Way, Nashville, TN 37203</p>
          <p>(555) 321-6543</p>
        </div>
        <div className="mb-4">
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-md font-semibold">Follow Us</h3>
          <ul className="flex space-x-4">
            <li><a href="#" aria-label="Visit our Instagram page">Instagram</a></li>
            <li><a href="#" aria-label="Visit our LinkedIn page">LinkedIn</a></li>
            <li><a href="#" aria-label="Visit our Pinterest page">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <button onClick={() => window.scrollTo(0, 0)} className="mt-4&quot;>Back to Top</button>
      <p className="text-center text-sm">© {new Date().getFullYear()} Birch & Bloom. All rights reserved.</p>
    </footer>
  );
}