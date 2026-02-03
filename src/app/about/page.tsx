import { Box, Container, Stack, Typography, Card, Image } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import { FaEye, FaAward, FaBullseye } from "react-icons/fa";

const { pages } = siteContent;
const aboutContent = pages.about;

export default function AboutPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Stack align="center" spacing="xl" className="text-center max-w-3xl mx-auto">
            <Typography variant="display" weight="bold">
              {aboutContent.content.headline}
            </Typography>
            <Typography variant="subtitle" className="text-secondary-300">
              {aboutContent.content.text}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Images Grid */}
      <Box className="py-16 lg:py-24 bg-white/5">
        <Container>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="glass" padding="none" className="overflow-hidden aspect-square relative">
              <Image
                src={aboutContent.images.humanWorkspace}
                alt="Workspace"
                fill
                className="object-cover"
              />
            </Card>
            <Card variant="glass" padding="none" className="overflow-hidden aspect-square relative">
              <Image
                src={aboutContent.images.abstractGeometry}
                alt="Abstract Geometry"
                fill
                className="object-cover"
              />
            </Card>
            <Card
              variant="glass"
              padding="none"
              className="overflow-hidden aspect-square relative md:col-span-2 lg:col-span-1"
            >
              <Image
                src={aboutContent.images.teamMoment}
                alt="Team Moment"
                fill
                className="object-cover"
              />
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Values Section */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Stack spacing="xl">
            <Typography variant="title" weight="bold" align="center" className="mb-8">
              Nossos valores
            </Typography>
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Box className="flex items-center gap-3">
                    <Box className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20">
                      <FaEye className="text-primary text-xl" />
                    </Box>
                    <Typography variant="subtitle" weight="semibold">
                      Clareza
                    </Typography>
                  </Box>
                  <Typography variant="body" className="text-secondary-300">
                    Comunicação transparente e objetiva em cada etapa do projeto.
                  </Typography>
                </Stack>
              </Card>
              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Box className="flex items-center gap-3">
                    <Box className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20">
                      <FaAward className="text-primary text-xl" />
                    </Box>
                    <Typography variant="subtitle" weight="semibold">
                      Qualidade
                    </Typography>
                  </Box>
                  <Typography variant="body" className="text-secondary-300">
                    Código bem escrito, design bem pensado, resultado bem entregue.
                  </Typography>
                </Stack>
              </Card>
              <Card variant="glass" padding="lg">
                <Stack spacing="md">
                  <Box className="flex items-center gap-3">
                    <Box className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20">
                      <FaBullseye className="text-primary text-xl" />
                    </Box>
                    <Typography variant="subtitle" weight="semibold">
                      Resultado
                    </Typography>
                  </Box>
                  <Typography variant="body" className="text-secondary-300">
                    Foco em impacto real e crescimento sustentável do produto.
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
