'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function Section({ children, className, animate = true }: SectionProps) {
  if (!animate) {
    return (
      <section className={cn('py-16 md:py-24', className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={cn('py-16 md:py-24', className)}
    >
      {children}
    </motion.section>
  );
}