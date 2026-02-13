import { Box, Container, Stack, Typography, Card, Image, HeroSection, ContentBlock, SectionDivider, VisualAccent } from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import siteContent from "@/constants/siteContent";
import { FaMobileAlt, FaShoppingCart, FaArrowRight } from "react-icons/fa";

const { pages } = siteContent;
const casesContent = pages.cases;

const caseStudies = [
  {
    title: "Plataforma SaaS B2B",
    description: "Redesign completo de UX e migração de arquitetura para cloud-native",
    tags: ["UX/UI", "Backend", "Cloud"],
    highlight: true,
  },
  {
    title: "App Mobile de Saúde",
    description: "Desenvolvimento do zero com foco em acessibilidade e performance",
    tags: ["Mobile", "React Native", "API"],
    highlight: false,
  },
  {
    title: "E-commerce de Moda",
    description: "Otimização de conversão e implementação de checkout personalizado",
    tags: ["Frontend", "UX", "Conversão"],
    highlight: false,
  },
];

export default function CasesPage() {
  return (
    <Box>
      <Reveal as="section" variant="heading">
        <HeroSection
          layout="default"
          title={casesContent.content.headline}
          subtitle={casesContent.content.text}
          backgroundImage={casesContent.images.bgTech}
        />
      </Reveal>

      <Box className="py-20 lg:py-32 relative">
        <VisualAccent position="top-right" variant="lines" />

        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <Reveal as="div" variant="image" className="lg:col-span-7 order-2 lg:order-1">
              <Card
                variant="glass"
                padding="none"
                className="overflow-hidden group cursor-pointer hover:border-accent-400 transition-all shadow-xl"
              >
                <Box className="relative aspect-[4/3]">
                  <Image
                    src={casesContent.images.mockups}
                    alt={caseStudies[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <Box className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-gray-900/20" />

                  <Box className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-gray-200 shadow-lg">
                    <Typography variant="caption" weight="semibold" className="text-gray-900">
                      Em Destaque
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Reveal>

            <Reveal as="div" variant="rise" className="lg:col-span-5 order-1 lg:order-2">
              <ContentBlock
                layout="bordered"
                title={caseStudies[0].title}
                subtitle={caseStudies[0].description}
              >
                <Stack spacing="md">
                  <Box className="flex flex-wrap gap-2">
                    {caseStudies[0].tags.map((tag) => (
                      <Box
                        key={tag}
                        className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg text-sm text-gray-700 font-medium hover:border-accent-400 transition-colors"
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>

                  <Box className="flex items-center gap-2 text-accent-600 hover:gap-3 transition-all group cursor-pointer">
                    <Typography variant="body" weight="medium">
                      Ver projeto completo
                    </Typography>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </Box>
                </Stack>
              </ContentBlock>
            </Reveal>
          </Box>
        </Container>
      </Box>

      <SectionDivider variant="asymmetric" spacing="md" />

      <Box className="py-20 lg:py-28 bg-gradient-to-b from-transparent via-gray-50/40 to-transparent relative">
        <VisualAccent position="bottom-left" variant="circle" />

        <Container>
          <Box className="space-y-16 lg:space-y-20">
            <Stagger as="div" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center" childSelector="[data-stagger-item]">
              <Card
                data-stagger-item
                variant="glass"
                padding="lg"
                className="relative overflow-hidden group cursor-pointer hover:border-accent-400 transition-all"
              >
                <Box className="absolute inset-0 opacity-10 scale-110 group-hover:scale-100 transition-transform duration-700">
                  <Image
                    src={casesContent.images.mockups}
                    alt="Background"
                    fill
                    className="object-cover object-left"
                  />
                </Box>

                <Box className="relative z-10 space-y-6">
                  <Box className="flex items-center justify-between">
                    <Box className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50 border border-accent-200">
                      <FaMobileAlt className="text-accent-600 text-2xl" />
                    </Box>
                    <FaArrowRight className="text-accent-600 group-hover:translate-x-1 transition-transform" />
                  </Box>

                  <Box className="space-y-3">
                    <Typography variant="subtitle" weight="bold" className="text-gray-900">
                      {caseStudies[1].title}
                    </Typography>
                    <Typography variant="body" className="text-gray-600 leading-relaxed">
                      {caseStudies[1].description}
                    </Typography>
                  </Box>

                  <Box className="flex flex-wrap gap-2">
                    {caseStudies[1].tags.map((tag) => (
                      <Box
                        key={tag}
                        className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full text-xs text-gray-700 font-medium"
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Card>

              <Card
                data-stagger-item
                variant="glass"
                padding="none"
                className="overflow-hidden group cursor-pointer hover:border-accent-400 transition-all"
              >
                <Box className="grid grid-cols-5">
                  <Box className="col-span-2 relative">
                    <Box className="absolute inset-0">
                      <Image
                        src={casesContent.images.mockups}
                        alt={caseStudies[2].title}
                        fill
                        className="object-cover object-right group-hover:scale-110 transition-transform duration-700"
                      />
                      <Box className="absolute inset-0 bg-gradient-to-r from-transparent to-white/80" />
                    </Box>
                  </Box>

                  <Box className="col-span-3 p-6 flex flex-col justify-center space-y-4">
                    <Box className="flex items-center justify-between">
                      <Box className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-100 border border-accent-200">
                        <FaShoppingCart className="text-accent-600 text-lg" />
                      </Box>
                      <FaArrowRight className="text-accent-600 group-hover:translate-x-1 transition-transform" />
                    </Box>

                    <Typography variant="subtitle" weight="semibold" className="text-gray-900">
                      {caseStudies[2].title}
                    </Typography>

                    <Typography variant="body" className="text-gray-600 text-sm leading-relaxed">
                      {caseStudies[2].description}
                    </Typography>

                    <Box className="flex flex-wrap gap-1.5">
                      {caseStudies[2].tags.map((tag) => (
                        <Box
                          key={tag}
                          className="px-2 py-0.5 bg-accent-50 border border-accent-200 rounded text-xs text-accent-700 font-medium"
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Stagger>
          </Box>
        </Container>
      </Box>

      <SectionDivider variant="dots" spacing="lg" />

      <Box className="py-20 lg:py-28 relative">
        <Container>
          <Reveal as="div" variant="rise">
            <ContentBlock
              title="Portfólio Completo"
              subtitle="Cada projeto é uma oportunidade de criar impacto real e duradouro"
              alignment="center"
              className="mb-12"
            >
              <Box className="mt-8">
                <Card variant="glass" padding="none" className="overflow-hidden aspect-[21/9] relative shadow-2xl">
                  <Image
                    src={casesContent.images.heroMinimal}
                    alt="Portfolio Completo"
                    fill
                    className="object-cover"
                  />
                  <Box className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                </Card>
              </Box>
            </ContentBlock>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
