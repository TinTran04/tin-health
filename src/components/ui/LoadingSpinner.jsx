import React from 'react';
import { cn } from '../../utils/cn';

const LoadingSpinner = ({ 
  size = 'md', 
  className,
  text,
  fullScreen = false 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const spinner = (
    <div className={cn(
      'border-4 border-neutral-200 border-t-purple-600 rounded-full animate-spin',
      sizes[size],
      className
    )} />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
        {spinner}
        {text && (
          <p className="mt-4 text-neutral-600 font-medium">{text}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {spinner}
      {text && (
        <p className="mt-2 text-neutral-600 text-sm">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;