"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "outline-gold" | "outline-dark" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  withArrow?: boolean;
  withPlayIcon?: boolean;
}

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

const variants = {
  gold: "btn-gold",
  "outline-gold": "btn-outline-gold",
  "outline-dark": "btn-outline-dark",
  ghost: "bg-transparent text-current hover:underline",
};

export function Button({
  children,
  href,
  onClick,
  variant = "gold",
  size = "md",
  className,
  type = "button",
  disabled,
  withArrow,
  withPlayIcon,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 tracking-widest uppercase font-semibold transition-all duration-200",
    sizes[size],
    variants[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <>
      {withPlayIcon && (
        <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">
          <span className="border-t-4 border-b-4 border-l-8 border-transparent border-l-current ml-0.5 w-0 h-0" />
        </span>
      )}
      {children}
      {withArrow && <ArrowRight size={14} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
