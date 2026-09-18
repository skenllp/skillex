interface HeroMediaProps {
  /** Path to the cinematic desktop (landscape) hero video — e.g. /assets/hero-video.mp4 */
  videoSrc?: string;
  /** Poster / fallback image for the desktop video */
  posterSrc?: string;
  /** Path to the dedicated portrait (9:16) hero video used below the md breakpoint. */
  mobileVideoSrc?: string;
  /** Poster / fallback image for the mobile video. */
  mobilePosterSrc?: string;
  className?: string;
}

/**
 * Responsive hero video — desktop vs. mobile source, and the
 * prefers-reduced-motion poster fallback, are all resolved with plain CSS
 * (Tailwind's `md:` and `motion-reduce:`/`motion-safe:` variants) rather
 * than JavaScript viewport detection. Both `<video>` elements are present
 * in the initial server-rendered HTML with the correct responsive classes
 * already applied, so there's no client-side flash of the wrong video and
 * no hydration-dependent state:
 *
 * - Below `md`: the mobile <video> is `block`, the desktop one is `hidden`.
 * - `md` and up: the reverse.
 * - `prefers-reduced-motion: reduce`: both videos are hidden and a poster
 *   image (matching the same breakpoint split) is shown instead.
 *
 * Browsers don't run the autoplay/decode pipeline for `display:none`
 * elements, so the hidden video at any given breakpoint is not actively
 * decoded/played — only its small `preload="metadata"` fetch may occur.
 */
export default function HeroMedia({
  videoSrc,
  posterSrc,
  mobileVideoSrc,
  mobilePosterSrc,
  className = "",
}: HeroMediaProps) {
  const effectiveMobileVideo = mobileVideoSrc ?? videoSrc;
  const effectiveMobilePoster = mobilePosterSrc ?? posterSrc;

  return (
    <>
      {/* Motion-safe: real video, breakpoint-switched purely via CSS */}
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
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      {effectiveMobileVideo && (
        <video
          className={`block md:hidden motion-reduce:!hidden object-cover ${className}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={effectiveMobilePoster}
          aria-hidden="true"
        >
          <source src={effectiveMobileVideo} type="video/mp4" />
        </video>
      )}

      {/* prefers-reduced-motion: still poster images, same breakpoint split */}
      {posterSrc && (
        <img
          src={posterSrc}
          alt=""
          className={`hidden motion-reduce:md:block object-cover ${className}`}
        />
      )}
      {effectiveMobilePoster && (
        <img
          src={effectiveMobilePoster}
          alt=""
          className={`hidden motion-reduce:block motion-reduce:md:hidden object-cover ${className}`}
        />
      )}
    </>
  );
}
