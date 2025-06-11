import React from 'react';
import { cn } from '../../utils/cn';

const Card = ({ className, children, ...props }) => (
  <div className={cn('card', className)} {...props}>
    {children}
  </div>
);

const CardHeader = ({ className, children, ...props }) => (
  <div className={cn('card-header', className)} {...props}>
    {children}
  </div>
);

const CardBody = ({ className, children, ...props }) => (
  <div className={cn('card-body', className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({ className, children, ...props }) => (
  <div className={cn('card-footer', className)} {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardBody, CardFooter };