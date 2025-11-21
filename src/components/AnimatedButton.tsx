'use client';

import Link from 'next/link';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

 type AnimatedButtonProps = {
  href?: string;
  variant?: 'primary' | 'ghost' | 'secondary';
  children: React.ReactNode;
} & HTMLMotionProps<'button'>;

const variantClasses: Record<NonNullable<AnimatedButtonProps['variant']>, string> = {
  primary: 'bg-white text-base text-black shadow-lg hover:shadow-xl',
  secondary: 'bg-black/70 text-white border border-white/40',
  ghost: 'border border-white/40 text-white/80'
};

/**
 * AnimatedButton standardizes CTA interactions with Framer Motion.
 */
export default function AnimatedButton({ href, children, variant = 'primary', ...props }: AnimatedButtonProps) {
  const className = `cursor-peek inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition ${variantClasses[variant]}`;
  const { onMouseEnter, onMouseLeave, ...buttonProps } = props;

  if (href) {
    return (
      <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Link href={href} className={className}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...buttonProps}>
      {children}
    </motion.button>
  );
}
