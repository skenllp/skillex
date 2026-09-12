"use client";

import { useEffect, useRef, useState } from "react";

interface ChromaGridProps {
  className?: string;
  gridSize?: number;
  baseOpacity?: number;
  interactiveRadius?: number;
}

/**
 * ChromaGrid: Dynamic interactive grid that illuminates with a vivid chromatic
 * spotlight (Skill Green & Cyan) right beneath the user's cursor as they move.
 * Uses window mouse tracking so all underlying interactive elements (buttons, links)
 * remain 100% clickable and smooth.
 */
export default function ChromaGrid({
  className = "",
  gridSize = 44,
  baseOpacity = 0.08,
  interactiveRadius = 380,
}: ChromaGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const padding = 100; // soft perimeter buffer

          const isInside =
            e.clientX >= rect.left - padding &&
            e.clientX <= rect.right + padding &&
            e.clientY >= rect.top - padding &&
            e.clientY <= rect.bottom + padding;

          if (isInside) {
            setPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
            setActive(true);
          } else {
            setActive(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseLeaveWindow = () => setActive(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      {/* 1. Base Subtle Ambient Grid */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: baseOpacity,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* 2. Interactive Cursor-Reactive Chroma Grid Spotlight Layer */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          backgroundImage: `
            linear-gradient(to right, rgba(140, 198, 63, 0.65) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 242, 254, 0.65) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          WebkitMask: `radial-gradient(${interactiveRadius}px circle at ${pos.x}px ${pos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, transparent 75%)`,
          mask: `radial-gradient(${interactiveRadius}px circle at ${pos.x}px ${pos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, transparent 75%)`,
        }}
      />

      {/* 3. Subtle Luminous Cursor Aura Following the Mouse */}
      <div
        className="absolute rounded-full pointer-events-none transition-opacity duration-300 blur-2xl"
        style={{
          opacity: active ? 0.35 : 0,
          left: `${pos.x - 140}px`,
          top: `${pos.y - 140}px`,
          width: "280px",
          height: "280px",
          background: "radial-gradient(circle, rgba(140, 198, 63, 0.45) 0%, rgba(0, 242, 254, 0.2) 50%, transparent 70%)",
        }}
      />
    </div>
  );
}
