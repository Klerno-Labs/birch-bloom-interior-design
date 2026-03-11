import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'pill';
  size?: 'default' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center transition-all duration-300 ease-out cursor-pointer relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7355] focus-visible:ring-offset-2",
          {
            'bg-[#2c2c2c] text-[#faf8f5] px-8 py-4 rounded-sm hover:shadow-[0_20px_40px_-10px_rgba(139,115,85,0.15)] hover:-translate-y-1': variant === 'primary',
            'bg-transparent text-[#2c2c2c] border-b border-[#2c2c2c] pb-1 hover:text-[#8b7355] hover:border-[#8b7355] px-0': variant === 'secondary',
            'border border-[#2c2c2c] text-[#2c2c2c] px-6 py-3 hover:bg-[#2c2c2c] hover:text-[#faf8f5]': variant === 'outline',
            'bg-[#2c2c2c] text-[#faf8f5] px-6 py-3 rounded-full hover:bg-[#8b7355]': variant === 'pill',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }