import { Box, Container, Stack, Typography, Button, Card, Image } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import { FaPalette, FaRocket, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const { pages } = siteContent;
const homeContent = pages.home;

export default function HomePage() {
  return (
    <Box>
      {/* Hero Section with Background */}
      <Box className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <Box className="absolute inset-0 z-0">
          <Image
            src={homeContent.images.bg}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <Box className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
        </Box>

        {/* Hero Content */}
        <Container className="relative z-10">
          <Stack align="center" spacing="xl" className="text-center max-w-4xl mx-auto">
            <Typography variant="display" weight="bold" className="text-balance">
              {homeContent.content.headline}
            </Typography>
            <Typography variant="subtitle" className="text-secondary-300 text-balance">
              {homeContent.content.subheadline}
            </Typography>
            <Button variant="solid" size="lg" className="group">
              <Box className="flex items-center gap-2">
                <Typography variant="body" weight="medium">
                  {homeContent.content.cta}
                </Typography>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Box>
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* UI Section */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Stack spacing="lg">
              <Box className="flex items-center gap-3">
                <Box className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                  <FaPalette className="text-primary text-2xl" />
                </Box>
                <Typography variant="title" weight="bold">
                  Design que comunica e converte
                </Typography>
              </Box>
              <Typography variant="body" className="text-secondary-300">
                Criamos interfaces intuitivas e experiências memoráveis que colocam o usuário no
                centro de cada decisão.
              </Typography>
            </Stack>
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative">
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
      <Box className="py-16 lg:py-24 bg-white/5">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Card
              variant="glass"
              padding="none"
              className="overflow-hidden aspect-video relative order-2 lg:order-1"
            >
              <Image
                src={homeContent.images.homeMethod}
                alt="Method"
                fill
                className="object-cover"
              />
            </Card>
            <Stack spacing="lg" className="order-1 lg:order-2">
              <Box className="flex items-center gap-3">
                <Box className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                  <FaCheckCircle className="text-primary text-2xl" />
                </Box>
                <Typography variant="title" weight="bold">
                  Processo claro e entrega consistente
                </Typography>
              </Box>
              <Typography variant="body" className="text-secondary-300">
                Trabalhamos com transparência total, alinhando expectativas e entregando resultados
                mensuráveis em cada etapa.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Card variant="glass" padding="xl">
            <Stack align="center" spacing="lg" className="text-center">
              <Box className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-2">
                <FaRocket className="text-primary text-3xl" />
              </Box>
              <Typography variant="title" weight="bold">
                Pronto para transformar sua ideia em realidade?
              </Typography>
              <Typography variant="body" className="text-secondary-300 max-w-2xl">
                Vamos conversar sobre como podemos ajudar seu produto a alcançar o próximo nível.
              </Typography>
              <Button variant="solid" size="lg" className="group">
                <Box className="flex items-center gap-2">
                  <Typography variant="body" weight="medium">
                    {homeContent.content.cta}
                  </Typography>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Box>
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
