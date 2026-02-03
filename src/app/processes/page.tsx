import { Box, Container, Stack, Typography, Card, Image } from "@/components/ui";
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
      {/* Hero Section */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Stack align="center" spacing="xl" className="text-center max-w-3xl mx-auto">
            <Typography variant="display" weight="bold">
              {processesContent.content.headline}
            </Typography>
            <Typography variant="subtitle" className="text-secondary-300">
              {processesContent.content.steps}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Process Steps */}
      <Box className="py-16 lg:py-24 bg-white/5">
        <Container>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {processDetails.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} variant="glass" padding="lg">
                  <Stack spacing="md">
                    <Box className="flex items-center gap-3">
                      <Box className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
                        <Icon className="text-lg" />
                      </Box>
                      <Typography variant="subtitle" weight="semibold">
                        {step.title}
                      </Typography>
                    </Box>
                    <Typography variant="body" className="text-secondary-300">
                      {step.description}
                    </Typography>
                  </Stack>
                </Card>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Visual Section */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative">
              <Image
                src={processesContent.images.timeline}
                alt="Timeline"
                fill
                className="object-cover"
              />
            </Card>
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative">
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

      {/* Benefits Section */}
      <Box className="py-16 lg:py-24 bg-white/5">
        <Container>
          <Stack spacing="xl">
            <Typography variant="title" weight="bold" align="center">
              Por que nosso processo funciona
            </Typography>
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Typography variant="subtitle" weight="semibold">
                    Previsibilidade
                  </Typography>
                  <Typography variant="body" className="text-secondary-300">
                    Você sabe exatamente o que esperar em cada etapa do projeto.
                  </Typography>
                </Stack>
              </Card>
              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Typography variant="subtitle" weight="semibold">
                    Transparência
                  </Typography>
                  <Typography variant="body" className="text-secondary-300">
                    Acompanhamento em tempo real e comunicação constante.
                  </Typography>
                </Stack>
              </Card>
              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Typography variant="subtitle" weight="semibold">
                    Qualidade
                  </Typography>
                  <Typography variant="body" className="text-secondary-300">
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
