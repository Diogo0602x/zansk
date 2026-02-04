import { Box, Container, Stack, Typography, Button, Card, Image, HeroSection, ContentBlock, SectionDivider, VisualAccent } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import { FaPalette, FaRocket, FaCheckCircle, FaArrowRight, FaLayerGroup } from "react-icons/fa";

const { pages } = siteContent;
const homeContent = pages.home;

export default function HomePage() {
  return (
    <Box>
      <HeroSection
        layout="default"
        title={homeContent.content.headline}
        subtitle={homeContent.content.subheadline}
        backgroundImage={homeContent.images.bg}
      >
        <Button variant="ghost" size="lg" className="group mt-2">
          <Box className="flex items-center gap-3">
            <Typography variant="body" weight="medium">
              {homeContent.content.cta}
            </Typography>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
          </Box>
        </Button>
      </HeroSection>

      <Box className="py-20 lg:py-32 relative overflow-hidden">
        <VisualAccent position="top-right" variant="grid" />

        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <Box className="lg:col-span-5">
              <ContentBlock
                layout="bordered"
                title="Design que comunica e converte"
                subtitle="Criamos interfaces intuitivas e experiências memoráveis que colocam o usuário no centro de cada decisão."
              >
                <Stack spacing="md" className="mt-6">
                  <Box className="flex items-center gap-3 text-gray-700">
                    <Box className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    <Typography variant="body" className="text-sm">
                      Pesquisa e estratégia centrada no usuário
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-3 text-gray-700">
                    <Box className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    <Typography variant="body" className="text-sm">
                      Prototipagem de alta fidelidade
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-3 text-gray-700">
                    <Box className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                    <Typography variant="body" className="text-sm">
                      Testes de usabilidade e iteração
                    </Typography>
                  </Box>
                </Stack>
              </ContentBlock>
            </Box>

            <Box className="lg:col-span-7 relative">
              <Box className="absolute -right-8 -top-8 w-full h-full bg-gradient-to-br from-accent-100/30 to-transparent rounded-3xl blur-2xl opacity-50" />

              <Card
                variant="glass"
                padding="none"
                className="overflow-hidden aspect-video relative shadow-2xl border-accent-200/50"
              >
                <Image
                  src={homeContent.images.homeUi}
                  alt="UI Design"
                  fill
                  className="object-cover"
                />

                <Box className="absolute inset-0 bg-gradient-to-tr from-accent-500/5 via-transparent to-transparent" />
              </Card>

              <Box className="absolute -bottom-4 -left-4 px-5 py-3 bg-white backdrop-blur-md rounded-2xl border border-gray-200 shadow-xl">
                <Box className="flex items-center gap-3">
                  <Box className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-100 to-accent-50 flex items-center justify-center">
                    <FaPalette className="text-accent-600" />
                  </Box>
                  <Box>
                    <Typography variant="caption" weight="bold" className="text-gray-900 block">
                      Design System
                    </Typography>
                    <Typography variant="caption" className="text-gray-600 text-xs">
                      Escalável e consistente
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <SectionDivider variant="gradient" spacing="md" />

      <Box className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-gray-50/60 to-transparent relative">
        <VisualAccent position="bottom-left" variant="lines" />

        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <Box className="lg:col-span-6 order-2 lg:order-1 relative">
              <Box className="absolute -left-4 top-1/2 -translate-y-1/2 space-y-2 hidden lg:block">
                <Box className="w-8 h-px bg-gradient-to-r from-accent-400 to-transparent" />
                <Box className="w-12 h-px bg-gradient-to-r from-accent-300 to-transparent" />
                <Box className="w-6 h-px bg-gradient-to-r from-accent-200 to-transparent" />
              </Box>

              <Box className="relative">
                <Card
                  variant="glass"
                  padding="none"
                  className="overflow-hidden aspect-video relative shadow-xl"
                >
                  <Image
                    src={homeContent.images.homeMethod}
                    alt="Method"
                    fill
                    className="object-cover"
                  />
                  <Box className="absolute inset-0 bg-gradient-to-tl from-accent-500/10 via-transparent to-transparent" />
                </Card>

                <Box className="absolute -top-4 -right-4 px-4 py-3 bg-white/95 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg">
                  <Typography variant="caption" weight="bold" className="text-accent-600 text-2xl block">
                    100%
                  </Typography>
                  <Typography variant="caption" className="text-gray-600 text-xs">
                    Transparência
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="lg:col-span-6 order-1 lg:order-2">
              <ContentBlock
                title="Processo claro e entrega consistente"
              >
                <Typography variant="body" className="text-gray-600 leading-loose mb-6">
                  Trabalhamos com transparência total, alinhando expectativas e entregando resultados mensuráveis em cada etapa.
                </Typography>

                <Box className="grid grid-cols-2 gap-4 mt-8">
                  <Card variant="glass" padding="md" className="border-gray-200/60">
                    <Box className="space-y-2">
                      <Box className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
                        <FaCheckCircle className="text-accent-600 text-sm" />
                      </Box>
                      <Typography variant="body" weight="semibold" className="text-gray-900 text-sm">
                        Sprints semanais
                      </Typography>
                      <Typography variant="caption" className="text-gray-600 text-xs">
                        Feedback contínuo
                      </Typography>
                    </Box>
                  </Card>

                  <Card variant="glass" padding="md" className="border-gray-200/60">
                    <Box className="space-y-2">
                      <Box className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
                        <FaLayerGroup className="text-accent-600 text-sm" />
                      </Box>
                      <Typography variant="body" weight="semibold" className="text-gray-900 text-sm">
                        Entregas iterativas
                      </Typography>
                      <Typography variant="caption" className="text-gray-600 text-xs">
                        Valor desde o dia 1
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              </ContentBlock>
            </Box>
          </Box>
        </Container>
      </Box>

      <SectionDivider variant="asymmetric" spacing="lg" />

      <Box className="py-20 lg:py-32 relative overflow-hidden">
        <Box className="absolute inset-0 opacity-40">
          <Box className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent-100/60 to-transparent rounded-full blur-3xl" />
          <Box className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent-100/60 to-transparent rounded-full blur-3xl" />
        </Box>

        <Container className="relative z-10">
          <Card variant="glass" padding="none" className="max-w-5xl mx-auto overflow-hidden border-accent-200/60">
            <Box className="grid grid-cols-1 lg:grid-cols-12">
              <Box className="lg:col-span-1 bg-gradient-to-b from-accent-500 via-accent-400 to-accent-300 hidden lg:flex items-center justify-center">
                <Box className="space-y-4 py-8">
                  <Box className="w-2 h-2 rounded-full bg-white/80" />
                  <Box className="w-px h-16 bg-white/40" />
                  <Box className="w-2 h-2 rounded-full bg-white/60" />
                </Box>
              </Box>

              <Box className="lg:col-span-11 p-10 lg:p-16">
                <Stack align="center" spacing="xl" className="text-center">
                  <Box className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-accent-100 to-accent-50 border-2 border-accent-200">
                    <FaRocket className="text-accent-600 text-4xl" />
                  </Box>

                  <Box className="space-y-4">
                    <Typography variant="display" weight="bold" className="text-gray-900 text-balance">
                      Pronto para transformar sua ideia em realidade?
                    </Typography>
                    <Typography variant="subtitle" className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                      Vamos conversar sobre como podemos ajudar seu produto a alcançar o próximo nível
                    </Typography>
                  </Box>

                  <Button variant="ghost" size="lg" className="group mt-4">
                    <Box className="flex items-center gap-3">
                      <Typography variant="body" weight="medium">
                        {homeContent.content.cta}
                      </Typography>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
                    </Box>
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
