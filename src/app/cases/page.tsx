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
      <Box className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <Box className="absolute inset-0 z-0">
          <Image
            src={casesContent.images.bgTech}
            alt="Cases Background"
            fill
            className="object-cover opacity-30"
          />
          <Box className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
        </Box>

        <Container className="relative z-10 pt-20">
          <Stack align="center" spacing="lg" className="text-center max-w-3xl mx-auto">
            <Typography variant="display" weight="bold" className="text-gray-900">
              {casesContent.content.headline}
            </Typography>
            <Typography variant="subtitle" className="text-gray-600 leading-relaxed">
              {casesContent.content.text}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Case Studies Grid */}
      <Box className="py-20 lg:py-28">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => {
              const Icon = caseIcons[index];
              return (
                <Card
                  key={index}
                  variant="glass"
                  padding="none"
                  className="overflow-hidden group cursor-pointer hover:border-gray-400 transition-all"
                >
                  <Box className="relative aspect-video">
                    <Image
                      src={casesContent.images.mockups}
                      alt={caseStudy.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Box className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
                    <Box className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200">
                      <Icon className="text-accent-600 text-xl" />
                    </Box>
                  </Box>
                  <Stack spacing="md" className="p-6">
                    <Box className="flex items-start justify-between gap-3">
                      <Typography variant="subtitle" weight="semibold" className="text-gray-900">
                        {caseStudy.title}
                      </Typography>
                      <FaArrowRight className="text-accent-600 mt-1 group-hover:translate-x-1 transition-transform" />
                    </Box>
                    <Typography variant="body" className="text-gray-600 leading-relaxed">
                      {caseStudy.description}
                    </Typography>
                    <Box className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <Box
                          key={tag}
                          className="px-3 py-1 bg-accent-100 border border-accent-200 rounded-full text-sm text-accent-700 font-medium"
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
      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
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
