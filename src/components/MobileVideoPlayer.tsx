'use client';

import { useRef } from 'react';

type Props = {
  src: string;
};

/**
 * MobileVideoPlayer plays/pause on hover to preview mobile app demos.
 */
export default function MobileVideoPlayer({ src }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    videoRef.current?.play().catch(() => undefined);
  };

  const handlePause = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div
      className="device-mobile-screen aspect-[9/16]"
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
      aria-label="Mobile app preview"
    >
      <video ref={videoRef} src={src} muted playsInline preload="metadata" className="h-full w-full object-cover" />
    </div>
  );
}
