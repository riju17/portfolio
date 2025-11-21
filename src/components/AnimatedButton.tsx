'use client';

import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

const variantClasses = {
  primary: 'bg-white text-base text-black shadow-lg hover:shadow-xl',
  secondary: 'bg-black/70 text-white border border-white/40',
  ghost: 'border border-white/40 text-white/80'
} as const;

type AnimatedButtonProps = {
  href?: string;
  variant?: keyof typeof variantClasses;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;

/**
 * AnimatedButton standardizes CTA visuals for CTAs.
 */
export default function AnimatedButton({ href, children, variant = 'primary', ...buttonProps }: AnimatedButtonProps) {
  const className = `cursor-peek inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition ${variantClasses[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}
