'use client';

import { useCallback, useState } from 'react';
import type { Photo } from '@/data/photos';

/**
 * useLightbox centralizes photo overlay state management.
 */
export function useLightbox(photos: Photo[]) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);

  const onPrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? photos.length - 1 : prev - 1;
    });
  }, [activeIndex, photos.length]);

  const onNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === photos.length - 1 ? 0 : prev + 1;
    });
  }, [activeIndex, photos.length]);

  return {
    activeIndex,
    activePhoto: activeIndex !== null ? photos[activeIndex] : null,
    open,
    close,
    onPrev,
    onNext
  };
}
