import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden',
        hover && 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}