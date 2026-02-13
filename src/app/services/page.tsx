import { Box, Container, Stack, Typography, Card, Button, Image, HeroSection, ContentBlock, SectionDivider, VisualAccent } from "@/components/ui";
import { Reveal, Stagger } from "@/components/motion";
import siteContent from "@/constants/siteContent";
import { FaPencilRuler, FaCode, FaMobileAlt, FaServer, FaRocket, FaCog, FaArrowRight } from "react-icons/fa";

const { pages } = siteContent;
const servicesContent = pages.services;

const serviceIcons = [FaPencilRuler, FaCode, FaMobileAlt, FaServer, FaRocket, FaCog];

const serviceDetails = [
  {
    title: "UX/UI Design",
    description: "Interfaces que equilibram estética e funcionalidade, criando experiências intuitivas",
    highlights: ["Pesquisa de usuário", "Wireframes", "Protótipos interativos"],
  },
  {
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas, rápidas e escaláveis com as melhores tecnologias",
    highlights: ["React/Next.js", "Performance", "SEO"],
  },
  {
    title: "Aplicativos Mobile",
    description: "Apps nativos ou híbridos com experiência fluida em iOS e Android",
    highlights: ["React Native", "Design nativo", "Offline-first"],
  },
  {
    title: "Backend & Arquitetura",
    description: "APIs robustas e arquitetura escalável para suportar seu crescimento",
    highlights: ["Microserviços", "Cloud", "Segurança"],
  },
  {
    title: "Testes e Qualidade",
    description: "Garantia de qualidade em todos os níveis com automação e testes contínuos",
    highlights: ["Testes E2E", "CI/CD", "Code review"],
  },
  {
    title: "Consultoria em Tecnologia",
    description: "Orientação estratégica para decisões técnicas e roadmap de produto",
    highlights: ["Arquitetura", "Stack", "Escalabilidade"],
  },
];

