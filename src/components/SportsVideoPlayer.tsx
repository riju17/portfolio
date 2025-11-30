'use client';

import { useRef } from 'react';

type Props = {
  src: string;
};

export default function SportsVideoPlayer({ src }: Props) {
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
      className="device-macbook-screen aspect-video"
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
      aria-label="Sports video preview"
    >
      <video ref={videoRef} src={src} muted playsInline preload="metadata" className="h-full w-full object-cover" />
    </div>
  );
}
