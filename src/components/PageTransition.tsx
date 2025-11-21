'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  pathname: string | null;
};

const colorMap: Record<string, string> = {
  studio: '#f4a259',
  lab: '#0ffddd',
  street: '#3c604f',
  contact: '#d16ba5',
  default: '#ffffff'
};

/**
 * PageTransition renders a sweeping overlay between route changes.
 */
export default function PageTransition({ pathname }: Props) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!pathname) return;
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 900);
    return () => clearTimeout(timeout);
  }, [pathname]);

  const overlayColor =
    pathname?.includes('studio')
      ? colorMap.studio
      : pathname?.includes('lab')
        ? colorMap.lab
        : pathname?.includes('street')
          ? colorMap.street
          : pathname?.includes('contact')
            ? colorMap.contact
            : colorMap.default;

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          key={pathname}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="pointer-events-none fixed inset-0 z-50"
          style={{ background: overlayColor }}
        />
      )}
    </AnimatePresence>
  );
}
