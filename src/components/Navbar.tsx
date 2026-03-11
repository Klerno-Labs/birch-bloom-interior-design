```typescript
import React from 'react';
import { cn } from '../utils/cn';
import Button from './Button';

interface NavbarProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMobileMenuOpen, onMenuToggle }) => {
  return (
    <header className={cn('sticky top-0 z-50 transition-all duration-500', isScrolled ? 'bg-[#faf8f5]/95 border-b border-[#d4c5b2]/50' : 'bg-transparent')}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-2xl font-bold text-[#2c2c2c]">Birch & Bloom</div>
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest text-[#2c2c2c] hover:text-[#8b7355]">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <Button variant="primary" label="Book Now" />
        <button aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} onClick={onMenuToggle} className="md:hidden">
          <span className="block w-6 h-1 bg-[#2c2c2c] mb-1"></span>
          <span className="block w-6 h-1 bg-[#2c2c2c] mb-1"></span>
          <span className="block w-6 h-1 bg-[#2c2c2c]"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
```