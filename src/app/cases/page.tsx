"use client";

import { useEffect, useMemo, useState } from "react";
import { Box, Container, Stack, Typography, Card, Image, HeroSection, VisualAccent } from "@/components/ui";
import { Reveal } from "@/components/motion";
import siteContent from "@/constants/siteContent";
import { FaArrowRight, FaTimes } from "react-icons/fa";

type CaseId = "emmanuel" | "cinzento";

interface CaseData {
  id: CaseId;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  siteUrl: string;
  cover: string;
  images: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  highlights: string[];
  comparison: {
    beforeLabel: string;
    beforeDescription: string;
    afterLabel: string;
    afterDescription: string;
  };
}

const { pages } = siteContent;
const casesContent = pages.cases;

const portfolioCases: CaseData[] = [
  {
    id: "emmanuel",
    title: "Case real - Emmanuel Nascimento Adv",
    shortDescription:
      "Site institucional com foco em conversão, autoridade visual e experiencia mobile-first.",
    fullDescription:
      "Projeto completo em React, Next.js, Tailwind e TypeScript com foco em performance, responsividade e clareza de conteudo para conversão.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Mobile-first", "Responsivo"],
    siteUrl: "https://www.emmanuelnascimentoadv.com.br/",
    cover: "/cases/emmanuel/mockup-site-emmanuel-novo.webp",
    images: {
      primary: "/cases/emmanuel/mockup-site-emmanuel-antigo.webp",
      secondary: "/cases/emmanuel/mockup-site-emmanuel-novo.webp",
      tertiary: "/cases/emmanuel/mockup-site-emmanuel-comparacao.webp",
    },
    highlights: [
      "Arquitetura de componentes para evolucao continua.",
      "Aprimoramento visual e navegacao objetiva para celular.",
      "Base tipada para manutencao segura e previsivel.",
    ],
    comparison: {
      beforeLabel: "Antes - versao anterior",
      beforeDescription: "Layout legado com menor hierarquia visual e menos foco em conversão.",
      afterLabel: "Depois - versao nova",
      afterDescription: "Nova interface com leitura mais clara, CTA melhor destacado e experiencia mobile-first.",
    },
  },
  {
    id: "cinzento",
    title: "Case real - O Cinzento (Prof. Dalpiaz)",
    shortDescription:
      "Site academico voltado a cursos, publicacoes e materiais em estudos literarios, mitopoeticos e tolkienianos.",
    fullDescription:
      "Projeto academico com interface informativa e estetica literaria. Estruturado para apresentar trajetoria, areas de atuacao, cursos e contato direto.",
    tags: ["React 20", "TypeScript", "Vite", "React Router v7", "Framer Motion", "Tailwind CSS", "React Icons"],
    siteUrl: "https://www.ocinzento.com.br/",
    cover: "/cases/padre-cassio/mockup-site-padre-cassio-web.webp",
    images: {
      primary: "/cases/padre-cassio/mockup-site-padre-cassio-mobile.webp",
      secondary: "/cases/padre-cassio/mockup-site-padre-cassio-web.webp",
      tertiary: "/cases/padre-cassio/mockup-site-padre-cassio-combined.webp",
    },
    highlights: [
      "Interface alinhada ao contexto academico e tematico do projeto.",
      "Organizacao de conteudo para facilitar leitura e descoberta de materiais.",
      "Animacoes fluida e responsividade para diferentes dispositivos.",
    ],
    comparison: {
      beforeLabel: "Antes - estrutura inicial",
      beforeDescription: "Apresentacao menos organizada para exploracao de cursos e materiais.",
      afterLabel: "Depois - estrutura otimizada",
      afterDescription: "Navegacao refinada e distribuicao de conteudo com melhor escaneabilidade.",
    },
  },
];

