import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Box, Typography } from "@/components/ui";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  phone?: string;
  whatsapp?: string;
}

const variantClasses = {
  solid: "bg-accent-500 text-white hover:bg-accent-600 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md transition-all",
  ghost: "bg-transparent hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 transition-all",
  glass: "bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-white/80 hover:border-gray-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow transition-all text-gray-700 hover:text-gray-900",
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
  phone,
  whatsapp,
  ...props
}: ButtonProps) {
  const content = loading ? (
    <Box className="flex items-center justify-center gap-2">
      <Box className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      <Typography variant="caption" weight="medium">
        Carregando...
      </Typography>
    </Box>
  ) : (
    children
  );

  if (whatsapp) {
    const whatsappMessage = encodeURIComponent("Olá, gostaria de realizar um orçamento!");
    return (
      <a
        href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`}
        className={cn(
          "inline-block rounded-xl font-medium transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className
        )}
        aria-label={`Enviar mensagem para ${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return phone ? (
    <a
      href={`tel:${phone}`}
      className={cn(
        "inline-block rounded-xl font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      aria-label={`Ligar para ${phone}`}
    >
      {content}
    </a>
  ) : (
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
      {content}
    </button>
  );
}
