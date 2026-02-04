import { ReactNode } from "react";
import { Box, Container, Stack, Typography, Image, Card } from "@/components/ui";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string;
  backgroundImage?: string;
  layout?: "default" | "centered";
  className?: string;
  children?: ReactNode;
}

/**
 * HeroSection Premium v2 - Composição visual avançada
 * - Ancoragem visual assimétrica com card semi-flutuante
 * - Background participativo com grain/noise
 * - Equilíbrio horizontal com elementos secundários
 * - Micro-interações no CTA
 * - Padrão replicável para todas as páginas
 */
export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  layout = "default",
  className,
  children,
}: HeroSectionProps) {
  return (
    <Box
      className={cn(
        "relative overflow-hidden",
        // Altura compacta - elimina espaço em branco
        "min-h-[50vh] lg:min-h-[55vh]",
        "flex items-center",
        className
      )}
    >
      {/* Background image com overlay participativo */}
      {backgroundImage && (
        <Box className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover"
            style={{ opacity: 0.18 }}
            priority
          />
          {/* Overlay com variação de luz horizontal */}
          <Box className="absolute inset-0 bg-gradient-to-r from-white/97 via-white/94 to-gray-50/96" />
          {/* Grain/noise sutil para textura */}
          <Box
            className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </Box>
      )}

      {/* Grid técnico mais perceptível */}
      <Box className="absolute inset-0 z-0 opacity-[0.25]">
        <Box
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(59 130 246 / 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59 130 246 / 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </Box>

      {/* Linhas decorativas mais visíveis */}
      <Box className="absolute top-0 right-0 w-[40%] h-[2px] bg-gradient-to-l from-accent-500/40 via-accent-400/20 to-transparent" />
      <Box className="absolute bottom-0 left-0 w-[35%] h-[2px] bg-gradient-to-r from-accent-500/40 via-accent-400/20 to-transparent" />

      {/* Ponto decorativo superior direito */}
      <Box className="absolute top-8 right-12 hidden lg:block">
        <Box className="w-2 h-2 rounded-full bg-accent-500/50 shadow-sm shadow-accent-500/30" />
      </Box>

      {/* Content com ancoragem visual */}
      <Container className="relative z-10 py-12 lg:py-14">
        {layout === "centered" ? (
          // Layout centralizado para páginas específicas
          <Box className="max-w-4xl mx-auto">
            <Card
              variant="glass"
              padding="xl"
              className="backdrop-blur-md bg-white/60 border-white/40 shadow-xl
                       hover:shadow-2xl transition-shadow duration-500
                       relative
                       before:absolute before:inset-0 before:rounded-2xl
                       before:bg-gradient-to-br before:from-accent-500/5 before:to-transparent
                       before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
            >
              <Stack align="center" spacing="lg" className="text-center">
                {/* Indicador visual superior */}
                <Box className="flex items-center gap-2 opacity-60">
                  <Box className="w-8 h-[2px] bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
                  <Box className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  <Box className="w-8 h-[2px] bg-gradient-to-l from-transparent via-accent-500 to-transparent" />
                </Box>

                {typeof title === "string" ? (
                  <Typography
                    variant="display"
                    weight="bold"
                    className="text-balance text-gray-900 leading-[1.1] tracking-[-0.02em] text-4xl lg:text-5xl xl:text-6xl"
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

                {/* Indicador visual inferior */}
                <Box className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50 mt-2" />
              </Stack>
            </Card>
          </Box>
        ) : (
          // Layout assimétrico (default) - hero full-width com composição integrada
          <Box className="relative max-w-[1400px] mx-auto">
            <Box className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Barra lateral decorativa */}
              <Box className="hidden lg:flex flex-col items-center gap-4 py-12">
                <Box className="w-[2px] h-20 bg-gradient-to-b from-transparent via-accent-500/70 to-transparent" />
                <Box className="w-2.5 h-2.5 rounded-full bg-accent-500 shadow-lg shadow-accent-500/50
                              animate-pulse"
                     style={{ animationDuration: '3s' }}
                />
                <Box className="w-[2px] h-12 bg-gradient-to-b from-accent-500/50 to-transparent" />
              </Box>

              {/* Conteúdo principal - card expandido com elementos integrados */}
              <Box className="lg:col-span-11 relative">
                <Box className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                  {/* Card de conteúdo - 3 colunas */}
                  <Box className="lg:col-span-3 relative z-10">
                    {/* Elemento decorativo escapando */}
                    <Box className="absolute -left-6 top-8 w-1.5 h-24 bg-gradient-to-b from-accent-500 via-accent-400/50 to-transparent rounded-full hidden lg:block" />

                    <Card
                      variant="glass"
                      padding="xl"
                      className="backdrop-blur-lg bg-white/75 border-white/70
                               shadow-[0_8px_32px_rgb(0,0,0,0.09)]
                               hover:shadow-[0_16px_48px_rgb(0,0,0,0.13)]
                               transition-all duration-500
                               relative
                               before:absolute before:inset-0 before:rounded-2xl
                               before:bg-gradient-to-br before:from-accent-500/8 before:via-transparent before:to-transparent
                               before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
                    >
                      <Stack spacing="lg">
                        {/* Badge superior */}
                        <Box className="flex items-center gap-3">
                          <Box className="w-14 h-[2px] bg-gradient-to-r from-accent-500 via-accent-400 to-accent-300 rounded-full" />
                          <Box className="w-2 h-2 rounded-full bg-accent-500 shadow-md shadow-accent-500/40" />
                        </Box>

                        {/* Título */}
                        {typeof title === "string" ? (
                          <Typography
                            variant="display"
                            weight="bold"
                            className="text-gray-900 leading-[1.08] tracking-[-0.02em] 
                                     text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]"
                          >
                            {title}
                          </Typography>
                        ) : (
                          title
                        )}

                        {/* Subtítulo */}
                        {subtitle && (
                          <Typography
                            variant="subtitle"
                            className="text-gray-600 leading-relaxed text-lg"
                          >
                            {subtitle}
                          </Typography>
                        )}

                        {/* CTA com micro-interações */}
                        {children && (
                          <Box className="pt-3 [&_button]:transition-all [&_button]:duration-300
                                        [&_button:hover]:bg-white/90 [&_button:hover]:border-accent-400/70
                                        [&_button:hover]:shadow-xl [&_button:hover]:shadow-accent-500/15
                                        [&_button:hover]:scale-[1.02]
                                        [&_button_svg]:transition-transform [&_button_svg]:duration-300
                                        [&_button:hover_svg]:translate-x-1.5">
                            {children}
                          </Box>
                        )}
                      </Stack>
                    </Card>
                  </Box>

                  {/* Área visual integrada - 2 colunas */}
                  <Box className="hidden lg:block lg:col-span-2 relative h-[420px]">
                    {/* Container visual com elementos sobrepostos */}
                    <Box className="absolute inset-0">
                      {/* Imagem principal com tratamento */}
                      {backgroundImage && (
                        <Box className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[360px] rounded-3xl overflow-hidden">
                          <Image
                            src={backgroundImage}
                            alt="Visual Element"
                            fill
                            className="object-cover scale-105"
                          />
                          <Box className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-white/60 backdrop-blur-[2px]" />
                          <Box className="absolute inset-0 bg-gradient-to-l from-transparent via-accent-500/5 to-accent-500/10" />
                        </Box>
                      )}

                      {/* Grade técnica grande */}
                      <Box className="absolute right-8 top-8 w-48 h-48 opacity-30 rounded-3xl overflow-hidden">
                        <Box
                          className="w-full h-full"
                          style={{
                            backgroundImage: `
                              linear-gradient(to right, rgb(59 130 246 / 0.5) 1px, transparent 1px),
                              linear-gradient(to bottom, rgb(59 130 246 / 0.5) 1px, transparent 1px)
                            `,
                            backgroundSize: "24px 24px",
                          }}
                        />
                      </Box>

                      {/* Formas geométricas decorativas */}
                      <Box className="absolute left-0 top-12 w-40 h-40 rounded-[2.5rem] bg-gradient-to-br from-accent-100/40 to-accent-50/20 backdrop-blur-sm border border-accent-200/40 rotate-12 shadow-lg shadow-accent-500/10" />
                      <Box className="absolute right-12 bottom-12 w-28 h-28 rounded-3xl bg-gradient-to-tl from-gray-100/50 to-accent-50/30 backdrop-blur-sm border border-gray-200/50 -rotate-6" />

                      {/* Linhas técnicas variadas */}
                      <Box className="absolute left-8 top-1/2 -translate-y-1/2 space-y-5 opacity-50">
                        <Box className="flex items-center gap-2.5">
                          <Box className="w-24 h-[2px] bg-gradient-to-r from-accent-500 to-accent-400/50 rounded-full shadow-sm shadow-accent-500/30" />
                          <Box className="w-2 h-2 rounded-full bg-accent-500 shadow-sm shadow-accent-500/40" />
                        </Box>
                        <Box className="flex items-center gap-2 pl-8">
                          <Box className="w-28 h-[2px] bg-gradient-to-r from-accent-400 to-gray-400/50 rounded-full" />
                        </Box>
                        <Box className="flex items-center gap-2.5 pl-4">
                          <Box className="w-20 h-[2px] bg-gradient-to-r from-accent-500 to-transparent rounded-full shadow-sm shadow-accent-500/20" />
                          <Box className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                        </Box>
                        <Box className="flex items-center gap-2 pl-12">
                          <Box className="w-24 h-[2px] bg-gradient-to-r from-gray-500 to-gray-300/50 rounded-full" />
                        </Box>
                        <Box className="flex items-center gap-2 pl-6">
                          <Box className="w-16 h-[2px] bg-gradient-to-r from-accent-300 to-transparent rounded-full" />
                        </Box>
                      </Box>

                      {/* Pontos decorativos */}
                      <Box className="absolute right-20 top-24 w-3 h-3 rounded-full bg-accent-500/60 shadow-lg shadow-accent-500/40 animate-pulse" style={{ animationDuration: '2s' }} />
                      <Box className="absolute right-32 bottom-20 w-2 h-2 rounded-full bg-accent-400/50 shadow-md shadow-accent-400/30" />

                      {/* Glow ambiente expandido */}
                      <Box className="absolute -right-12 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-accent-200/30 via-accent-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
