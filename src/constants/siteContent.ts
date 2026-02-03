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
        hero: "/home/hero.png",
        bg: "/home/bg.png",
        homeUi: "/home/home-ui.png",
        homeMethod: "/home/home-method.png",
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
        humanWorkspace: "/about/human-workspace.png",
        abstractGeometry: "/about/abstract-geometry.png",
        teamMoment: "/about/team-moment.png",
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
        bannerTop: "/services/banner-top.png",
        uiWireframe: "/services/ui-wireframe.png",
        web: "/services/web.png",
        mobile: "/services/mobile.png",
        architecture: "/services/architecture.png",
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
        teamSilhouette: "/team/team-silhouette.png",
        portraits: "/team/portraits.png",
        pairProgramming: "/team/pair-programming.png",
        culture: "/team/culture.png",
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
        bgMinimal: "/reviews/bg-minimal.png",
        results: "/reviews/results.png",
        meeting: "/reviews/meeting.png",
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
        heroMinimal: "/cases/hero-minimal.png",
        mockups: "/cases/mockups.png",
        bgTech: "/cases/bg-tech.png",
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
        timeline: "/processes/timeline.png",
        workshop: "/processes/workshop.png",
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
        bgStripes: "/contact/bg-stripes.png",
        humanMessage: "/contact/human-message.png",
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
