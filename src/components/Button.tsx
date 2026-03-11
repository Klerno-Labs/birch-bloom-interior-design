```typescript
import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'pill';
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode; // e.g. ArrowRight
}

const Button: React.FC<ButtonProps> = ({ variant, label, href, onClick, icon }) => {
  const baseStyles = 'inline-block transition-all duration-300 ease-out cursor-pointer relative overflow-hidden group';
  const variantStyles = {
    primary: 'bg-[#2c2c2c] text-[#faf8f5] px-8 py-4 rounded-sm hover:shadow-[0_20px_40px_-10px_rgba(139,115,85,0.15)] hover:-translate-y-1',
    secondary: 'bg-transparent text-[#2c2c2c] border-b border-[#2c2c2c] pb-1 hover:text-[#8b7355] hover:border-[#8b7355]',
    pill: 'bg-[#2c2c2c] text-[#faf8f5] px-6 py-3 rounded-full hover:bg-[#8b7355]',
  };

  const classes = cn(baseStyles, variantStyles[variant]);

  return href ? (
    <a href={href} className={classes}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
```