import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Twitter, LinkedIn } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={cn("bg-gray-900 text-white py-16")}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold">{siteConfig.name}</h2>
            <p>{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul>
              {siteConfig.navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gray-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact Info</h3>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.address}</p>
          </div>
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                <Facebook />
              </Link>
              <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
                <Instagram />
              </Link>
              <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
                <Twitter />
              </Link>
              <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}