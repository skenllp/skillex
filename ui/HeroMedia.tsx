"use client";

import { useEffect, useRef, useState } from "react";
import PhotoPlaceholder from "@/ui/PhotoPlaceholder";

interface HeroMediaProps {
  /** Path to the cinematic hero video (mp4) — e.g. /assets/hero-video.mp4 */
  videoSrc?: string;
  /** Poster / fallback image shown before the video loads, if it can't autoplay, or if none is supplied yet */
  posterSrc?: string;
  className?: string;
}

export default function HeroMedia({ videoSrc, posterSrc, className = "" }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Ensure autoplay kicks off reliably across Safari, Chrome, and iOS
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoReady(true))
          .catch(() => setVideoReady(true));
      }
    }
    const timer = setTimeout(() => setVideoReady(true), 200);
    return () => clearTimeout(timer);
  }, [videoSrc]);

  if (!videoSrc || reducedMotion) {
    return posterSrc ? (
      <img src={posterSrc} alt="" className={`object-cover ${className}`} />
    ) : (
      <PhotoPlaceholder label="Hero video — placeholder" className={className} />
    );
  }

  return (
    <video
      ref={videoRef}
      className={`object-cover transition-opacity duration-700 ease-out ${className}`}
      style={{ opacity: videoReady ? 1 : 0 }}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={posterSrc}
      onCanPlay={() => setVideoReady(true)}
      onLoadedData={() => setVideoReady(true)}
      onPlay={() => setVideoReady(true)}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