export default function ServicesPage() {
  return (
    <Box>
      <Reveal as="section" variant="heading">
        <HeroSection
          layout="default"
          title={servicesContent.content.headline}
          subtitle="Transformamos desafios em soluções digitais eficientes e escaláveis"
          backgroundImage={servicesContent.images.bannerTop}
        />
      </Reveal>

      <Box className="py-20 lg:py-32 relative">
        <VisualAccent position="top-right" variant="circle" />

        <Container>
          <Reveal as="div" variant="rise" className="mb-16 lg:mb-24">
            <Card variant="glass" padding="none" className="overflow-hidden border-accent-200/60">
              <Box className="grid grid-cols-1 lg:grid-cols-2">
                <Box className="relative aspect-square lg:aspect-auto">
                  <Image
                    src={servicesContent.images.uiWireframe}
                    alt={serviceDetails[0].title}
                    fill
                    className="object-cover"
                  />
                  <Box className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90 lg:to-white/95" />
                </Box>

                <Box className="p-10 lg:p-16 flex flex-col justify-center">
                  <ContentBlock
                    title={serviceDetails[0].title}
                    subtitle={serviceDetails[0].description}
                  >
                    <Stack spacing="sm" className="mt-6">
                      {serviceDetails[0].highlights.map((highlight) => (
                        <Box key={highlight} className="flex items-center gap-3">
                          <Box className="w-6 h-6 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                            <FaPencilRuler className="text-accent-600 text-xs" />
                          </Box>
                          <Typography variant="body" className="text-gray-700 text-sm">
                            {highlight}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </ContentBlock>
                </Box>
              </Box>
            </Card>
          </Reveal>

          <Stagger as="div" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16" childSelector="[data-stagger-item]">
            <Card data-stagger-item variant="glass" padding="none" className="relative overflow-hidden group cursor-pointer hover:border-accent-400 transition-all">
              <Box className="absolute inset-0 opacity-20 group-hover:opacity-25 transition-opacity">
                <Image
                  src={servicesContent.images.web}
                  alt={serviceDetails[1].title}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </Box>

              <Box className="relative z-10 p-8 flex flex-col justify-between min-h-[320px]">
                <Box className="space-y-4">
                  <Box className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center border border-gray-200">
                    <FaCode className="text-accent-600 text-xl" />
                  </Box>

                  <Typography variant="subtitle" weight="bold" className="text-gray-900">
                    {serviceDetails[1].title}
                  </Typography>
                </Box>

                <Box className="space-y-4">
                  <Typography variant="body" className="text-gray-700 text-sm">
                    {serviceDetails[1].description}
                  </Typography>

                  <Box className="flex items-center gap-2 text-accent-600">
                    <Typography variant="caption" weight="medium">
                      Saiba mais
                    </Typography>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Box>
                </Box>
              </Box>
            </Card>

            <Card data-stagger-item variant="glass" padding="none" className="relative overflow-hidden group cursor-pointer hover:border-accent-400 transition-all">
              <Box className="absolute inset-0 opacity-15 group-hover:opacity-20 transition-opacity">
                <Image
                  src={servicesContent.images.mobile}
                  alt={serviceDetails[2].title}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </Box>

              <Box className="relative z-10 p-8 flex flex-col justify-between min-h-[320px]">
                <Box className="space-y-4">
                  <Box className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center border border-gray-200">
                    <FaMobileAlt className="text-accent-600 text-xl" />
                  </Box>

                  <Typography variant="subtitle" weight="bold" className="text-gray-900">
                    {serviceDetails[2].title}
                  </Typography>
                </Box>

                <Box className="space-y-4">
                  <Typography variant="body" className="text-gray-700 text-sm">
                    {serviceDetails[2].description}
                  </Typography>

                  <Box className="flex items-center gap-2 text-accent-600">
                    <Typography variant="caption" weight="medium">
                      Saiba mais
                    </Typography>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Box>
                </Box>
              </Box>
            </Card>
          </Stagger>

          <SectionDivider variant="gradient" spacing="sm" />

          <Stagger as="div" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16" childSelector="[data-stagger-item]">
            {serviceDetails.slice(3).map((service, index) => {
              const Icon = serviceIcons[index + 3];
              return (
                <Card
                  key={service.title}
                  data-stagger-item
                  variant="glass"
                  padding="md"
                  className="group hover:border-accent-400 transition-all"
                >
                  <Stack spacing="md">
                    <Box className="flex items-center justify-between">
                      <Box className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
                        <Icon className="text-accent-600" />
                      </Box>
                      <Box className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaArrowRight className="text-accent-600 text-xs" />
                      </Box>
                    </Box>

                    <Typography variant="body" weight="semibold" className="text-gray-900">
                      {service.title}
                    </Typography>

                    <Typography variant="caption" className="text-gray-600 text-xs leading-relaxed">
                      {service.description}
                    </Typography>
                  </Stack>
                </Card>
              );
            })}
          </Stagger>
        </Container>
      </Box>

      <SectionDivider variant="asymmetric" spacing="lg" />

      <Box className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-gray-50/40 to-transparent relative">
        <VisualAccent position="bottom-right" variant="lines" />

        <Container>
          <Reveal as="div" variant="rise">
            <Card variant="glass" padding="none" className="max-w-5xl mx-auto overflow-hidden border-accent-200/60">
            <Box className="grid grid-cols-1 lg:grid-cols-5">
              <Box className="lg:col-span-2 relative min-h-[300px] lg:min-h-0">
                <Image
                  src={servicesContent.images.architecture}
                  alt="Arquitetura"
                  fill
                  className="object-cover opacity-60"
                />
                <Box className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90 lg:to-white/95" />
              </Box>

              <Box className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-center">
                <ContentBlock
                  title="Vamos planejar seu projeto juntos?"
                  subtitle="Conte para nós sobre o seu produto e vamos criar um plano personalizado"
                  alignment="left"
                >
                  <Button variant="ghost" size="lg" className="group mt-6">
                    <Box className="flex items-center gap-3">
                      <Typography variant="body" weight="medium">
                        {servicesContent.content.cta}
                      </Typography>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
                    </Box>
                  </Button>
                </ContentBlock>
              </Box>
            </Box>
            </Card>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}
