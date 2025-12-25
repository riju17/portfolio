"use client";

import { useState } from 'react';
import Image from 'next/image';

type MockImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

type Props = {
  images: MockImage[];
  initialScale?: number;
};

/**
 * ZoomableBoard renders scrollable mockups with zoom controls.
 */
export default function ZoomableBoard({ images, initialScale = 0.2 }: Props) {
  const minScale = 0.2;
  const maxScale = 2.5;
  const [scale, setScale] = useState(initialScale);

  const setZoom = (next: number) => {
    setScale(Math.min(maxScale, Math.max(minScale, Number(next.toFixed(2)))));
  };

  return (
    <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#fffaf2]/80 via-white/70 to-[#fbe8e6]/70 p-5 shadow-[0_22px_60px_rgba(240,80,120,0.18)] backdrop-blur">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-black/70">
          <span className="h-2 w-2 rounded-full bg-rose-400 shadow-[0_0_0_2px_rgba(255,255,255,0.6)]" />
          Board
        </div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-black/70">
          <button
            onClick={() => setZoom(scale - 0.1)}
            className="rounded-full border border-black/10 bg-white/70 px-3 py-1 shadow-sm hover:bg-white"
            type="button"
          >
            −
          </button>
          <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[11px] font-semibold shadow-sm">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setZoom(scale + 0.1)}
            className="rounded-full border border-black/10 bg-white/70 px-3 py-1 shadow-sm hover:bg-white"
            type="button"
          >
            +
          </button>
          <button
            onClick={() => setZoom(1)}
            className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] shadow-sm hover:bg-white"
            type="button"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/80 shadow-lg ring-1 ring-black/5">
        <div className="h-[70vh] max-h-[820px] overflow-auto">
          <div
            className="flex w-fit gap-4 p-4"
            style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
          >
            {images.map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="h-full w-auto max-w-none rounded-xl shadow-lg"
                priority={img.priority}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
