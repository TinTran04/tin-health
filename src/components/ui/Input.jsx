import React from 'react';
import { cn } from '../../utils/cn';

const Input = React.forwardRef(({
  className,
  type = 'text',
  label,
  error,
  helperText,
  required = false,
  ...props
}, ref) => {
  const id = props.id || props.name;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="label">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        type={type}
        id={id}
        className={cn(
          'input',
          error && 'input-error',
          className
        )}
        {...props}
      />
      
      {error && (
        <p className="text-error">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="text-neutral-500 text-sm">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;