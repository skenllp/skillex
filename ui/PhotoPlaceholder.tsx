"use client";

interface PhotoPlaceholderProps {
  label?: string;
  className?: string;
  dark?: boolean;
}

/**
 * Clearly-marked stand-in for real photography/video that has not
 * been supplied yet. Swap for <Image /> or <video> once real
 * Skillex campus assets are available — see README.md.
 */
export default function PhotoPlaceholder({
  label = "Photo placeholder",
  className = "",
  dark = true,
}: PhotoPlaceholderProps) {
  const patternId = `grid-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: dark
          ? "linear-gradient(135deg, #232323 0%, #1A1A1A 60%, #262626 100%)"
          : "linear-gradient(135deg, #EDEDED 0%, #F2F2F2 60%, #E7E7E7 100%)",
      }}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" preserveAspectRatio="none">
        <defs>
          <pattern id={patternId} width="28" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M28 0H0V28"
              fill="none"
              stroke={dark ? "#FFFFFF" : "#1A1A1A"}
              strokeWidth={1}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <span
        className="absolute bottom-3 right-3 px-2 py-1 text-[10px] tracking-wide"
        style={{
          color: dark ? "rgba(255,255,255,0.55)" : "rgba(26,26,26,0.45)",
          border: `1px solid ${dark ? "rgba(255,255,255,0.25)" : "rgba(26,26,26,0.2)"}`,
        }}
      >
        {label}
      </span>
    </div>
  );
}
