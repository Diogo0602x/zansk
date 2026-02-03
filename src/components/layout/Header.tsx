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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <Stack direction="row" align="center" justify="between" className="py-4 lg:py-5">
          {/* Logo */}
          <Link href="/" variant="nav" className="flex items-center gap-3 no-underline group">
            <Box className="relative w-10 h-10 lg:w-11 lg:h-11 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Zansk Tech Logo"
                fill
                className="object-contain"
                priority
              />
            </Box>
            <Typography
              variant="subtitle"
              weight="bold"
              className={cn(
                "text-xl lg:text-2xl transition-colors",
                scrolled ? "text-gray-900" : "text-gray-700"
              )}
            >
              {siteContent.siteName}
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          <Box as="nav" className="hidden lg:block">
            <Stack direction="row" spacing="md" align="center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="nav"
                  className={cn(
                    "text-sm font-medium no-underline px-4 py-2 rounded-lg transition-all duration-200",
                    pathname === link.href
                      ? scrolled
                        ? "bg-gray-100 text-gray-900"
                        : "bg-white/20 text-gray-900"
                      : scrolled
                        ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button variant="ghost" size="sm">
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
                className={cn(
                  "w-6 h-6 transition-colors",
                  scrolled ? "text-gray-900" : "text-gray-700"
                )}
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
          <Box as="nav" className="lg:hidden pb-4 animate-in slide-in-from-top">
            <Stack spacing="xs">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="nav"
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium no-underline transition-all duration-200",
                    pathname === link.href
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Box className="pt-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="md" fullWidth>
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
