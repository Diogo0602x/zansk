import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "ghost" | "glass" | "solid";
}

const sizeClasses = {
  sm: "p-2",
  md: "p-3",
  lg: "p-4",
};

const variantClasses = {
  ghost: "hover:bg-white/10",
  glass: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20",
  solid: "bg-primary text-dark hover:bg-primary-200",
};

export function IconButton({
  icon,
  label,
  size = "md",
  variant = "ghost",
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl transition-all duration-200 ease-[var(--motion-ease-standard)] motion-safe:transform-gpu motion-safe:will-change-transform",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
}
