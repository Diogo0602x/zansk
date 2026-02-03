import { Box, Container, Stack, Typography, Button, Card, Image } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import { FaPalette, FaRocket, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const { pages } = siteContent;
const homeContent = pages.home;

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section with Background */}
      <Box className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Light Overlay */}
        <Box className="absolute inset-0 z-0">
          <Image
            src={homeContent.images.bg}
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <Box className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
        </Box>

        {/* Hero Content */}
        <Container className="relative z-10 pt-20">
          <Stack align="center" spacing="xl" className="text-center max-w-4xl mx-auto px-4">
            <Typography
              variant="display"
              weight="bold"
              className="text-balance text-gray-900 leading-[1.1] tracking-tight"
            >
              {homeContent.content.headline}
            </Typography>
            <Typography
              variant="subtitle"
              className="text-balance text-gray-600 max-w-2xl leading-relaxed"
            >
              {homeContent.content.subheadline}
            </Typography>
            <Button variant="ghost" size="lg" className="group mt-4">
              <Box className="flex items-center gap-3">
                <Typography variant="body" weight="medium">
                  {homeContent.content.cta}
                </Typography>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
              </Box>
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* UI Section */}
      <Box className="py-20 lg:py-28">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Stack spacing="xl">
              <Box className="flex items-center gap-3">
                <Box className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-100 border border-accent-200">
                  <FaPalette className="text-accent-600 text-xl" />
                </Box>
                <Typography variant="title" weight="bold" className="text-gray-900">
                  Design que comunica e converte
                </Typography>
              </Box>
              <Typography variant="body" className="text-gray-600 leading-loose max-w-xl">
                Criamos interfaces intuitivas e experiências memoráveis que colocam o usuário no
                centro de cada decisão.
              </Typography>
            </Stack>
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
              <Image
                src={homeContent.images.homeUi}
                alt="UI Design"
                fill
                className="object-cover"
              />
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Method Section */}
      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Card
              variant="glass"
              padding="none"
              className="overflow-hidden aspect-video relative order-2 lg:order-1 shadow-lg"
            >
              <Image
                src={homeContent.images.homeMethod}
                alt="Method"
                fill
                className="object-cover"
              />
            </Card>
            <Stack spacing="xl" className="order-1 lg:order-2">
              <Box className="flex items-center gap-3">
                <Box className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-100 border border-accent-200">
                  <FaCheckCircle className="text-accent-600 text-xl" />
                </Box>
                <Typography variant="title" weight="bold" className="text-gray-900">
                  Processo claro e entrega consistente
                </Typography>
              </Box>
              <Typography variant="body" className="text-gray-600 leading-loose max-w-xl">
                Trabalhamos com transparência total, alinhando expectativas e entregando resultados
                mensuráveis em cada etapa.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className="py-20 lg:py-28">
        <Container>
          <Card variant="glass" padding="xl" className="max-w-4xl mx-auto">
            <Stack align="center" spacing="xl" className="text-center">
              <Box className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-100 border border-accent-200 mb-2">
                <FaRocket className="text-accent-600 text-3xl" />
              </Box>
              <Typography variant="title" weight="bold" className="text-gray-900">
                Pronto para transformar sua ideia em realidade?
              </Typography>
              <Typography variant="body" className="text-gray-600 max-w-2xl leading-relaxed">
                Vamos conversar sobre como podemos ajudar seu produto a alcançar o próximo nível.
              </Typography>
              <Button variant="ghost" size="lg" className="group mt-2">
                <Box className="flex items-center gap-3">
                  <Typography variant="body" weight="medium">
                    {homeContent.content.cta}
                  </Typography>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
                </Box>
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
