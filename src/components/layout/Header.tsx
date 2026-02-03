"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useScrolled } from "@/hooks";
import { Box, Container, Stack, Link, Button, Image, Typography, IconButton } from "@/components/ui";
import { cn } from "@/lib/utils";
import siteContent from "@/constants/siteContent";
import { FaPhoneAlt } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/services", label: "Serviços" },
  { href: "/team", label: "Time" },
  { href: "/cases", label: "Cases" },
  { href: "/processes", label: "Processos" },
  { href: "/contact", label: "Contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrolled(50);
  const pathname = usePathname();

  return (
    <Box
      as="header"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-dark/90 backdrop-blur-xl border-b border-primary/20 shadow-glass-lg"
          : "bg-gradient-to-b from-dark/60 via-dark/30 to-transparent backdrop-blur-sm"
      )}
    >
      <Container>
        <Stack direction="row" align="center" justify="between" className="py-4 lg:py-6">
          {/* Logo */}
          <Link href="/" variant="nav" className="flex items-center gap-3 no-underline">
            <Box className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/logo.png"
                alt="Zansk Tech Logo"
                fill
                className="object-contain"
                priority
              />
            </Box>
            <Typography variant="subtitle" weight="bold" className="text-xl lg:text-2xl">
              {siteContent.siteName}
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          <Box as="nav" className="hidden lg:block">
            <Stack direction="row" spacing="lg" align="center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="nav"
                  className={cn(
                    "text-sm font-medium no-underline px-3 py-2 rounded-lg transition-colors",
                    pathname === link.href
                      ? "bg-white/10 text-primary"
                      : "text-primary/80 hover:text-primary hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button variant="glass" size="sm">
                  <Box className="flex items-center gap-2">
                    <FaPhoneAlt className="text-sm" />
                    <Typography variant="caption" weight="medium">
                      Fale conosco
                    </Typography>
                  </Box>
                </Button>
              </Link>
            </Stack>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            icon={
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            }
            label="Menu"
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </Stack>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <Box as="nav" className="lg:hidden pb-4 animate-in slide-in-from-top duration-200">
            <Stack spacing="xs">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="nav"
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium no-underline transition-colors",
                    pathname === link.href
                      ? "bg-white/10 text-primary"
                      : "text-primary/80 hover:text-primary hover:bg-white/5"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Box className="pt-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="glass" size="md" fullWidth>
                    <Typography variant="body" weight="medium">
                      Fale conosco
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
