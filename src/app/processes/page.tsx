import { Box, Container, Stack, Typography, Card, Image, HeroSection, SectionTitle } from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import siteContent from "@/constants/siteContent";
import {
  FaSearch,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaChartLine,
  FaCalendarCheck,
  FaEye,
  FaMedal,
} from "react-icons/fa";

const { pages } = siteContent;
const processesContent = pages.processes;

const processDetails = [
  {
    title: "Diagnóstico",
    description: "Entendemos o contexto, objetivo e público do projeto",
    icon: FaSearch,
  },
  {
    title: "Planejamento",
    description: "Definimos escopo, cronograma e stack tecnológico",
    icon: FaClipboardList,
  },
  {
    title: "UX/UI",
    description: "Criamos wireframes, protótipos e design system",
    icon: FaPencilRuler,
  },
  {
    title: "Desenvolvimento",
    description: "Codificamos com qualidade, testes e boas práticas",
    icon: FaCode,
  },
  {
    title: "Testes",
    description: "Validamos funcionalidade, performance e segurança",
    icon: FaCheckCircle,
  },
  {
    title: "Deploy",
    description: "Colocamos em produção com monitoramento ativo",
    icon: FaRocket,
  },
  {
    title: "Evolução",
    description: "Melhoramos continuamente baseado em dados reais",
    icon: FaChartLine,
  },
];

const processBenefits = [
  {
    title: "Previsibilidade",
    description: "Você sabe exatamente o que esperar em cada etapa do projeto.",
    icon: FaCalendarCheck,
  },
  {
    title: "Transparência",
    description: "Acompanhamento em tempo real e comunicação constante.",
    icon: FaEye,
  },
  {
    title: "Qualidade",
    description: "Cada fase inclui validações rigorosas antes de avançar.",
    icon: FaMedal,
  },
];

export default function ProcessesPage() {
  return (
    <Box>
      <Reveal as="section" variant="heading">
        <HeroSection
          layout="default"
          title={processesContent.content.headline}
          subtitle={processesContent.content.steps}
          backgroundImage={processesContent.images.timeline}
        />
      </Reveal>

      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Stagger as="div" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" childSelector="[data-stagger-item]">
            {processDetails.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} data-stagger-item variant="glass" padding="lg">
                  <Stack spacing="md">
                    <Box className="flex items-center gap-3">
                      <Box className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-100 text-accent-600 border border-accent-200">
                        <Icon className="text-lg" />
                      </Box>
                      <Typography variant="subtitle" weight="semibold" className="text-gray-900">
                        {step.title}
                      </Typography>
                    </Box>
                    <Typography variant="body" className="text-gray-600 leading-relaxed">
                      {step.description}
                    </Typography>
                  </Stack>
                </Card>
              );
            })}
          </Stagger>
        </Container>
      </Box>

      <Box className="py-20 lg:py-28">
        <Container>
          <Stagger as="div" className="grid grid-cols-1 lg:grid-cols-2 gap-6" childSelector="[data-stagger-item]">
            <Card data-stagger-item variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
              <Image
                src={processesContent.images.timeline}
                alt="Timeline"
                fill
                className="object-cover"
              />
            </Card>
            <Card data-stagger-item variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
              <Image
                src={processesContent.images.workshop}
                alt="Workshop"
                fill
                className="object-cover"
              />
            </Card>
          </Stagger>
        </Container>
      </Box>

      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Stack spacing="xl">
            <Reveal as="div" variant="heading">
              <SectionTitle align="center" subtitle="Uma metodologia testada e aprovada por dezenas de projetos">
                Por que nosso processo funciona
              </SectionTitle>
            </Reveal>
            <Stagger as="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" childSelector="[data-stagger-item]">
              {processBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <Card key={benefit.title} data-stagger-item variant="glass" padding="lg" className="relative overflow-hidden border-accent-200/50">
                    <Box className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-300 to-transparent" />
                    <Stack spacing="md">
                      <Box className="flex items-start justify-between gap-4">
                        <Box className="space-y-2">
                          <Typography variant="subtitle" as="h3" weight="semibold" className="text-gray-900">
                            {benefit.title}
                          </Typography>
                          <Typography variant="caption" as="span" className="inline-flex rounded-full bg-gray-100 border border-gray-200 px-2.5 py-1 text-xs text-gray-600">
                            Diferencial de entrega
                          </Typography>
                        </Box>
                        <Box className="w-11 h-11 rounded-xl border border-accent-200 bg-gradient-to-br from-accent-100 to-accent-50 text-accent-600 flex items-center justify-center">
                          <Icon className="text-base" />
                        </Box>
                      </Box>
                      <Typography variant="body" className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </Typography>
                    </Stack>
                  </Card>
                );
              })}
            </Stagger>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
