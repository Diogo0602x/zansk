import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Box, Typography } from "@/components/ui";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
}

const variantClasses = {
  solid: "bg-primary text-dark hover:bg-primary-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg",
  ghost: "bg-transparent hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] border border-white/20 hover:border-white/30",
  glass: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98] shadow-glass-sm hover:shadow-glass",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "glass",
  size = "md",
  loading = false,
  fullWidth = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Box className="flex items-center justify-center gap-2">
          <Box className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <Typography variant="caption" weight="medium">
            Carregando...
          </Typography>
        </Box>
      ) : (
        children
      )}
    </button>
  );
}
