import { ReactNode } from "react";
import { Box, Typography } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ContentBlockProps {
  title?: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  layout?: "standard" | "bordered" | "highlight";
  className?: string;
  children: ReactNode;
}

/**
 * ContentBlock: composição visual inteligente para textos e conteúdo
 * Garante que nenhum texto fique "jogado" na página
 */
export function ContentBlock({
  title,
  subtitle,
  alignment = "left",
  layout = "standard",
  className,
  children,
}: ContentBlockProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <Box
      className={cn(
        "relative",
        layout === "bordered" && "border-l-2 border-accent-500/30 pl-6",
        layout === "highlight" && "bg-gradient-to-r from-gray-50/80 to-transparent p-8 rounded-2xl",
        className
      )}
    >
      {/* Decoração lateral para layout bordered */}
      {layout === "bordered" && (
        <Box className="absolute -left-0.5 top-0 w-0.5 h-16 bg-accent-500" />
      )}

      <Box className={cn("space-y-6", alignmentClasses[alignment])}>
        {/* Header do bloco */}
        {(title || subtitle) && (
          <Box className={cn("space-y-3", alignmentClasses[alignment])}>
            {title && (
              <Box className="space-y-2">
                {alignment === "left" && (
                  <Box className="flex items-center gap-2">
                    <Box className="w-8 h-px bg-gradient-to-r from-accent-500 to-accent-300" />
                    <Box className="w-1.5 h-1.5 rounded-full bg-accent-500/60" />
                  </Box>
                )}
                <Typography variant="title" weight="bold" className="text-gray-900">
                  {title}
                </Typography>
                {alignment === "center" && (
                  <Box className="w-12 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto" />
                )}
              </Box>
            )}

            {subtitle && (
              <Typography variant="body" className="text-gray-600 leading-relaxed">
                {subtitle}
              </Typography>
            )}
          </Box>
        )}

        {/* Conteúdo principal */}
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
