import { ReactNode, useMemo } from "react";
import { Box, Container, Stack, Typography, Image, Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import { normalizeAssetPath } from "@/utils/assets";

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  /** Pode ser bg-* (background) ou uma imagem de apoio visual */
  backgroundImage?: string;
  layout?: "default" | "centered";
  className?: string;
  children?: ReactNode;
}

/**
 * HeroSection Premium — Clean, tecnológico, replicável
 * - bg-* sempre como background (pronto para receber texto)
 * - Composição horizontal no desktop (card + visual element)
 * - Mobile-first: compacto, legível, sem vazios
 * - Camadas e decoração reduzidas (código mais sustentável)
 */
export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  layout = "default",
  className,
  children,
}: HeroSectionProps) {
  const asset = useMemo(() => {
    const src = backgroundImage ? normalizeAssetPath(backgroundImage) : undefined;
    if (!src) return { src: undefined, isBg: false };

    // Regra: qualquer asset com "bg" no nome do arquivo é tratado como background
    // Ex.: /home/bg.png, /contact/bg-stripes.png, /cases/bg-tech.png
    const filename = src.split("/").pop()?.toLowerCase() ?? "";
    const isBg = filename.startsWith("bg") || filename.includes("bg-");

    return { src, isBg };
  }, [backgroundImage]);

  const showVisualAside = layout === "default" && asset.src && !asset.isBg;

  return (
    <Box
      className={cn(
        "relative overflow-hidden",
        "flex items-center",
        // Mobile-first: compacto e sem vazios artificiais
        "py-14 sm:py-16 lg:py-18",
        // Altura mínima suave (não “tela inteira”)
        "min-h-[520px] lg:min-h-[560px]",
        className
      )}
    >
      {/* BACKGROUND (sempre leve e legível) */}
      <Box className="absolute inset-0 -z-10">
        {/* Imagem bg-* (quando existir) */}
        {asset.src && asset.isBg && (
          <Image
            src={asset.src}
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
        )}

        {/* Base clara para manter o padrão transparente e leitura */}
        <Box className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

        {/* Grid técnico sutil (bem discreto) */}
        <Box
          className={cn(
            "absolute inset-0",
            "opacity-[0.22]",
            "pointer-events-none"
          )}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(59 130 246 / 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59 130 246 / 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* “Glow” ambiental — bem sutil */}
        <Box className="absolute -right-24 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-gradient-radial from-blue-200/25 via-blue-100/15 to-transparent blur-3xl pointer-events-none" />
        <Box className="absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full bg-gradient-radial from-gray-200/30 via-gray-100/15 to-transparent blur-3xl pointer-events-none" />

        {/* Linhas finas de moldura (detalhe tech) */}
        <Box className="absolute top-0 right-0 h-[2px] w-[38%] bg-gradient-to-l from-blue-500/25 via-blue-400/10 to-transparent" />
        <Box className="absolute bottom-0 left-0 h-[2px] w-[34%] bg-gradient-to-r from-blue-500/25 via-blue-400/10 to-transparent" />
      </Box>

      <Container className="relative">
        {layout === "centered" ? (
          <Box className="mx-auto max-w-4xl">
            <Card
              variant="glass"
              padding="xl"
              className={cn(
                "relative",
                "bg-white/70 border-white/55 backdrop-blur-md",
                "shadow-[0_12px_36px_rgba(0,0,0,0.10)]",
                "transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(0,0,0,0.12)]"
              )}
            >
              <Stack align="center" spacing="lg" className="text-center">
                <Box className="flex items-center gap-2 opacity-70">
                  <Box className="h-[2px] w-10 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
                  <Box className="h-2 w-2 rounded-full bg-blue-500/70" />
                  <Box className="h-[2px] w-10 bg-gradient-to-l from-transparent via-blue-500/70 to-transparent" />
                </Box>

                {typeof title === "string" ? (
                  <Typography
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
                    variant="subtitle"
                    className="text-balance text-gray-600 leading-relaxed max-w-2xl"
                  >
                    {subtitle}
                  </Typography>
                )}

                {children && <Box className="pt-2">{children}</Box>}

                <Box className="mt-2 h-[2px] w-20 bg-gradient-to-r from-transparent via-gray-300/80 to-transparent opacity-60" />
              </Stack>
            </Card>
          </Box>
        ) : (
          <Box className="mx-auto max-w-[1400px]">
            <Box className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
              {/* Decor lateral mínima (desktop only) */}
              <Box className="hidden lg:flex lg:col-span-1 flex-col items-center gap-4 py-10">
                <Box className="w-[2px] h-20 bg-gradient-to-b from-transparent via-blue-500/60 to-transparent" />
                <Box className="w-2.5 h-2.5 rounded-full bg-blue-500/70 shadow-sm shadow-blue-500/30" />
                <Box className="w-[2px] h-12 bg-gradient-to-b from-blue-500/45 to-transparent" />
              </Box>

              {/* Conteúdo */}
              <Box className={cn("relative", showVisualAside ? "lg:col-span-7" : "lg:col-span-11")}>
                <Card
                  variant="glass"
                  padding="xl"
                  className={cn(
                    "relative",
                    "bg-white/78 border-white/60 backdrop-blur-lg",
                    "shadow-[0_10px_34px_rgba(0,0,0,0.10)]",
                    "transition-all duration-300 hover:shadow-[0_16px_46px_rgba(0,0,0,0.12)]"
                  )}
                >
                  {/* Detalhe “escapando” do card */}
                  <Box className="hidden lg:block absolute -left-6 top-10 w-[6px] h-28 rounded-full bg-gradient-to-b from-blue-500/80 via-blue-400/35 to-transparent" />

                  <Stack spacing="lg">
                    <Box className="flex items-center gap-3">
                      <Box className="w-14 h-[2px] bg-gradient-to-r from-blue-500/80 via-blue-400/55 to-blue-300/40 rounded-full" />
                      <Box className="w-2 h-2 rounded-full bg-blue-500/70 shadow-sm shadow-blue-500/30" />
                    </Box>

                    {typeof title === "string" ? (
                      <Typography
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
                        variant="subtitle"
                        className="text-gray-600 leading-relaxed text-lg max-w-2xl"
                      >
                        {subtitle}
                      </Typography>
                    )}

                    {children && (
                      <Box
                        className={cn(
                          "pt-3",
                          // Micro-interações “produto” para CTAs dentro do hero
                          "[&_button]:transition-all [&_button]:duration-300",
                          "[&_button:hover]:bg-white/90 [&_button:hover]:border-blue-400/55",
                          "[&_button:hover]:shadow-lg [&_button:hover]:shadow-blue-500/10",
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

              {/* Visual aside (somente se NÃO for bg-*) */}
              {showVisualAside && (
                <Box className="hidden lg:block lg:col-span-4 relative h-[440px]">
                  <Box className="absolute inset-0">
                    <Box className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[360px] rounded-3xl overflow-hidden">
                      <Image
                        src={asset.src!}
                        alt="Visual element"
                        fill
                        className="object-cover scale-105"
                      />
                      {/* Tratamento claro para manter transparência e legibilidade do conjunto */}
                      <Box className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/35 to-white/60 backdrop-blur-[2px]" />
                      <Box className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/5 to-blue-500/10" />
                    </Box>

                    {/* Grid pequeno e formas (bem sutis) */}
                    <Box className="absolute right-8 top-8 w-44 h-44 opacity-25 rounded-3xl overflow-hidden">
                      <Box
                        className="w-full h-full"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, rgb(59 130 246 / 0.35) 1px, transparent 1px),
                            linear-gradient(to bottom, rgb(59 130 246 / 0.35) 1px, transparent 1px)
                          `,
                          backgroundSize: "22px 22px",
                        }}
                      />
                    </Box>

                    <Box className="absolute left-0 top-14 w-36 h-36 rounded-[2.25rem] bg-gradient-to-br from-blue-100/45 to-blue-50/20 backdrop-blur-sm border border-blue-200/35 rotate-12 shadow-md shadow-blue-500/10" />
                    <Box className="absolute right-10 bottom-12 w-28 h-28 rounded-3xl bg-gradient-to-tl from-gray-100/55 to-blue-50/25 backdrop-blur-sm border border-gray-200/45 -rotate-6" />

                    <Box className="absolute right-20 top-24 w-3 h-3 rounded-full bg-blue-500/55 shadow-md shadow-blue-500/25" />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
