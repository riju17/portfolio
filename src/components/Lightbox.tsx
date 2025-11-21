'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Photo } from '@/data/photos';

type LightboxProps = {
  isOpen: boolean;
  photo: Photo | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

/**
 * Lightbox displays the selected Street photo in a modal overlay.
 */
export default function Lightbox({ isOpen, photo, onClose, onPrev, onNext }: LightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && photo && photo.src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
        >
          <button className="absolute right-6 top-6 text-3xl text-white" onClick={onClose} aria-label="Close lightbox">
            ×
          </button>
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-white" onClick={onPrev} aria-label="Previous photo">
            ‹
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl text-white" onClick={onNext} aria-label="Next photo">
            ›
          </button>
          <motion.div
            key={photo.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-4xl space-y-4 text-center"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20">
              <Image src={photo.src} alt={photo.title} fill className="object-cover" sizes="100vw" />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-display">{photo.title}</h3>
              <p className="text-white/70">
                {photo.location} · {photo.year}
              </p>
              <p className="mt-2 text-white/60">{photo.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
