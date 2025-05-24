import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-white hover:bg-primary-light': variant === 'primary',
            'bg-secondary text-primary hover:bg-secondary-light': variant === 'secondary',
            'border-2 border-primary bg-transparent text-primary hover:bg-primary/5': variant === 'outline',
            'h-8 px-3 py-1 text-sm': size === 'sm',
            'h-9 px-4 py-2 text-base': size === 'md',
            'h-10 px-6 py-2 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };