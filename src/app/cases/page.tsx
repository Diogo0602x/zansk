 "use client";

import { useEffect, useState } from "react";
import { Box, Container, Stack, Typography, Card, Image, HeroSection, ContentBlock, VisualAccent } from "@/components/ui";
import { Reveal } from "@/components/motion";
import siteContent from "@/constants/siteContent";
import { FaArrowRight, FaTimes } from "react-icons/fa";

const { pages } = siteContent;
const casesContent = pages.cases;
const emmanuelSiteUrl = "https://www.emmanuelnascimentoadv.com.br/";

const caseSummary = {
  title: "Case real - Emmanuel Nascimento Adv",
  tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Mobile-first", "Responsivo"],
};

export default function CasesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <Box>
      <Reveal as="section" variant="heading">
        <HeroSection
          layout="default"
          title={casesContent.content.headline}
          subtitle={casesContent.content.text}
          backgroundImage={casesContent.images.bgTech}
        />
      </Reveal>

      <Box className="py-20 lg:py-32 relative">
        <VisualAccent position="top-right" variant="lines" />

        <Container>
          <Box className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <Reveal as="div" variant="image" className="lg:col-span-7 order-2 lg:order-1">
              <Card
                variant="glass"
                padding="none"
                className="overflow-hidden group cursor-pointer hover:border-accent-400 transition-all shadow-xl"
              >
                <Box className="relative aspect-[4/3]">
                  <Image
                    src="/cases/emmanuel/mockup-site-emmanuel-novo.png"
                    alt={caseSummary.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <Box className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-gray-900/20" />

                  <Box className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-gray-200 shadow-lg">
                    <Typography variant="caption" weight="semibold" className="text-gray-900">
                      Em Destaque
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Reveal>

            <Reveal as="div" variant="rise" className="lg:col-span-5 order-1 lg:order-2">
              <ContentBlock
                layout="bordered"
                title={caseSummary.title}
                subtitle="Resumo rapido do projeto com stack, foco e resultado. Os detalhes completos ficam no modal."
              >
                <Stack spacing="md">
                  <Box className="flex flex-wrap gap-2">
                    {caseSummary.tags.map((tag) => (
                      <Box
                        key={tag}
                        className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg text-sm text-gray-700 font-medium hover:border-accent-400 transition-colors"
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>

                  <Box className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors shadow-md shadow-accent-600/25"
                    >
                      <Typography variant="body" weight="medium" className="text-white">
                        Ver mais do projeto
                      </Typography>
                      <FaArrowRight className="text-sm" />
                    </button>
                  </Box>
                </Stack>
              </ContentBlock>
            </Reveal>
          </Box>
        </Container>
      </Box>

      {isModalOpen && (
        <Box className="fixed inset-0 z-[100] bg-gray-950/75 backdrop-blur-md p-4 md:p-8 flex items-center justify-center" onClick={() => setIsModalOpen(false)}>
          <Box
            className="w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden border border-accent-100 flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <Box className="p-5 md:p-7 border-b border-accent-100 bg-gradient-to-r from-white via-accent-50/30 to-white flex items-start justify-between gap-4 flex-shrink-0">
              <Box>
                <Typography variant="title" weight="bold" className="text-gray-900">
                  Emmanuel Nascimento Adv - Case completo
                </Typography>
                <Typography variant="body" className="text-gray-600 mt-2">
                  Projeto completo em React, Next.js, Tailwind e TypeScript com foco em performance, responsividade e conversao.
                </Typography>
              </Box>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-xl border border-accent-200 text-accent-700 hover:bg-accent-50 transition-colors flex items-center justify-center"
                aria-label="Fechar modal"
              >
                <FaTimes />
              </button>
            </Box>

            <Box className="p-5 md:p-7 overflow-y-auto flex-1">
              <Stack spacing="xl">
                <Box className="flex flex-wrap gap-2">
                  {caseSummary.tags.map((tag) => (
                    <Box key={tag} className="px-3 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-xs text-accent-700 font-medium">
                      {tag}
                    </Box>
                  ))}
                </Box>

                <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card variant="glass" padding="none" className="overflow-hidden border border-gray-200/70">
                    <Box className="relative h-[300px] sm:h-[380px]">
                      <Image src="/cases/emmanuel/mockup-site-emmanuel-antigo.png" alt="Layout antigo do projeto" fill className="object-contain bg-gray-50" />
                      <Box className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gray-900/80 text-white text-xs font-medium">Antes</Box>
                    </Box>
                  </Card>

                  <Card variant="glass" padding="none" className="overflow-hidden border border-gray-200/70">
                    <Box className="relative h-[300px] sm:h-[380px]">
                      <Image src="/cases/emmanuel/mockup-site-emmanuel-novo.png" alt="Layout novo do projeto" fill className="object-contain bg-gray-50" />
                      <Box className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent-600/90 text-white text-xs font-medium">Depois</Box>
                    </Box>
                  </Card>
                </Box>

                <Card variant="glass" padding="none" className="overflow-hidden border border-gray-200/70">
                  <Box className="relative h-[260px] sm:h-[360px]">
                    <Image src="/cases/emmanuel/mockup-site-emmanuel-comparacao.png" alt="Comparacao visual do projeto" fill className="object-contain bg-gray-50" />
                  </Box>
                </Card>

                <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card variant="glass" padding="md">
                    <Typography variant="body" weight="semibold" className="text-gray-900">Mobile-first real</Typography>
                    <Typography variant="caption" className="text-gray-600">Fluxo e hierarquia pensados primeiro para telas pequenas.</Typography>
                  </Card>
                  <Card variant="glass" padding="md">
                    <Typography variant="body" weight="semibold" className="text-gray-900">Responsividade consistente</Typography>
                    <Typography variant="caption" className="text-gray-600">Layout adaptado para celular, tablet e desktop com padrao visual unico.</Typography>
                  </Card>
                  <Card variant="glass" padding="md">
                    <Typography variant="body" weight="semibold" className="text-gray-900">Base tecnica escalavel</Typography>
                    <Typography variant="caption" className="text-gray-600">Implementacao em TypeScript e componentes reutilizaveis com Tailwind.</Typography>
                  </Card>
                </Box>
              </Stack>
            </Box>

            <Box className="p-4 md:p-5 border-t border-accent-100 bg-white/95 backdrop-blur flex-shrink-0">
              <Box className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="inline-flex w-full sm:w-auto items-center justify-center px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Typography variant="body" weight="medium">Fechar</Typography>
                </button>
                <a
                  href={emmanuelSiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent-600 text-white hover:bg-accent-700 transition-colors shadow-md shadow-accent-600/25"
                >
                  <Typography variant="body" weight="medium" className="text-white">Acessar site do projeto</Typography>
                  <FaArrowRight className="text-sm" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
