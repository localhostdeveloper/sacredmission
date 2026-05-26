import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "cream";
  className?: string;
}

const variants = {
  gold: "bg-[#C9A84C] text-[#0a0a0a]",
  dark: "bg-[#0a0a0a] text-[#C9A84C] border border-[#C9A84C]/30",
  cream: "bg-[#F5F0E8] text-[#0a0a0a]",
};

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
