'use client';

import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

const variantClasses = {
  primary: 'bg-white text-base text-black shadow-lg hover:shadow-xl',
  secondary: 'bg-black/70 text-white border border-white/40',
  ghost: 'border border-white/40 text-white/80'
} as const;

type Variant = keyof typeof variantClasses;

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
} & HTMLMotionProps<'div'>;

type PlainButtonProps = {
  href?: undefined;
  variant?: Variant;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;

type AnimatedButtonProps = LinkButtonProps | PlainButtonProps;

/**
 * AnimatedButton standardizes CTA interactions with Framer Motion.
 */
export default function AnimatedButton(props: AnimatedButtonProps) {
  const { variant = 'primary', children } = props;
  const className = `cursor-peek inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition ${variantClasses[variant]}`;

  if ('href' in props) {
    const { href, ...divProps } = props;
    return (
      <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }} {...divProps}>
        <Link href={href} className={className}>
          {children}
        </Link>
      </motion.div>
    );
  }

  const { href: _unused, ...buttonProps } = props;
  return (
    <motion.button whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }} className={className} {...buttonProps}>
      {children}
    </motion.button>
  );
}
