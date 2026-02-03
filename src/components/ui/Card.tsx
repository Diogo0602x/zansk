import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "glass" | "solid" | "outline";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const variantClasses = {
  glass: "bg-white/70 backdrop-blur-sm border border-gray-200/60 hover:bg-white/80 hover:border-gray-300/70 transition-all",
  solid: "bg-white shadow-sm hover:shadow-md transition-all",
  outline: "border border-gray-200 hover:border-gray-300 transition-all",
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
