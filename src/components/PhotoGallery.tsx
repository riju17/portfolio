'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import type { Photo } from '@/data/photos';
import { useLightbox } from '@/hooks/useLightbox';
import Lightbox from './Lightbox';

type Props = {
  photos: Photo[];
};

/**
 * PhotoGallery groups Street world images into categories with a lightbox.
 */
export default function PhotoGallery({ photos }: Props) {
  const grouped = useMemo(() => {
    return photos.reduce<Record<string, Photo[]>>((acc, photo) => {
      if (!acc[photo.category]) acc[photo.category] = [];
      acc[photo.category].push(photo);
      return acc;
    }, {});
  }, [photos]);

  const flatList = useMemo(() => Object.values(grouped).flat(), [grouped]);
  const lightboxPhotos = useMemo(() => flatList.filter((photo) => Boolean(photo.src)), [flatList]);
  const lightbox = useLightbox(lightboxPhotos);

  return (
    <div className="space-y-12">
      {Object.entries(grouped).map(([category, catPhotos]) => (
        <section key={category} className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-white/50">{category}</p>
            <h3 className="text-3xl font-display text-white">{category} Stories</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catPhotos.map((photo) => {
              const lbIndex = lightboxPhotos.findIndex((p) => p.id === photo.id);
              const clickable = lbIndex !== -1;
              return (
                <div
                  key={photo.id}
                  className={`group overflow-hidden rounded-2xl border border-white/10 bg-base/80 ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
                  onClick={() => clickable && lightbox.open(lbIndex)}
                  role={clickable ? 'button' : undefined}
                  tabIndex={clickable ? 0 : -1}
                  data-hoverable={clickable ? 'true' : undefined}
                >
                  <div className="relative" style={{ aspectRatio: '3 / 2' }}>
                    {photo.src ? (
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        className="object-cover transition duration-500 grayscale-[25%] group-hover:scale-105 group-hover:grayscale-0"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/5 text-xs uppercase tracking-[0.3em] text-white/40">
                        Add photo via data/photos.ts
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between bg-base/80 px-4 py-2 text-left">
                    <div>
                      <p className="text-sm font-semibold text-white">{photo.title}</p>
                      <p className="text-xs text-white/60">
                        {photo.location} · {photo.year}
                      </p>
                    </div>
                    <span className="text-lg text-white/60">{clickable ? '+' : '—'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
      <Lightbox
        isOpen={lightbox.activeIndex !== null}
        photo={lightbox.activePhoto}
        onClose={lightbox.close}
        onPrev={lightbox.onPrev}
        onNext={lightbox.onNext}
      />
    </div>
  );
}
