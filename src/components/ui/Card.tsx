import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "glass" | "solid" | "outline";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const variantClasses = {
  glass: "bg-white/5 backdrop-blur-md border border-white/10 shadow-glass hover:bg-white/[0.07] hover:border-white/20 hover:shadow-glass-lg",
  solid: "bg-white shadow-lg hover:shadow-xl",
  outline: "border border-secondary-300 hover:border-primary/30",
};

const paddingClasses = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-12",
};

export function Card({
  children,
  variant = "glass",
  padding = "md",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all",
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
