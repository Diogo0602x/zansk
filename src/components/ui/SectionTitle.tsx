import { ReactNode } from "react";
import { Box, Typography } from "@/components/ui";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  showLine?: boolean;
}

export function SectionTitle({
  children,
  subtitle,
  align = "left",
  className,
  showLine = true,
}: SectionTitleProps) {
  return (
    <Box
      className={cn(
        "space-y-3",
        align === "center" && "text-center items-center",
        align === "right" && "text-right items-end",
        "flex flex-col",
        className
      )}
    >
      {showLine && (
        <Box
          className={cn(
            "h-0.5 w-12 bg-gradient-to-r from-accent-500 to-accent-300 rounded-full",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto"
          )}
        />
      )}

      <Typography
        variant="title"
        as="h2"
        weight="bold"
        align={align}
        className="text-gray-900"
      >
        {children}
      </Typography>

      {subtitle && (
        <Typography
          variant="body"
          align={align}
          className="text-gray-600 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
