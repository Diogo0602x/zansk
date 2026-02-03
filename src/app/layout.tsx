import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { Box, WhatsAppButton } from "@/components/ui";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zansk Tech - Transformamos ideias em produtos digitais",
  description:
    "Design, tecnologia e estratégia para lançar, evoluir ou reestruturar produtos digitais.",
  keywords: ["desenvolvimento web", "design", "UX/UI", "tecnologia", "produtos digitais"],
  authors: [{ name: "Zansk Tech" }],
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/logo.png"],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://zansk.tech",
    siteName: "Zansk Tech",
    title: "Zansk Tech - Transformamos ideias em produtos digitais",
    description:
      "Design, tecnologia e estratégia para lançar, evoluir ou reestruturar produtos digitais.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Zansk Tech Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <Box as="main" className="flex-1 pt-20 lg:pt-24">
          {children}
        </Box>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
