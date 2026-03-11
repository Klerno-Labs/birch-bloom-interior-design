"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "pill";
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  variant = "primary",
  label,
  href,
  onClick,
  icon = false,
  className,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-300 ease-out cursor-pointer relative overflow-hidden group";

  const variants = {
    primary:
      "bg-primary text-background px-8 py-4 rounded-sm hover:shadow-lg hover:-translate-y-1 hover:bg-secondary",
    secondary:
      "bg-transparent text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary",
    outline:
      "border border-primary px-6 py-3 rounded-sm hover:bg-primary hover:text-background",
    pill:
      "bg-primary text-background px-6 py-3 rounded-full hover:bg-secondary hover:shadow-md",
  };

  const content = (
    <>
      {label}
      {icon && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  const classes = cn(baseStyles, variants[variant], className);

  if (href && !onClick) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;