import { Box, Container, Stack, Typography, Card, Image, HeroSection, SectionTitle } from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import siteContent from "@/constants/siteContent";
import { FaHandshake, FaGraduationCap, FaComments } from "react-icons/fa";

const { pages } = siteContent;
const teamContent = pages.team;

export default function TeamPage() {
  return (
    <Box>
      <Reveal as="section" variant="heading">
        <HeroSection
          layout="default"
          title={teamContent.content.headline}
          subtitle={teamContent.content.text}
          backgroundImage={teamContent.images.teamSilhouette}
        />
      </Reveal>

      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Stagger as="div" className="grid grid-cols-1 lg:grid-cols-2 gap-6" childSelector="[data-stagger-item]">
            <Card data-stagger-item variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
              <Image
                src={teamContent.images.teamSilhouette}
                alt="Team"
                fill
                className="object-cover object-[center_20%]"
              />
            </Card>
            <Card data-stagger-item variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
              <Image
                src={teamContent.images.pairProgramming}
                alt="Pair Programming"
                fill
                className="object-cover"
              />
            </Card>
          </Stagger>
        </Container>
      </Box>

      <Box className="py-20 lg:py-28">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal as="div" variant="rise">
              <Stack spacing="xl">
                <SectionTitle>
                  Cultura de excelência
                </SectionTitle>
              <Typography variant="body" className="text-gray-600 leading-loose">
                Investimos em pessoas que valorizam qualidade, aprendizado contínuo e colaboração
                genuína.
              </Typography>
              <Stagger as="div" className="grid grid-cols-1 sm:grid-cols-3 gap-3" childSelector="[data-stagger-item]">
                <Card data-stagger-item variant="glass" padding="md" className="relative overflow-hidden border-accent-200/50">
                  <Box className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-300 to-transparent" />
                  <Stack spacing="sm">
                    <Box className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-100 border border-accent-200">
                      <FaGraduationCap className="text-accent-600 text-sm" />
                    </Box>
                    <Typography variant="caption" as="p" className="text-gray-600 leading-relaxed text-sm">
                      Desenvolvimento técnico constante
                    </Typography>
                  </Stack>
                </Card>
                <Card data-stagger-item variant="glass" padding="md" className="relative overflow-hidden border-accent-200/50">
                  <Box className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-300 to-transparent" />
                  <Stack spacing="sm">
                    <Box className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-100 border border-accent-200">
                      <FaHandshake className="text-accent-600 text-sm" />
                    </Box>
                    <Typography variant="caption" as="p" className="text-gray-600 leading-relaxed text-sm">
                      Autonomia e responsabilidade
                    </Typography>
                  </Stack>
                </Card>
                <Card data-stagger-item variant="glass" padding="md" className="relative overflow-hidden border-accent-200/50">
                  <Box className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 via-accent-300 to-transparent" />
                  <Stack spacing="sm">
                    <Box className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-100 border border-accent-200">
                      <FaComments className="text-accent-600 text-sm" />
                    </Box>
                    <Typography variant="caption" as="p" className="text-gray-600 leading-relaxed text-sm">
                      Feedback transparente e construtivo
                    </Typography>
                  </Stack>
                </Card>
              </Stagger>
              </Stack>
            </Reveal>
            <Reveal as="div" variant="image">
              <Card variant="glass" padding="none" className="overflow-hidden aspect-square relative shadow-lg">
              <Image src={teamContent.images.culture} alt="Culture" fill className="object-cover" />
              </Card>
            </Reveal>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
