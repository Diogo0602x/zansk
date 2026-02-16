export interface PageContent {
  slug: string;
  title: string;
  objective: string;
  images: {
    [key: string]: string;
  };
  content: {
    headline?: string;
    subheadline?: string;
    text?: string;
    list?: string[];
    steps?: string;
    cta?: string | string[];
  };
}

export interface SiteContent {
  siteName: string;
  pages: {
    home: PageContent;
    about: PageContent;
    services: PageContent;
    team: PageContent;
    reviews: PageContent;
    cases: PageContent;
    processes: PageContent;
    contact: PageContent;
  };
}

export const siteContent: SiteContent = {
  siteName: "Zansk Tech",
  pages: {
    home: {
      slug: "/",
      title: "Home",
      objective: "Impacto imediato + posicionamento claro.",
      images: {
        bg: "/home/bg.webp",
        homeUi: "/home/home-ui.webp",
        homeMethod: "/home/home-method.webp",
      },
      content: {
        headline: "Transformamos ideias em produtos digitais com impacto real",
        subheadline:
          "Design, tecnologia e estratégia para lançar, evoluir ou reestruturar produtos digitais.",
        cta: "Agendar uma conversa",
      },
    },
    about: {
      slug: "/about",
      title: "Sobre",
      objective: "Credibilidade, identidade e propósito.",
      images: {
        humanWorkspace: "/about/human-workspace.webp",
        abstractGeometry: "/about/abstract-geometry.webp",
        teamMoment: "/about/team-moment.webp",
      },
      content: {
        headline: "Uma parceira digital focada em clareza, qualidade e resultado",
        text: "A Zansk Tech nasceu para simplificar o digital. Atuamos de ponta a ponta, unindo UX, engenharia e estratégia para entregar soluções eficientes, escaláveis e bem construídas.",
      },
    },
    services: {
      slug: "/services",
      title: "Serviços",
      objective: "Clareza de oferta e valor entregue.",
      images: {
        bannerTop: "/services/banner-top.webp",
        uiWireframe: "/services/ui-wireframe.webp",
        web: "/services/web.webp",
        mobile: "/services/mobile.webp",
        architecture: "/services/architecture.webp",
      },
      content: {
        headline: "Do design à entrega. Do lançamento à evolução",
        list: [
          "UX/UI Design",
          "Desenvolvimento Web",
          "Aplicativos Mobile",
          "Backend & Arquitetura",
          "Testes e Qualidade",
          "Consultoria em Tecnologia",
        ],
        cta: "Montar um plano para meu produto",
      },
    },
    team: {
      slug: "/team",
      title: "Time",
      objective: "Confiança humana e senioridade.",
      images: {
        teamSilhouette: "/team/team-silhouette.webp",
        portraits: "/team/portraits.webp",
        pairProgramming: "/team/pair-programming.webp",
        culture: "/team/culture.webp",
      },
      content: {
        headline: "Time enxuto. Mentalidade sênior. Entrega consistente",
        text: "Nosso time atua com foco em produto, performance e evolução contínua, reduzindo riscos e aumentando eficiência.",
      },
    },
    reviews: {
      slug: "/reviews",
      title: "Avaliações",
      objective: "Prova social e resultados.",
      images: {
        bgMinimal: "/reviews/bg-minimal.webp",
        results: "/reviews/results.webp",
        meeting: "/reviews/meeting.webp",
      },
      content: {
        headline: "Confiança construída com entrega",
        text: "Parcerias baseadas em clareza, comunicação e resultados reais.",
      },
    },
    cases: {
      slug: "/cases",
      title: "Cases / Portfólio",
      objective: "Mostrar capacidade na prática.",
      images: {
        heroMinimal: "/cases/hero-minimal.webp",
        mockups: "/cases/mockups.webp",
        bgTech: "/cases/bg-tech.webp",
      },
      content: {
        headline: "Projetos que evoluíram produtos e negócios",
        text: "Cada projeto é construído com contexto, estratégia e foco em impacto.",
      },
    },
    processes: {
      slug: "/processes",
      title: "Processos",
      objective: "Explicar o método e reduzir fricção comercial.",
      images: {
        timeline: "/processes/timeline.webp",
        workshop: "/processes/workshop.webp",
      },
      content: {
        headline: "Processo simples, previsível e transparente",
        steps: "Diagnóstico → Planejamento → UX/UI → Desenvolvimento → Testes → Deploy → Evolução",
      },
    },
    contact: {
      slug: "/contact",
      title: "Contato",
      objective: "Conversão.",
      images: {
        bgStripes: "/contact/bg-stripes.webp",
        humanMessage: "/contact/human-message.webp",
      },
      content: {
        headline: "Vamos conversar sobre o seu produto?",
        text: "Conte seu cenário, objetivo e prazo. Retornamos com direcionamento claro.",
        cta: ["Enviar briefing", "Falar no LinkedIn"],
      },
    },
  },
};

export default siteContent;
