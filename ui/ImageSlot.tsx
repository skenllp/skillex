"use client";

import { useState } from "react";

export type ImageSlotType =
  | "Campus Image"
  | "Classroom Image"
  | "Course Image"
  | "Student Image"
  | "Mentor Image"
  | "Team Image"
  | "Practical Training Image";

export interface ImageSlotProps {
  /**
   * Asset path to the image, e.g. "/images/campus-exterior.webp".
   * If the file does not exist or fails to load, gracefully falls back.
   */
  src?: string | null;
  /** Accessible alt text describing the image. */
  alt: string;
  /** Internal semantic slot name (not displayed publicly on page). */
  label?: ImageSlotType | string;
  /**
   * 'neutral': renders a calm, neutral light architectural container.
   * 'hide': gracefully hides the container completely if asset is unavailable.
   */
  fallbackMode?: "neutral" | "hide";
  /** Tailwind aspect ratio class, e.g. "aspect-[16/10]", "aspect-[4/3]", "aspect-[16/9]". */
  aspectRatio?: string;
  className?: string;
  rounded?: string;
}

/**
 * Reusable Image Slot Component.
 *
 * Prepared for real SKILLEX photography to be inserted without depending on images.
 * Does NOT display placeholder words publicly.
 * Renders a neutral light background or hides gracefully if the asset is missing.
 */
export default function ImageSlot({
  src,
  alt,
  label,
  fallbackMode = "neutral",
  aspectRatio = "aspect-[16/10]",
  className = "",
  rounded = "rounded-card",
}: ImageSlotProps) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // If no source provided or image failed to load
  if (!src || hasError) {
    if (fallbackMode === "hide") {
      return null;
    }

    return (
      <div
        role="img"
        aria-label={alt || (label ? `${label} container` : "Image container")}
        data-slot={label}
        className={`relative overflow-hidden border border-line/70 bg-[#F4F5F1] ${aspectRatio} ${rounded} ${className} flex items-center justify-center`}
      >
        {/* Subtle dot pattern at 10-12% opacity */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage: "radial-gradient(#0D0E2B 1.2px, transparent 1.2px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Subtle, minimal architectural frame glyph (approx 10-12% opacity) */}
        <div aria-hidden className="relative text-navy opacity-[0.12]">
          <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="6" y="6" width="36" height="36" rx="5" />
            <path d="M12 34 L21 23 L31 31 L38 21" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="15" r="2.5" fill="currentColor" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      data-slot={label}
      className={`relative overflow-hidden ${aspectRatio} ${rounded} ${className} bg-[#F4F5F1]`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