export default function CasesPage() {
  const [activeCaseId, setActiveCaseId] = useState<CaseId | null>(null);
  const activeCase = useMemo(
    () => portfolioCases.find((item) => item.id === activeCaseId) ?? null,
    [activeCaseId]
  );

  useEffect(() => {
    if (!activeCaseId) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCaseId(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeCaseId]);

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

      <Box className="py-20 lg:py-28 relative">
        <VisualAccent position="top-right" variant="lines" />
        <Container>
          <Box className="space-y-8">
            {portfolioCases.map((item) => (
              <Reveal key={item.id} as="div" variant="rise">
                <Card variant="glass" padding="none" className="overflow-hidden border-accent-200/70 shadow-xl">
                  <Box className="grid grid-cols-1 lg:grid-cols-12">
                    <Box className="lg:col-span-6 relative min-h-[260px]">
                      <Image src={item.cover} alt={item.title} fill className="object-cover" />
                      <Box className="absolute inset-0 bg-gradient-to-r from-transparent to-white/60 lg:to-transparent" />
                    </Box>

                    <Box className="lg:col-span-6 p-6 lg:p-8">
                      <Stack spacing="md">
                        <Typography variant="title" weight="bold" className="text-gray-900">
                          {item.title}
                        </Typography>

                        <Typography variant="body" className="text-gray-600 leading-relaxed">
                          {item.shortDescription}
                        </Typography>

                        <Box className="flex flex-wrap gap-2">
                          {item.tags.slice(0, 5).map((tag) => (
                            <Box key={tag} className="px-3 py-1.5 bg-white/80 border border-gray-300 rounded-lg text-xs text-gray-700 font-medium">
                              {tag}
                            </Box>
                          ))}
                        </Box>

                        <Box className="flex flex-wrap gap-3 pt-1">
                          <button
                            type="button"
                            onClick={() => setActiveCaseId(item.id)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors"
                          >
                            <Typography variant="body" weight="medium" className="text-white">
                              Ver mais do projeto
                            </Typography>
                            <FaArrowRight className="text-sm" />
                          </button>

                          <a
                            href={item.siteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors"
                          >
                            <Typography variant="body" weight="medium">
                              Acessar site
                            </Typography>
                            <FaArrowRight className="text-sm" />
                          </a>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Card>
              </Reveal>
            ))}
          </Box>
        </Container>
      </Box>

      {activeCase && (
        <Box
          className="fixed inset-0 z-[100] bg-gray-950/75 backdrop-blur-md p-0 md:p-8 flex items-stretch md:items-center justify-center overflow-y-auto"
          onClick={() => setActiveCaseId(null)}
        >
          <Box
            className="w-full h-full md:h-auto md:max-w-6xl md:max-h-[90vh] bg-white rounded-none md:rounded-2xl shadow-2xl overflow-hidden border-0 md:border md:border-accent-100 flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <Box className="sticky top-0 z-10 p-4 sm:p-5 md:p-7 border-b border-accent-100 bg-gradient-to-r from-white via-accent-50/30 to-white flex items-start justify-between gap-4 flex-shrink-0">
              <Box>
                <Typography variant="title" weight="bold" className="text-gray-900 pr-2">
                  {activeCase.title}
                </Typography>
                <Typography variant="body" className="text-gray-600 mt-2">
                  {activeCase.fullDescription}
                </Typography>
              </Box>
              <button
                type="button"
                onClick={() => setActiveCaseId(null)}
                className="w-11 h-11 rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm flex-shrink-0"
                aria-label="Fechar modal"
              >
                <FaTimes />
              </button>
            </Box>

            <Box className="p-4 sm:p-5 md:p-7 overflow-y-auto flex-1">
              <Stack spacing="xl">
                <Box className="flex flex-wrap gap-2">
                  {activeCase.tags.map((tag) => (
                    <Box key={tag} className="px-3 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-xs text-accent-700 font-medium">
                      {tag}
                    </Box>
                  ))}
                </Box>

                <Box>
                  <Typography variant="subtitle" weight="bold" className="text-gray-900">
                    Antes x Depois
                  </Typography>
                  <Typography variant="caption" className="text-gray-600 mt-1">
                    Comparacao direta da evolucao visual e estrutural do projeto.
                  </Typography>
                </Box>

                <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card variant="glass" padding="none" className="overflow-hidden border border-gray-200/70">
                    <Box className="p-4 pb-0">
                      <Typography variant="caption" weight="bold" className="text-gray-900 uppercase tracking-wide">
                        Antes
                      </Typography>
                      <Typography variant="caption" className="text-gray-600 mt-1">
                        {activeCase.comparison.beforeLabel}
                      </Typography>
                      <Typography variant="caption" className="text-gray-500 mt-1">
                        {activeCase.comparison.beforeDescription}
                      </Typography>
                    </Box>
                    <Box className="relative h-[320px] sm:h-[400px] mt-4">
                      <Box className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-gray-900/90 text-white text-[11px] font-semibold uppercase tracking-wide">
                        Antes
                      </Box>
                      <Image src={activeCase.images.primary} alt={`${activeCase.title} antes`} fill className="object-contain bg-gray-50" />
                    </Box>
                  </Card>
                  <Card variant="glass" padding="none" className="overflow-hidden border border-gray-200/70">
                    <Box className="p-4 pb-0">
                      <Typography variant="caption" weight="bold" className="text-gray-900 uppercase tracking-wide">
                        Depois
                      </Typography>
                      <Typography variant="caption" className="text-gray-600 mt-1">
                        {activeCase.comparison.afterLabel}
                      </Typography>
                      <Typography variant="caption" className="text-gray-500 mt-1">
                        {activeCase.comparison.afterDescription}
                      </Typography>
                    </Box>
                    <Box className="relative h-[320px] sm:h-[400px] mt-4">
                      <Box className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-accent-600/95 text-white text-[11px] font-semibold uppercase tracking-wide">
                        Depois
                      </Box>
                      <Image src={activeCase.images.secondary} alt={`${activeCase.title} depois`} fill className="object-contain bg-gray-50" />
                    </Box>
                  </Card>
                </Box>

                <Card variant="glass" padding="none" className="overflow-hidden border border-gray-200/70">
                  <Box className="p-4 pb-0">
                    <Typography variant="caption" weight="bold" className="text-gray-900 uppercase tracking-wide">
                      Comparativo
                    </Typography>
                    <Typography variant="caption" className="text-gray-600 mt-1">
                      Visao consolidada de antes e depois para validacao rapida.
                    </Typography>
                  </Box>
                  <Box className="relative h-[260px] sm:h-[360px]">
                    <Image src={activeCase.images.tertiary} alt={`${activeCase.title} imagem complementar`} fill className="object-contain bg-gray-50" />
                  </Box>
                </Card>

                <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeCase.highlights.map((highlight) => (
                    <Card key={highlight} variant="glass" padding="md">
                      <Typography variant="caption" className="text-gray-700 leading-relaxed">
                        {highlight}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Stack>
            </Box>

            <Box className="sticky bottom-0 z-10 p-4 md:p-5 border-t border-accent-100 bg-white/95 backdrop-blur flex-shrink-0">
              <Box className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveCaseId(null)}
                  className="inline-flex w-full sm:w-auto items-center justify-center px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Typography variant="body" weight="medium">
                    Fechar
                  </Typography>
                </button>
                <a
                  href={activeCase.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent-600 text-white hover:bg-accent-700 transition-colors"
                >
                  <Typography variant="body" weight="medium" className="text-white">
                    Acessar site do projeto
                  </Typography>
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
