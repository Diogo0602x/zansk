import { Box, Container, Stack, Typography, Card, Image, HeroSection, SectionTitle } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import { FaHandshake, FaGraduationCap, FaComments } from "react-icons/fa";

const { pages } = siteContent;
const teamContent = pages.team;

export default function TeamPage() {
  return (
    <Box>
      <HeroSection
        layout="default"
        title={teamContent.content.headline}
        subtitle={teamContent.content.text}
        backgroundImage={teamContent.images.teamSilhouette}
      />

      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
              <Image
                src={teamContent.images.teamSilhouette}
                alt="Team"
                fill
                className="object-cover object-[center_20%]"
              />
            </Card>
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
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

      <Box className="py-20 lg:py-28">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Stack spacing="xl">
              <SectionTitle>
                Cultura de excelência
              </SectionTitle>
              <Typography variant="body" className="text-gray-600 leading-loose">
                Investimos em pessoas que valorizam qualidade, aprendizado contínuo e colaboração
                genuína.
              </Typography>
              <Stack spacing="md">
                <Box className="flex items-start gap-3">
                  <Box className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-100 border border-accent-200 flex-shrink-0 mt-1">
                    <FaGraduationCap className="text-accent-600 text-sm" />
                  </Box>
                  <Typography variant="body" className="text-gray-600 leading-relaxed">
                    Desenvolvimento técnico constante
                  </Typography>
                </Box>
                <Box className="flex items-start gap-3">
                  <Box className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-100 border border-accent-200 flex-shrink-0 mt-1">
                    <FaHandshake className="text-accent-600 text-sm" />
                  </Box>
                  <Typography variant="body" className="text-gray-600 leading-relaxed">
                    Autonomia e responsabilidade
                  </Typography>
                </Box>
                <Box className="flex items-start gap-3">
                  <Box className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-100 border border-accent-200 flex-shrink-0 mt-1">
                    <FaComments className="text-accent-600 text-sm" />
                  </Box>
                  <Typography variant="body" className="text-gray-600 leading-relaxed">
                    Feedback transparente e construtivo
                  </Typography>
                </Box>
              </Stack>
            </Stack>
            <Card variant="glass" padding="none" className="overflow-hidden aspect-square relative shadow-lg">
              <Image src={teamContent.images.culture} alt="Culture" fill className="object-cover" />
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
