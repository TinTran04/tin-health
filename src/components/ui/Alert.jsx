import React from 'react';
import { CheckCircle, AlertCircle, XCircle, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const Alert = ({
  variant = 'info',
  title,
  children,
  onClose,
  className,
  ...props
}) => {
  const variants = {
    success: {
      container: 'bg-green-50 border-green-200 text-green-800',
      icon: CheckCircle,
      iconColor: 'text-green-600'
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-800',
      icon: XCircle,
      iconColor: 'text-red-600'
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      icon: AlertCircle,
      iconColor: 'text-yellow-600'
    },
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: Info,
      iconColor: 'text-blue-600'
    }
  };

  const { container, icon: Icon, iconColor } = variants[variant];

  return (
    <div 
      className={cn(
        'border rounded-lg p-4 animate-fade-in',
        container,
        className
      )}
      {...props}
    >
      <div className="flex items-start">
        <Icon className={cn('w-5 h-5 mt-0.5 mr-3 flex-shrink-0', iconColor)} />
        
        <div className="flex-1">
          {title && (
            <h4 className="font-medium mb-1">{title}</h4>
          )}
          <div className="text-sm">{children}</div>
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 flex-shrink-0 p-1 hover:bg-black hover:bg-opacity-10 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;