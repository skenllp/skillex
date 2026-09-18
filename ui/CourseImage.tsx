import Image from "next/image";
import type { CSSProperties } from "react";
import PhotoPlaceholder from "@/ui/PhotoPlaceholder";

interface CourseImageProps {
  /** Path to the photo, or null when dedicated photography hasn't been
   * supplied yet — renders a clearly-labelled placeholder instead of a
   * mismatched or generic stock image. */
  src: string | null;
  alt: string;
  className?: string;
  /** "crop" hides the left text panel baked into the source poster and shows
   * just the photography — used in compact cards. "showcase" is a gentler
   * crop for larger editorial blocks. "full" shows the whole poster,
   * including its own typography, as a complete campaign visual. */
  variant?: "crop" | "showcase" | "full";
  sizes?: string;
  priority?: boolean;
}

const cropStyles: Record<string, CSSProperties> = {
  crop: { objectPosition: "64% 36%" },
  showcase: { objectPosition: "62% 35%" },
  full: { objectPosition: "center" },
};

export default function CourseImage({
  src,
  alt,
  className = "",
  variant = "crop",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: CourseImageProps) {
  if (!src) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <PhotoPlaceholder label="Course photography pending" className="h-full w-full" dark />
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
        style={cropStyles[variant]}
      />
    </div>
  );
}
