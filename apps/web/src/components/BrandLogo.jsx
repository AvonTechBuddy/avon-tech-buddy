import React from 'react';
import { cn } from '@/lib/utils';

const sizeClasses = {
  sm: {
    image: 'h-8 w-8',
    text: 'text-base',
    gap: 'gap-2',
  },
  md: {
    image: 'h-9 w-9 sm:h-10 sm:w-10',
    text: 'text-base md:text-lg',
    gap: 'gap-2.5',
  },
  lg: {
    image: 'h-10 w-10 sm:h-11 sm:w-11',
    text: 'text-lg md:text-xl',
    gap: 'gap-3',
  },
};

export default function BrandLogo({
  size = 'md',
  showText = true,
  textClassName = '',
  className = '',
  imageClassName = '',
}) {
  const sizes = sizeClasses[size] ?? sizeClasses.md;

  return (
    <span className={cn('flex items-center min-w-0', sizes.gap, className)}>
      <img
        src="/logo.png"
        alt="Avon Tech Buddy"
        width={44}
        height={44}
        className={cn(
          'object-contain rounded-full shrink-0',
          sizes.image,
          imageClassName,
        )}
      />
      {showText && (
        <span
          className={cn(
            'font-semibold text-foreground tracking-tight truncate',
            sizes.text,
            textClassName,
          )}
        >
          Avon Tech Buddy
        </span>
      )}
    </span>
  );
}
