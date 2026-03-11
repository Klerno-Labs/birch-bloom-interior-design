import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, LinkedIn } from 'lucide-react';

export function Footer() {
  return (
    <footer className={cn('bg-gray-900 text-white py-8')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold">Birch & Bloom</h2>
          <p className="mt-2">Award-winning interior design studio.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-1">
            {siteConfig.links.menu.map(link => (
              <li key={link.title}>
                <Link href={link.href} className="hover:underline">{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="mt-2">225 Design District Way, Nashville, TN 37203</p>
          <p className="mt-1">Phone: (555) 321-6543</p>
          <p className="mt-1">Email: hello@birchandbloom.com</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <Link href={siteConfig.links.social[0].href} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
              <Instagram />
            </Link>
            <Link href={siteConfig.links.social[1].href} target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
              <LinkedIn />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© {new Date().getFullYear()} Birch & Bloom. All rights reserved.</p>
      </div>
    </footer>
  );
}