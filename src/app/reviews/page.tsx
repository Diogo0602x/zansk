import { Box, Container, Stack, Typography, Card, Image, HeroSection, SectionTitle } from "@/components/ui";
import siteContent from "@/constants/siteContent";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const { pages } = siteContent;
const reviewsContent = pages.reviews;

const testimonials = [
  {
    text: "A Zansk Tech transformou nossa visão em um produto funcional e escalável. A comunicação foi clara do início ao fim.",
    author: "Cliente A",
    role: "CEO, Startup Tech",
  },
  {
    text: "Profissionalismo e qualidade técnica excepcionais. Superaram nossas expectativas em cada entrega.",
    author: "Cliente B",
    role: "CTO, Fintech",
  },
  {
    text: "Parceria estratégica que realmente entende de produto digital. Recomendo fortemente.",
    author: "Cliente C",
    role: "Product Manager",
  },
];

export default function ReviewsPage() {
  return (
    <Box>
      <HeroSection
        layout="default"
        title={reviewsContent.content.headline}
        subtitle={reviewsContent.content.text}
        backgroundImage={reviewsContent.images.bgMinimal}
      />

      <Box className="py-20 lg:py-28">
        <Container>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="glass" padding="lg">
                <Stack spacing="md">
                  <Box className="flex items-center justify-between">
                    <FaQuoteLeft className="text-accent-600 text-2xl opacity-40" />
                    <Box className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-accent-500 text-sm" />
                      ))}
                    </Box>
                  </Box>
                  <Typography variant="body" className="text-gray-700 italic leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </Typography>
                  <Box>
                    <Typography variant="body" weight="semibold" className="text-gray-900">
                      {testimonial.author}
                    </Typography>
                    <Typography variant="caption" className="text-gray-500">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Box className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative shadow-lg">
              <Image
                src={reviewsContent.images.results}
                alt="Results"
                fill
                className="object-cover"
              />
            </Card>
            <Stack spacing="xl">
              <SectionTitle>
                Resultados mensuráveis
              </SectionTitle>
              <Typography variant="body" className="text-gray-600 leading-loose">
                Cada projeto é acompanhado de métricas claras e relatórios de progresso, garantindo
                transparência total.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
