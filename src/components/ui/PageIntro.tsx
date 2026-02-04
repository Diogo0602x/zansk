import { ReactNode } from "react";
import { Box, Container, Stack, Typography, Image } from "@/components/ui";
import { cn } from "@/lib/utils";

interface PageIntroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  children?: ReactNode;
}

export function PageIntro({
  title,
  subtitle,
  backgroundImage,
  className,
  children,
}: PageIntroProps) {
  return (
    <Box
      className={cn(
        "relative min-h-[45vh] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {backgroundImage ? (
        <Box className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-25"
            priority
          />
          <Box className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white" />
        </Box>
      ) : (
        <Box className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <Box className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gray-200"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </Box>
        </Box>
      )}

      <Container className="relative z-10 pt-24 pb-12">
        <Stack align="center" spacing="lg" className="text-center max-w-3xl mx-auto">
          <Box className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent rounded-full" />

          <Typography
            variant="display"
            weight="bold"
            className="text-gray-900 text-balance"
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="subtitle"
              className="text-gray-600 leading-relaxed text-balance max-w-2xl"
            >
              {subtitle}
            </Typography>
          )}

          {children}

          <Box className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full mt-4" />
        </Stack>
      </Container>
    </Box>
  );
}
