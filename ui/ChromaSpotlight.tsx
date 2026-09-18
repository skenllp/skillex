"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

interface ChromaSpotlightProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderGlowColor?: string;
  radius?: number;
  interactive?: boolean;
}

/**
 * ChromaSpotlight: Tracks cursor movement across the card to render
 * a dynamic chromatic border glow and subtle inner radial spotlight beam.
 * When the cursor moves, the card's border stroke is brightly illuminated
 * right under the cursor with a vivid chromatic gradient.
 */
export default function ChromaSpotlight({
  children,
  className = "",
  glowColor = "rgba(140, 198, 63, 0.12)",
  borderGlowColor = "rgba(140, 198, 63, 0.95)",
  radius = 340,
  interactive = true,
}: ChromaSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);
  // Fine (mouse-like) pointer only — on touch/coarse pointers the glow
  // has no "leave" event to reset it, so it would stay stuck after a tap.
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(query.matches);
    const listener = (e: MediaQueryListEvent) => setCanHover(e.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  const isInteractive = interactive && canHover;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isInteractive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  }, [isInteractive]);

  const handleMouseEnter = useCallback(() => {
    if (isInteractive) setOpacity(1);
  }, [isInteractive]);

  const handleMouseLeave = useCallback(() => {
    if (isInteractive) setOpacity(0);
  }, [isInteractive]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* 1. Dynamic Cursor Border Glow (Masked Stroke Layer) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
        style={{
          opacity,
          padding: "1.5px",
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${borderGlowColor}, rgba(0, 242, 254, 0.75) 42%, rgba(140, 198, 63, 0.3) 68%, transparent 80%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* 2. Dynamic Inner Surface Spotlight Beam */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(${radius * 0.75}px circle at ${position.x}px ${position.y}px, ${glowColor}, rgba(0, 242, 254, 0.04) 50%, transparent 75%)`,
        }}
      />

      {/* 3. Card Content */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
