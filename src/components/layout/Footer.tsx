import { Box, Container, Stack, Typography, Link, Divider, Image } from "@/components/ui";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope, FaHome, FaInfoCircle, FaBriefcase, FaUsers, FaFolderOpen, FaSitemap, FaStar, FaPhoneAlt, FaShieldAlt, FaFileContract } from "react-icons/fa";
import siteContent from "@/constants/siteContent";
import { contactInfo } from "@/constants/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" className="bg-dark/50 backdrop-blur-md border-t border-white/10 mt-auto">
      <Container>
        <Stack spacing="xl" className="py-12 lg:py-16">
          {/* Main Footer Content */}
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <Stack spacing="md">
              <Box className="flex items-center gap-3">
                <Box className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="Zansk Tech Logo"
                    fill
                    className="object-contain"
                  />
                </Box>
                <Typography variant="title" as="h3" weight="bold" className="text-primary">
                  {siteContent.siteName}
                </Typography>
              </Box>
              <Typography variant="caption" className="text-secondary-300">
                Transformamos ideias em produtos digitais com impacto real.
              </Typography>
            </Stack>

            {/* Pages */}
            <Stack spacing="sm">
              <Typography variant="body" weight="semibold" className="text-primary">
                Páginas
              </Typography>
              <Stack spacing="xs">
                <Link href="/" variant="footer" className="flex items-center gap-2">
                  <FaHome className="w-3.5 h-3.5" />
                  Home
                </Link>
                <Link href="/about" variant="footer" className="flex items-center gap-2">
                  <FaInfoCircle className="w-3.5 h-3.5" />
                  Sobre
                </Link>
                <Link href="/services" variant="footer" className="flex items-center gap-2">
                  <FaBriefcase className="w-3.5 h-3.5" />
                  Serviços
                </Link>
                <Link href="/team" variant="footer" className="flex items-center gap-2">
                  <FaUsers className="w-3.5 h-3.5" />
                  Time
                </Link>
              </Stack>
            </Stack>

            {/* Resources */}
            <Stack spacing="sm">
              <Typography variant="body" weight="semibold" className="text-primary">
                Recursos
              </Typography>
              <Stack spacing="xs">
                <Link href="/cases" variant="footer" className="flex items-center gap-2">
                  <FaFolderOpen className="w-3.5 h-3.5" />
                  Cases
                </Link>
                <Link href="/processes" variant="footer" className="flex items-center gap-2">
                  <FaSitemap className="w-3.5 h-3.5" />
                  Processos
                </Link>
                <Link href="/reviews" variant="footer" className="flex items-center gap-2">
                  <FaStar className="w-3.5 h-3.5" />
                  Avaliações
                </Link>
                <Link href="/contact" variant="footer" className="flex items-center gap-2">
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                  Contato
                </Link>
              </Stack>
            </Stack>

            {/* Contact */}
            <Stack spacing="sm">
              <Typography variant="body" weight="semibold" className="text-primary">
                Contato
              </Typography>
              <Stack spacing="xs">
                <Link
                  href={`mailto:${contactInfo.email}`}
                  variant="footer"
                  external
                  className="flex items-center gap-2"
                >
                  <FaEnvelope className="w-4 h-4" />
                  {contactInfo.email}
                </Link>
                <Link
                  href={contactInfo.linkedin}
                  variant="footer"
                  external
                  className="flex items-center gap-2"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                  LinkedIn
                </Link>
                <Link
                  href={contactInfo.getWhatsAppLink()}
                  variant="footer"
                  external
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </Link>
              </Stack>
            </Stack>
          </Box>

          <Divider />

          {/* Bottom Footer */}
          <Stack
            direction="row"
            justify="between"
            align="center"
            className="flex-col md:flex-row gap-4"
          >
            <Typography variant="caption" className="text-secondary-400">
              © {currentYear} {siteContent.siteName}. Todos os direitos reservados.
            </Typography>
            <Stack direction="row" spacing="md">
              <Link href="/privacy" variant="footer" className="flex items-center gap-1.5">
                <FaShieldAlt className="w-3 h-3" />
                Privacidade
              </Link>
              <Link href="/terms" variant="footer" className="flex items-center gap-1.5">
                <FaFileContract className="w-3 h-3" />
                Termos
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
