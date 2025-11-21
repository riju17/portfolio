'use client';

import Link from 'next/link';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

const variantClasses = {
  primary: 'bg-white text-base text-black shadow-lg hover:shadow-xl',
  secondary: 'bg-black/70 text-white border border-white/40',
  ghost: 'border border-white/40 text-white/80'
} as const;

type AnimatedButtonProps = {
  href?: string;
  variant?: keyof typeof variantClasses;
  children: React.ReactNode;
} & HTMLMotionProps<'button'>;

/**
 * AnimatedButton standardizes CTA interactions with Framer Motion.
 */
export default function AnimatedButton({ href, children, variant = 'primary', ...buttonProps }: AnimatedButtonProps) {
  const className = `cursor-peek inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition ${variantClasses[variant]}`;

  if (href) {
    return (
      <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={className}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }} className={className} {...buttonProps}>
      {children}
    </motion.button>
  );
}
