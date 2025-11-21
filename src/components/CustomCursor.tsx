'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CustomCursor renders a small circle following the pointer.
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setEnabled(false);
      return;
    }

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInteractive = !!target.closest('a, button, .cursor-peek, [data-hoverable=\"true\"]');
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="cursor-dot h-5 w-5 border border-white/80"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isHovering ? 2 : 1
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.4 }}
    />
  );
}
