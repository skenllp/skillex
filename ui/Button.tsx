import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  showArrow?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "solid",
  showArrow = true,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 min-h-[50px] text-[15px] font-semibold transition-all duration-300";

  const styles =
    variant === "solid"
      ? "bg-skill-green text-charcoal hover:-translate-y-0.5"
      : "border border-white/60 text-white hover:bg-white hover:text-charcoal";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {showArrow && <ArrowRight size={16} />}
    </a>
  );
}
