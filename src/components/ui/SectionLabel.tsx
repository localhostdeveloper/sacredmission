import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export function SectionLabel({ children, dark = false, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <span className={cn("w-8 h-px", dark ? "bg-gold" : "bg-[#C9A84C]")} style={{ backgroundColor: "#C9A84C" }} />
      <span
        className="text-xs tracking-widest uppercase font-semibold"
        style={{ color: "#C9A84C" }}
      >
        {children}
      </span>
    </div>
  );
}
