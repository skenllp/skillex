import Image from "next/image";

interface LogoProps {
  /** Apply a drop-shadow so the logo reads clearly over dark/video backgrounds. */
  onDark?: boolean;
  className?: string;
  height?: number;
}

/**
 * The one approved Skillex logo asset (public/assets/skillex-logo.png).
 * Never recreated, redrawn, recolored, or regenerated — only ever rendered
 * as-is via next/image, at a fixed aspect ratio.
 */
export default function Logo({ onDark = false, className = "", height = 34 }: LogoProps) {
  const width = Math.round(height * (920 / 218));
  const src = onDark ? "/assets/skillex-logo-white.png" : "/assets/skillex-logo.png";

  return (
    <div className={`relative inline-flex items-center ${className}`} style={{ height }}>
      <Image
        src={src}
        alt="Skillex"
        width={width}
        height={height}
        priority
        className="transition-opacity duration-300"
        style={{
          height,
          width: "auto",
        }}
      />
    </div>
  );
}
