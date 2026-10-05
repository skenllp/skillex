import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  showArrow?: boolean;
  className?: string;
}

export default function Button({ href, children, variant = "solid", showArrow = false, className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`btn group ${variant === "solid" ? "btn-primary" : "btn-secondary"} ${className}`}>
      {children}
      {showArrow && <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />}
    </Link>
  );
}
