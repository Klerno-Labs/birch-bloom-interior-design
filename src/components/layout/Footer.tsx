import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter, LinkedIn } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold">{siteConfig.name}</h2>
            <p>{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul>
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:underline" rel="noopener noreferrer" target="_blank">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact Info</h3>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.address}</p>
            <p>{siteConfig.hours}</p>
          </div>
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                <Facebook />
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
                <Instagram />
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
                <Twitter />
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;