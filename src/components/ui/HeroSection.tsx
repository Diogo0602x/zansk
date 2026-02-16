import { ReactNode } from "react";
import { Box, Container, Stack, Typography, Image, Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import { normalizeAssetPath } from "@/utils/assets";

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  backgroundImage?: string;
  layout?: "default" | "centered";
  className?: string;
  children?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  layout = "default",
  className,
  children,
}: HeroSectionProps) {
  const src = backgroundImage ? normalizeAssetPath(backgroundImage) : undefined;
  const filename = src?.split("/").pop()?.toLowerCase() ?? "";
  const asset = {
    src,
    isBg: filename.startsWith("bg") || filename.includes("bg-"),
  };

  const showVisualAside = layout === "default" && asset.src && !asset.isBg;

  return (
    <div className={cn("relative", "flex items-center", "py-14 sm:py-16 lg:py-18", "min-h-[520px] lg:min-h-[560px]", className)}>
      <Box className="absolute -top-20 lg:-top-24 inset-x-0 bottom-0 -z-10 overflow-hidden">
        <Box className="absolute -inset-12 hero-bg-premium-canvas" />
        <Box className="absolute -inset-12 hero-bg-premium-canvas-secondary opacity-35" />
        {asset.src && asset.isBg && (
          <Box aria-hidden="true" className="absolute inset-0 hidden md:block">
            <Image
              src={asset.src}
              alt=""
              fill
              sizes="100vw"
              quality={48}
              className="object-cover opacity-[0.2] mix-blend-multiply hero-bg-premium-image-alt"
            />
          </Box>
        )}
        <Box className="absolute inset-0 bg-gradient-to-br from-gray-500/16 via-transparent to-slate-500/22 mix-blend-soft-light" />
        <Box className="absolute inset-0 hero-bg-premium-grain opacity-[0.24]" />
        <Box className="absolute inset-y-0 -left-1/2 w-1/2 hero-bg-premium-sheen" />
        <Box className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_36%,rgb(15_23_42_/_0.12)_100%)]" />
        <Box className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/18 to-white/24" />
      </Box>

      <Container className="relative">
        {layout === "centered" ? (
          <Box className="mx-auto max-w-4xl">
            <Card
              variant="glass"
              padding="xl"
              className={cn(
                "relative",
                "bg-white/58 border-white/60 backdrop-blur-[8px]",
                "shadow-[0_16px_42px_rgba(15,23,42,0.14)]",
                "transition-shadow duration-300 hover:shadow-[0_20px_52px_rgba(15,23,42,0.18)]"
              )}
            >
              <Stack align="center" spacing="lg" className="text-center">
                <Box data-hero-rail className="flex items-center gap-2 opacity-70">
                  <Box className="h-[2px] w-10 bg-gradient-to-r from-transparent via-gray-500/70 to-transparent" />
                  <Box className="h-2 w-2 rounded-full bg-gray-500/70" />
                  <Box className="h-[2px] w-10 bg-gradient-to-l from-transparent via-gray-500/70 to-transparent" />
                </Box>

                {typeof title === "string" ? (
                  <Typography
                    data-hero-title
                    variant="display"
                    weight="bold"
                    className="text-balance text-gray-900 leading-[1.08] tracking-[-0.02em] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    {title}
                  </Typography>
                ) : (
                  title
                )}

                {subtitle && (
                  <Typography
                    data-hero-subtitle
                    variant="subtitle"
                    as="p"
                    className="text-balance text-gray-600 leading-relaxed max-w-2xl"
                  >
                    {subtitle}
                  </Typography>
                )}

                {children && <Box data-hero-cta className="pt-2">{children}</Box>}

                <Box className="mt-2 h-[2px] w-20 bg-gradient-to-r from-transparent via-gray-300/80 to-transparent opacity-60" />
              </Stack>
            </Card>
          </Box>
        ) : (
          <Box className="mx-auto max-w-[1400px]">
            <Box className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
              <Box className="hidden lg:flex lg:col-span-1 flex-col items-center gap-4 py-10">
                <Box data-hero-rail className="w-[2px] h-20 bg-gradient-to-b from-transparent via-gray-500/60 to-transparent" />
                <Box data-hero-rail className="w-2.5 h-2.5 rounded-full bg-gray-500/70 shadow-sm shadow-gray-500/30" />
                <Box data-hero-rail className="w-[2px] h-12 bg-gradient-to-b from-gray-500/45 to-transparent" />
              </Box>

              <Box className={cn("relative", showVisualAside ? "lg:col-span-7" : "lg:col-span-11")}>
                <Card
                  data-hero-card
                  variant="glass"
                  padding="xl"
                  className={cn(
                    "relative",
                    "bg-white/54 border-white/65 backdrop-blur-[10px]",
                    "shadow-[0_18px_46px_rgba(15,23,42,0.16)]",
                    "transition-all duration-300 hover:shadow-[0_24px_56px_rgba(15,23,42,0.2)]"
                  )}
                >

                  <Box data-hero-rail className="hidden lg:block absolute -left-6 top-10 w-[6px] h-28 rounded-full bg-gradient-to-b from-gray-500/80 via-gray-400/35 to-transparent" />

                  <Stack spacing="lg">
                    <Box data-hero-rail className="flex items-center gap-3">
                      <Box className="w-14 h-[2px] bg-gradient-to-r from-gray-500/80 via-gray-400/55 to-gray-300/40 rounded-full" />
                      <Box className="w-2 h-2 rounded-full bg-gray-500/70 shadow-sm shadow-gray-500/30" />
                    </Box>

                    {typeof title === "string" ? (
                      <Typography
                        data-hero-title
                        variant="display"
                        weight="bold"
                        className="text-gray-900 leading-[1.06] tracking-[-0.02em] text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]"
                      >
                        {title}
                      </Typography>
                    ) : (
                      title
                    )}

                    {subtitle && (
                      <Typography
                        data-hero-subtitle
                        variant="subtitle"
                        as="p"
                        className="text-gray-600 leading-relaxed text-lg max-w-2xl"
                      >
                        {subtitle}
                      </Typography>
                    )}

                    {children && (
                      <Box
                        data-hero-cta
                        className={cn(
                          "pt-3",

                          "[&_button]:transition-all [&_button]:duration-300",
                          "[&_button:hover]:bg-white/90 [&_button:hover]:border-gray-400/55",
                          "[&_button:hover]:shadow-lg [&_button:hover]:shadow-gray-500/10",
                          "[&_button:hover]:scale-[1.02]",
                          "[&_button_svg]:transition-transform [&_button_svg]:duration-300",
                          "[&_button:hover_svg]:translate-x-1.5"
                        )}
                      >
                        {children}
                      </Box>
                    )}
                  </Stack>
                </Card>
              </Box>

              {showVisualAside && (
                <Box data-hero-visual className="hidden lg:block lg:col-span-4 relative h-[440px]">
                  <Box className="absolute inset-0">
                    <Box className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[360px] rounded-3xl overflow-hidden">
                      <Image
                        src={asset.src!}
                        alt="Visual element"
                        fill
                        className="object-cover scale-105"
                      />
                      <Box className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/35 to-white/60 backdrop-blur-[2px]" />
                      <Box className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-500/5 to-gray-500/10" />
                    </Box>

                    <Box className="absolute right-8 top-8 w-44 h-44 opacity-25 rounded-3xl overflow-hidden">
                      <Box
                        className="w-full h-full"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, rgb(107 114 128 / 0.35) 1px, transparent 1px),
                            linear-gradient(to bottom, rgb(107 114 128 / 0.35) 1px, transparent 1px)
                          `,
                          backgroundSize: "22px 22px",
                        }}
                      />
                    </Box>

                    <Box className="absolute left-0 top-14 w-36 h-36 rounded-[2.25rem] bg-gradient-to-br from-gray-100/55 to-gray-50/24 backdrop-blur-sm border border-gray-200/40 rotate-12 shadow-md shadow-gray-500/10" />
                    <Box className="absolute right-10 bottom-12 w-28 h-28 rounded-3xl bg-gradient-to-tl from-gray-100/58 to-gray-50/24 backdrop-blur-sm border border-gray-200/45 -rotate-6" />

                    <Box className="absolute right-20 top-24 w-3 h-3 rounded-full bg-gray-500/55 shadow-md shadow-gray-500/25" />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Container>
    </div>
  );
}
