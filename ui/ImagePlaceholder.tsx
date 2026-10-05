import ImageSlot, { ImageSlotProps } from "@/ui/ImageSlot";

interface Props {
  src?: string | null;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
  aspectRatio?: string;
  fallbackMode?: "neutral" | "hide";
}

/**
 * Reusable image slot. Layouts never depend on photography: with no `src` or when
 * asset is missing, renders a neutral clean light container without public text.
 */
export default function ImagePlaceholder({
  src,
  alt,
  label = "Campus Image",
  className = "",
  aspectRatio = "aspect-[16/10]",
  fallbackMode = "neutral",
}: Props) {
  return (
    <ImageSlot
      src={src}
      alt={alt}
      label={label}
      fallbackMode={fallbackMode}
      aspectRatio={aspectRatio}
      className={className}
    />
  );
}
