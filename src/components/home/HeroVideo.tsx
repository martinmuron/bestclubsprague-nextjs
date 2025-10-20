"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

type HeroVideoProps = {
  className?: string;
  poster: string;
};

function tryPlay(video: HTMLVideoElement) {
  // Attempt to start playback; browsers may block autoplay if conditions are not met.
  video
    .play()
    .catch(() => {
      video.muted = true;
      video.play().catch(() => {
        /* Swallow the error; caller can decide to show fallback */
      });
    });
}

export default function HeroVideo({ className, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const handleCanPlay = () => {
      if (video.paused) {
        tryPlay(video);
      }
    };

    const handleError = () => {
      setFailed(true);
    };

    tryPlay(video);

    document.addEventListener("visibilitychange", handleCanPlay);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      document.removeEventListener("visibilitychange", handleCanPlay);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  if (failed) {
    return (
      <div className={clsx("absolute inset-0", className)}>
        <Image
          alt="Nightlife in Prague"
          src={poster}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={poster}
      className={clsx("absolute inset-0 h-full w-full object-cover", className)}
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
