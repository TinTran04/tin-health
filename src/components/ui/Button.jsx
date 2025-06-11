import React from 'react';
import { cn } from '../../utils/cn';

const Button = React.forwardRef(({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  ...props
}, ref) => {
  const baseClasses = 'btn focus-visible';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    ghost: 'bg-transparent text-purple-600 hover:bg-purple-50',
    outline: 'border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50'
  };
  
  const sizes = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  };

  return (
    <button
      ref={ref}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="spinner mr-2" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;