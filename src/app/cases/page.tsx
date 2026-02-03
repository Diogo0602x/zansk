import { Box, Container, Stack, Typography, Card, Image } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaArrowRight } from "react-icons/fa";

const { pages } = siteContent;
const casesContent = pages.cases;

const caseIcons = [FaLaptopCode, FaMobileAlt, FaShoppingCart];

const caseStudies = [
  {
    title: "Plataforma SaaS B2B",
    description: "Redesign completo de UX e migração de arquitetura para cloud-native",
    tags: ["UX/UI", "Backend", "Cloud"],
  },
  {
    title: "App Mobile de Saúde",
    description: "Desenvolvimento do zero com foco em acessibilidade e performance",
    tags: ["Mobile", "React Native", "API"],
  },
  {
    title: "E-commerce de Moda",
    description: "Otimização de conversão e implementação de checkout personalizado",
    tags: ["Frontend", "UX", "Conversão"],
  },
];

export default function CasesPage() {
  return (
    <Box>
      {/* Hero with Background */}
      <Box className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Box className="absolute inset-0 z-0">
          <Image
            src={casesContent.images.bgTech}
            alt="Cases Background"
            fill
            className="object-cover"
          />
          <Box className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        </Box>

        <Container className="relative z-10">
          <Stack align="center" spacing="lg" className="text-center max-w-3xl mx-auto">
            <Typography variant="display" weight="bold">
              {casesContent.content.headline}
            </Typography>
            <Typography variant="subtitle" className="text-secondary-300">
              {casesContent.content.text}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Case Studies Grid */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => {
              const Icon = caseIcons[index];
              return (
                <Card
                  key={index}
                  variant="glass"
                  padding="none"
                  className="overflow-hidden group cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <Box className="relative aspect-video">
                    <Image
                      src={casesContent.images.mockups}
                      alt={caseStudy.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Box className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent" />
                    <Box className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-xl bg-dark/80 backdrop-blur-sm border border-primary/20">
                      <Icon className="text-primary text-xl" />
                    </Box>
                  </Box>
                  <Stack spacing="md" className="p-6">
                    <Box className="flex items-start justify-between gap-3">
                      <Typography variant="subtitle" weight="semibold">
                        {caseStudy.title}
                      </Typography>
                      <FaArrowRight className="text-primary mt-1 group-hover:translate-x-1 transition-transform" />
                    </Box>
                    <Typography variant="body" className="text-secondary-300">
                      {caseStudy.description}
                    </Typography>
                    <Box className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <Box
                          key={tag}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary"
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </Stack>
                </Card>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Mockups Section */}
      <Box className="py-16 lg:py-24 bg-white/5">
        <Container>
          <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative">
            <Image
              src={casesContent.images.heroMinimal}
              alt="Portfolio"
              fill
              className="object-cover"
            />
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
