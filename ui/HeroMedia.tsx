import Image from "next/image";

interface HeroMediaProps {
  /** Path to the cinematic desktop (landscape) hero video — e.g. /assets/hero-video.mp4 */
  videoSrc?: string;
  /** Poster / fallback image for the desktop video */
  posterSrc?: string;
  /** Static portrait background image for mobile devices (< 768px). */
  mobileImageSrc?: string;
  /** Backward compatibility fallback for mobile image */
  mobilePosterSrc?: string;
  className?: string;
}

/**
 * Responsive Hero Media:
 * - Desktop (>= 768px / md): Autoplays the cinematic landscape desktop video.
 * - Mobile (< 768px): Strictly displays the high-resolution static portrait image.
 *   The desktop video is completely excluded on mobile viewports via CSS and source media
 *   queries to ensure zero unnecessary bandwidth or decode overhead.
 */
export default function HeroMedia({
  videoSrc = "/assets/hero-video.mp4",
  posterSrc = "/assets/hero-poster.jpg",
  mobileImageSrc,
  mobilePosterSrc,
  className = "",
}: HeroMediaProps) {
  const effectiveMobileImage =
    mobileImageSrc ?? mobilePosterSrc ?? "/assets/hero-mobile.jpg";

  return (
    <>
      {/* Desktop (md and up): Real video with media query to prevent mobile preload */}
      {videoSrc && (
        <video
          className={`hidden md:block motion-reduce:!hidden object-cover ${className}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-hidden="true"
        >
          <source media="(min-width: 768px)" src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Desktop prefers-reduced-motion fallback: still landscape poster */}
      {posterSrc && (
        <img
          src={posterSrc}
          alt=""
          aria-hidden="true"
          className={`hidden motion-reduce:md:block object-cover ${className}`}
        />
      )}

      {/* Mobile (< md): High-priority static portrait image */}
      <div className="block md:hidden absolute inset-0 h-full w-full pointer-events-none">
        <Image
          src={effectiveMobileImage}
          alt="Skillex Campus"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1px"
          className={`object-cover object-center ${className}`}
        />
      </div>
    </>
  );
}

