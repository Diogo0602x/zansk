import { Box, Container, Stack, Typography, Card, Image, HeroSection, SectionTitle } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import {
  FaSearch,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaChartLine,
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

export default function ProcessesPage() {
  return (
    <Box>
      <HeroSection
        layout="default"
        title={processesContent.content.headline}
        subtitle={processesContent.content.steps}
        backgroundImage={processesContent.images.timeline}
      />

      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {processDetails.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} variant="glass" padding="lg">
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
          </Box>
        </Container>
      </Box>

      <Box className="py-20 lg:py-28">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
              <Image
                src={processesContent.images.timeline}
                alt="Timeline"
                fill
                className="object-cover"
              />
            </Card>
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
              <Image
                src={processesContent.images.workshop}
                alt="Workshop"
                fill
                className="object-cover"
              />
            </Card>
          </Box>
        </Container>
      </Box>

      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Stack spacing="xl">
            <SectionTitle align="center" subtitle="Uma metodologia testada e aprovada por dezenas de projetos">
              Por que nosso processo funciona
            </SectionTitle>
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Typography variant="subtitle" weight="semibold" className="text-gray-900">
                    Previsibilidade
                  </Typography>
                  <Typography variant="body" className="text-gray-600 leading-relaxed">
                    Você sabe exatamente o que esperar em cada etapa do projeto.
                  </Typography>
                </Stack>
              </Card>
              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Typography variant="subtitle" weight="semibold" className="text-gray-900">
                    Transparência
                  </Typography>
                  <Typography variant="body" className="text-gray-600 leading-relaxed">
                    Acompanhamento em tempo real e comunicação constante.
                  </Typography>
                </Stack>
              </Card>
              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Typography variant="subtitle" weight="semibold" className="text-gray-900">
                    Qualidade
                  </Typography>
                  <Typography variant="body" className="text-gray-600 leading-relaxed">
                    Cada fase inclui validações rigorosas antes de avançar.
                  </Typography>
                </Stack>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
