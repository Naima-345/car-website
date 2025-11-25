import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitle({ 
  children, 
  subtitle, 
  className, 
  align = 'center' 
}: SectionTitleProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12', alignments[align], className)}>
      {subtitle && (
        <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900">
        {children}
      </h2>
    </div>
  );
}