import { Box } from "@/components/ui";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "line" | "gradient" | "dots" | "asymmetric";
  spacing?: "sm" | "md" | "lg";
  className?: string;
}

export function SectionDivider({
  variant = "gradient",
  spacing = "md",
  className,
}: SectionDividerProps) {
  const spacingClasses = {
    sm: "py-8",
    md: "py-12 lg:py-16",
    lg: "py-16 lg:py-24",
  };

  return (
    <Box className={cn("flex items-center justify-center", spacingClasses[spacing], className)}>
      {variant === "line" && (
        <Box className="w-full max-w-xs h-px bg-gray-200" />
      )}

      {variant === "gradient" && (
        <Box className="w-full max-w-2xl flex items-center gap-3">
          <Box className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <Box className="w-1.5 h-1.5 rounded-full bg-accent-400/70" />
          <Box className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-transparent" />
        </Box>
      )}

      {variant === "dots" && (
        <Box className="flex items-center gap-2">
          <Box className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <Box className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          <Box className="w-1.5 h-1.5 rounded-full bg-accent-500" />
          <Box className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          <Box className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        </Box>
      )}

      {variant === "asymmetric" && (
        <Box className="w-full max-w-2xl flex items-center gap-4">
          <Box className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-400/55 to-accent-300/20" />
          <Box className="w-2 h-2 rounded-full bg-accent-500/60" />
          <Box className="w-24 h-px bg-gradient-to-r from-accent-300/35 to-transparent" />
        </Box>
      )}
    </Box>
  );
}

interface VisualAccentProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  variant?: "lines" | "circle" | "grid";
  className?: string;
}

export function VisualAccent({
  position = "top-right",
  variant = "lines",
  className,
}: VisualAccentProps) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <Box className={cn("absolute pointer-events-none", positionClasses[position], className)}>
      {variant === "lines" && (
        <Box className="space-y-3 p-8 opacity-40">
          <Box className="w-20 h-px bg-gradient-to-r from-gray-300 to-transparent" />
          <Box className="w-16 h-px bg-gradient-to-r from-gray-200 to-transparent" />
          <Box className="w-24 h-px bg-gradient-to-r from-gray-300 to-transparent" />
        </Box>
      )}

      {variant === "circle" && (
        <Box className="p-12 opacity-30">
          <Box className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-100/60 to-transparent blur-2xl" />
        </Box>
      )}

      {variant === "grid" && (
        <Box className="w-32 h-32 opacity-20" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(229 231 235 / 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(229 231 235 / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px"
        }} />
      )}
    </Box>
  );
}
