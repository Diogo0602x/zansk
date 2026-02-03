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
      <Box className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <Box className="absolute inset-0 z-0">
          <Image
            src={servicesContent.images.bannerTop}
            alt="Services Banner"
            fill
            className="object-cover opacity-30"
          />
          <Box className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
        </Box>

        <Container className="relative z-10 pt-20">
          <Stack align="center" spacing="lg" className="text-center max-w-3xl mx-auto">
            <Typography variant="display" weight="bold" className="text-gray-900">
              {servicesContent.content.headline}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box className="py-20 lg:py-28">
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
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Box className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
                  </Box>
                  <Stack spacing="sm" className="p-6">
                    <Box className="flex items-center gap-3">
                      <Icon className="text-accent-600 text-xl flex-shrink-0" />
                      <Typography variant="subtitle" weight="semibold" className="text-gray-900">
                        {service}
                      </Typography>
                    </Box>
                    <Typography variant="caption" className="text-gray-600 leading-relaxed">
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
      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Card variant="glass" padding="xl" className="max-w-4xl mx-auto">
            <Stack align="center" spacing="xl" className="text-center">
              <Typography variant="title" weight="bold" className="text-gray-900">
                Vamos planejar seu projeto juntos?
              </Typography>
              <Typography variant="body" className="text-gray-600 max-w-2xl leading-relaxed">
                Conte para nós sobre o seu produto e vamos criar um plano personalizado.
              </Typography>
              <Button variant="ghost" size="lg" className="group mt-2">
                <Box className="flex items-center gap-3">
                  <Typography variant="body" weight="medium">
                    {servicesContent.content.cta}
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
