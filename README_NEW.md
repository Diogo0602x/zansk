# 🚀 Zansk Tech - Site Oficial

> Transformamos ideias em produtos digitais com impacto real

[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## ✨ Características

- 🎨 **Design System Completo** - 14 componentes reutilizáveis
- 📱 **100% Responsivo** - Mobile-first design
- 💎 **Glass UI** - Interface moderna com transparências
- ⚡ **Performance** - Otimizado com Next.js 15
- 🎯 **TypeScript Strict** - Zero erros, código tipo-safe
- 🎭 **Animações Suaves** - Header animado ao scroll
- ♿ **Acessível** - Boas práticas de acessibilidade

---

## 🚀 Quick Start

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

**Pronto!** O site está rodando. 🎉

---

## 📄 Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home - Hero, seções UI/Method, CTA |
| `/about` | Sobre - Empresa, valores, imagens |
| `/services` | Serviços - Lista de 6 serviços |
| `/team` | Time - Informações e cultura |
| `/reviews` | Avaliações - Depoimentos de clientes |
| `/cases` | Cases - Portfolio de projetos |
| `/processes` | Processos - 7 etapas da metodologia |
| `/contact` | Contato - Formulário funcional |

---

## 🎨 Design System

### Componentes Base
- **Layout**: Box, Container, Stack, Grid
- **Content**: Typography, Card, Image
- **Actions**: Button, IconButton, Link
- **Feedback**: Spinner, Skeleton, LoadingOverlay
- **Visual**: Divider

### Variantes de Button
- `solid` - Botão sólido (branco)
- `ghost` - Botão transparente com borda
- `glass` - Botão com efeito glass

### Typography
- `display` - Títulos principais (4xl → 6xl)
- `title` - Títulos de seção (2xl → 4xl)
- `subtitle` - Subtítulos (xl → 2xl)
- `body` - Texto corpo (base → lg)
- `caption` - Texto pequeno (sm → base)

---

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19
- **Language**: TypeScript 5 (strict)
- **Styling**: TailwindCSS 3
- **Linting**: ESLint + Prettier
- **Fonts**: Inter (Google Fonts)

---

## 📂 Estrutura

```
zansk/
├── public/              # Assets estáticos
│   ├── home/           # Imagens da home
│   ├── about/          # Imagens do sobre
│   ├── services/       # Imagens de serviços
│   └── ...             # Outras páginas
├── src/
│   ├── app/            # Rotas (App Router)
│   │   ├── layout.tsx  # Layout global
│   │   ├── page.tsx    # Home
│   │   └── [page]/     # Outras páginas
│   ├── components/
│   │   ├── ui/         # Design System
│   │   └── layout/     # Header + Footer
│   ├── constants/
│   │   └── siteContent.ts  # Conteúdo do site
│   ├── hooks/          # Custom hooks
│   └── lib/            # Utilitários
└── ...                 # Configs
```

---

## 🎯 Comandos

```bash
# Desenvolvimento
npm run dev          # Inicia servidor dev
npm run build        # Build para produção
npm run start        # Inicia servidor produção

# Qualidade de Código
npm run lint         # Executar ESLint
npm run format       # Formatar com Prettier
npx tsc --noEmit     # Verificar tipos
```

---

## 🎨 Customização

### Cores
Edite [`tailwind.config.ts`](tailwind.config.ts):
```ts
colors: {
  primary: "#FEFEFE",
  secondary: "#B3B3B3",
  dark: "#1A1A1A",
}
```

### Conteúdo
Edite [`src/constants/siteContent.ts`](src/constants/siteContent.ts):
```ts
export const siteContent = {
  siteName: "Zansk Tech",
  pages: {
    home: {
      content: {
        headline: "Seu texto aqui..."
      }
    }
  }
}
```

### Componentes
Adicione novos componentes em [`src/components/ui/`](src/components/ui/)

---

## 📱 Responsividade

O site é **mobile-first** e totalmente responsivo:

| Breakpoint | Width | Descrição |
|------------|-------|-----------|
| `sm` | 640px | Tablets pequenos |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktops |
| `xl` | 1280px | Desktops grandes |

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Via CLI
npm install -g vercel
vercel

# Ou conecte seu repo GitHub na Vercel
```

### Build Manual
```bash
npm run build
npm run start
```

---

## 📚 Documentação

- 📖 [QUICK_START.md](QUICK_START.md) - Guia rápido de uso
- 📖 [DEVELOPMENT.md](DEVELOPMENT.md) - Detalhes técnicos
- 📖 [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Resumo completo

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os padrões:

1. TypeScript strict (sem `any`)
2. Componentes no Design System
3. Conteúdo em `siteContent.ts`
4. Mobile-first
5. Código formatado (Prettier)

---

## 📝 Licença

© 2026 Zansk Tech. Todos os direitos reservados.

---

## 🎉 Créditos

Desenvolvido com ❤️ por **GitHub Copilot** (Claude Sonnet 4.5)

**Stack moderna, código limpo, resultado profissional.** 🚀
