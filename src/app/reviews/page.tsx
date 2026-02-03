import { Box, Container, Stack, Typography, Card, Image } from "@/components/ui";
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
      {/* Hero with Background */}
      <Box className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Box className="absolute inset-0 z-0">
          <Image
            src={reviewsContent.images.bgMinimal}
            alt="Reviews Background"
            fill
            className="object-cover"
          />
          <Box className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        </Box>

        <Container className="relative z-10">
          <Stack align="center" spacing="lg" className="text-center max-w-3xl mx-auto">
            <Typography variant="display" weight="bold">
              {reviewsContent.content.headline}
            </Typography>
            <Typography variant="subtitle" className="text-secondary-300">
              {reviewsContent.content.text}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="glass" padding="lg">
                <Stack spacing="md">
                  <Box className="flex items-center justify-between">
                    <FaQuoteLeft className="text-primary text-2xl opacity-50" />
                    <Box className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-primary text-sm" />
                      ))}
                    </Box>
                  </Box>
                  <Typography variant="body" className="text-secondary-300 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </Typography>
                  <Box>
                    <Typography variant="body" weight="semibold">
                      {testimonial.author}
                    </Typography>
                    <Typography variant="caption" className="text-secondary-400">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Results Section */}
      <Box className="py-16 lg:py-24 bg-white/5">
        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card variant="glass" padding="none" className="overflow-hidden aspect-video relative">
              <Image
                src={reviewsContent.images.results}
                alt="Results"
                fill
                className="object-cover"
              />
            </Card>
            <Stack spacing="lg">
              <Typography variant="title" weight="bold">
                Resultados mensuráveis
              </Typography>
              <Typography variant="body" className="text-secondary-300">
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
