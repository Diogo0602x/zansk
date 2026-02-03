import { Container, Stack, Typography, Button, Box } from "@/components/ui";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box className="min-h-[60vh] flex items-center justify-center">
      <Container>
        <Stack align="center" spacing="lg">
          <Box className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 mb-4">
            <FaExclamationTriangle className="text-primary text-4xl" />
          </Box>
          <Typography variant="display" weight="bold" align="center">
            404
          </Typography>
          <Typography variant="title" align="center" className="text-secondary-300">
            Página não encontrada
          </Typography>
          <Typography variant="body" align="center" className="text-secondary-400 max-w-md">
            A página que você está procurando não existe ou foi movida.
          </Typography>
          <Link href="/">
            <Button variant="solid" size="lg" className="group">
              <Box className="flex items-center gap-2">
                <FaHome className="group-hover:scale-110 transition-transform" />
                <Typography variant="body" weight="medium">
                  Voltar para Home
                </Typography>
              </Box>
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
