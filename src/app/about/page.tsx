import { Box, Container, Stack, Typography, Card, Image, HeroSection, SectionTitle } from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import siteContent from "@/constants/siteContent";
import { FaEye, FaAward, FaBullseye } from "react-icons/fa";

const { pages } = siteContent;
const aboutContent = pages.about;

export default function AboutPage() {
  return (
    <Box>
      <Reveal as="section" variant="heading">
        <HeroSection
          layout="default"
          title={aboutContent.content.headline || "Sobre"}
          subtitle={aboutContent.content.text}
          backgroundImage={aboutContent.images.humanWorkspace}
        />
      </Reveal>

      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Stagger as="div" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" childSelector="[data-stagger-item]">
            <Card data-stagger-item variant="glass" padding="none" className="overflow-hidden aspect-square relative shadow-lg">
              <Image
                src={aboutContent.images.humanWorkspace}
                alt="Workspace"
                fill
                className="object-cover"
              />
            </Card>
            <Card data-stagger-item variant="glass" padding="none" className="overflow-hidden aspect-square relative shadow-lg">
              <Image
                src={aboutContent.images.abstractGeometry}
                alt="Abstract Geometry"
                fill
                className="object-cover"
              />
            </Card>
            <Card
              data-stagger-item
              variant="glass"
              padding="none"
              className="overflow-hidden aspect-square relative md:col-span-2 lg:col-span-1 shadow-lg"
            >
              <Image
                src={aboutContent.images.teamMoment}
                alt="Team Moment"
                fill
                className="object-cover"
              />
            </Card>
          </Stagger>
        </Container>
      </Box>

      <Box className="py-20 lg:py-28">
        <Container>
          <Stack spacing="xl">
            <Reveal as="div" variant="heading">
              <SectionTitle align="center" subtitle="Princípios que guiam nosso trabalho e definem nossa cultura">
                Nossos valores
              </SectionTitle>
            </Reveal>
            <Stagger as="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" childSelector="[data-stagger-item]">
              <Card data-stagger-item variant="glass" padding="lg" className="relative overflow-hidden border-accent-200/50">
                <Box className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-300 to-transparent" />
                <Stack spacing="md">
                  <Box className="flex items-start justify-between gap-4">
                    <Box className="space-y-2">
                      <Typography variant="caption" as="span" className="inline-flex rounded-full bg-gray-100 border border-gray-200 px-2.5 py-1 text-xs text-gray-600">
                        Valor essencial
                      </Typography>
                      <Typography variant="subtitle" as="h3" weight="semibold" className="text-gray-900">
                        Clareza
                      </Typography>
                    </Box>
                    <Box className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-100 border border-accent-200">
                      <FaEye className="text-accent-600 text-xl" />
                    </Box>
                  </Box>
                  <Typography variant="body" className="text-gray-600 leading-loose">
                    Comunicação transparente e objetiva em cada etapa do projeto.
                  </Typography>
                </Stack>
              </Card>
              <Card data-stagger-item variant="glass" padding="lg" className="relative overflow-hidden border-accent-200/50">
                <Box className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-300 to-transparent" />
                <Stack spacing="md">
                  <Box className="flex items-start justify-between gap-4">
                    <Box className="space-y-2">
                      <Typography variant="caption" as="span" className="inline-flex rounded-full bg-gray-100 border border-gray-200 px-2.5 py-1 text-xs text-gray-600">
                        Valor essencial
                      </Typography>
                      <Typography variant="subtitle" as="h3" weight="semibold" className="text-gray-900">
                        Qualidade
                      </Typography>
                    </Box>
                    <Box className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-100 border border-accent-200">
                      <FaAward className="text-accent-600 text-xl" />
                    </Box>
                  </Box>
                  <Typography variant="body" className="text-gray-600 leading-loose">
                    Código bem escrito, design bem pensado, resultado bem entregue.
                  </Typography>
                </Stack>
              </Card>
              <Card data-stagger-item variant="glass" padding="lg" className="relative overflow-hidden border-accent-200/50">
                <Box className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-300 to-transparent" />
                <Stack spacing="md">
                  <Box className="flex items-start justify-between gap-4">
                    <Box className="space-y-2">
                      <Typography variant="caption" as="span" className="inline-flex rounded-full bg-gray-100 border border-gray-200 px-2.5 py-1 text-xs text-gray-600">
                        Valor essencial
                      </Typography>
                      <Typography variant="subtitle" as="h3" weight="semibold" className="text-gray-900">
                        Resultado
                      </Typography>
                    </Box>
                    <Box className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-100 border border-accent-200">
                      <FaBullseye className="text-accent-600 text-xl" />
                    </Box>
                  </Box>
                  <Typography variant="body" className="text-gray-600 leading-loose">
                    Foco em impacto real e crescimento sustentável do produto.
                  </Typography>
                </Stack>
              </Card>
            </Stagger>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
