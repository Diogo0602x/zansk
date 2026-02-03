import { Box, Container, Stack, Typography, Card, Image } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import { FaGraduationCap, FaHandshake, FaComments } from "react-icons/fa";

const { pages } = siteContent;
const teamContent = pages.team;

export default function TeamPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Stack align="center" spacing="xl" className="text-center max-w-3xl mx-auto">
            <Typography variant="display" weight="bold">
              {teamContent.content.headline}
            </Typography>
            <Typography variant="subtitle" className="text-secondary-300">
              {teamContent.content.text}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Team Images */}
      <Box className="py-16 lg:py-24 bg-white/5">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative">
              <Image
                src={teamContent.images.teamSilhouette}
                alt="Team"
                fill
                className="object-cover"
              />
            </Card>
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative">
              <Image
                src={teamContent.images.pairProgramming}
                alt="Pair Programming"
                fill
                className="object-cover"
              />
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Culture Section */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Stack spacing="lg">
              <Typography variant="title" weight="bold">
                Cultura de excelência
              </Typography>
              <Typography variant="body" className="text-secondary-300">
                Investimos em pessoas que valorizam qualidade, aprendizado contínuo e colaboração
                genuína.
              </Typography>
              <Stack spacing="sm">
                <Box className="flex items-start gap-3">
                  <Box className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0 mt-1">
                    <FaGraduationCap className="text-primary text-sm" />
                  </Box>
                  <Typography variant="body" className="text-secondary-300">
                    Desenvolvimento técnico constante
                  </Typography>
                </Box>
                <Box className="flex items-start gap-3">
                  <Box className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0 mt-1">
                    <FaHandshake className="text-primary text-sm" />
                  </Box>
                  <Typography variant="body" className="text-secondary-300">
                    Autonomia e responsabilidade
                  </Typography>
                </Box>
                <Box className="flex items-start gap-3">
                  <Box className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0 mt-1">
                    <FaComments className="text-primary text-sm" />
                  </Box>
                  <Typography variant="body" className="text-secondary-300">
                    Feedback transparente e construtivo
                  </Typography>
                </Box>
              </Stack>
            </Stack>
            <Card variant="glass" padding="none" className="overflow-hidden aspect-square relative">
              <Image src={teamContent.images.culture} alt="Culture" fill className="object-cover" />
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
