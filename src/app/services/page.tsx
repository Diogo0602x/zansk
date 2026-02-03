import { Box, Container, Stack, Typography, Card, Button, Image } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import { FaPencilRuler, FaCode, FaMobileAlt, FaServer, FaRocket, FaCog, FaArrowRight } from "react-icons/fa";

const { pages } = siteContent;
const servicesContent = pages.services;

const serviceIcons = [FaPencilRuler, FaCode, FaMobileAlt, FaServer, FaRocket, FaCog];

export default function ServicesPage() {
  return (
    <Box>
      {/* Hero with Banner */}
      <Box className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Box className="absolute inset-0 z-0">
          <Image
            src={servicesContent.images.bannerTop}
            alt="Services Banner"
            fill
            className="object-cover"
          />
          <Box className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        </Box>

        <Container className="relative z-10">
          <Stack align="center" spacing="lg" className="text-center max-w-3xl mx-auto">
            <Typography variant="display" weight="bold">
              {servicesContent.content.headline}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesContent.content.list?.map((service, index) => {
              const images = [
                servicesContent.images.uiWireframe,
                servicesContent.images.web,
                servicesContent.images.mobile,
                servicesContent.images.architecture,
                servicesContent.images.web,
                servicesContent.images.uiWireframe,
              ];

              const Icon = serviceIcons[index] || FaCog;

              return (
                <Card key={index} variant="glass" padding="none" className="overflow-hidden group">
                  <Box className="relative aspect-video">
                    <Image
                      src={images[index] || servicesContent.images.web}
                      alt={service}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Box className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  </Box>
                  <Stack spacing="sm" className="p-6">
                    <Box className="flex items-center gap-3">
                      <Icon className="text-primary text-xl flex-shrink-0" />
                      <Typography variant="subtitle" weight="semibold">
                        {service}
                      </Typography>
                    </Box>
                    <Typography variant="caption" className="text-secondary-300">
                      Soluções completas e personalizadas para o seu negócio.
                    </Typography>
                  </Stack>
                </Card>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className="py-16 lg:py-24 bg-white/5">
        <Container>
          <Card variant="glass" padding="xl">
            <Stack align="center" spacing="lg" className="text-center">
              <Typography variant="title" weight="bold">
                Vamos planejar seu projeto juntos?
              </Typography>
              <Typography variant="body" className="text-secondary-300 max-w-2xl">
                Conte para nós sobre o seu produto e vamos criar um plano personalizado.
              </Typography>
              <Button variant="solid" size="lg" className="group">
                <Box className="flex items-center gap-2">
                  <Typography variant="body" weight="medium">
                    {servicesContent.content.cta}
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
