# Zansk Tech - Documentação do Projeto

## 🚀 Stack Tecnológica

- **Next.js 15.1.0** (App Router)
- **React 19.0.0**
- **TypeScript 5.7.2** (strict mode)
- **TailwindCSS 3.4.17**
- **ESLint + Prettier**

## 📁 Estrutura do Projeto

```
zansk/
├── public/               # Imagens e assets estáticos
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── team/
│   ├── reviews/
│   ├── cases/
│   ├── processes/
│   └── contact/
├── src/
│   ├── app/             # Rotas (App Router)
│   │   ├── about/
│   │   ├── services/
│   │   ├── team/
│   │   ├── reviews/
│   │   ├── cases/
│   │   ├── processes/
│   │   ├── contact/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/          # Design System
│   │   └── layout/      # Header e Footer
│   ├── constants/       # siteContent.ts
│   ├── hooks/           # useScrolled
│   └── lib/             # Utilitários
```

## 🎨 Design System

### Componentes Base

- **Box**: Wrapper semântico
- **Container**: Container responsivo
- **Stack**: Layout flexível
- **Grid**: Grid responsivo
- **Card**: Cards com efeito glass
- **Typography**: Sistema de tipografia
- **Button**: Botões variados
- **IconButton**: Botões com ícones
- **Link**: Wrapper do Next Link
- **Image**: Wrapper do Next Image
- **Divider**: Separadores
- **Skeleton**: Loading states
- **Spinner**: Indicador de loading
- **LoadingOverlay**: Overlay de loading

## 🎯 Funcionalidades

### Header

- Transparente no topo
- Animação ao scroll (blur + fundo translúcido)
- Menu mobile responsivo
- Navegação completa

### Páginas

1. **Home** (`/`) - Hero com background, seções de UI e Method
2. **About** (`/about`) - Sobre a empresa, valores
3. **Services** (`/services`) - Lista de serviços com cards
4. **Team** (`/team`) - Informações sobre o time
5. **Reviews** (`/reviews`) - Depoimentos de clientes
6. **Cases** (`/cases`) - Portfolio de projetos
7. **Processes** (`/processes`) - Metodologia de trabalho
8. **Contact** (`/contact`) - Formulário de contato

## 🚀 Como Rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start

# Lint
npm run lint

# Format
npm run format
```

## 📱 Responsividade

O projeto é **mobile-first** com breakpoints:

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🎨 Tema

### Cores

- Primary: `#FEFEFE` (branco)
- Secondary: `#B3B3B3` (cinza)
- Dark: `#1A1A1A` (fundo)

### Efeitos

- Glass UI: `bg-white/5 backdrop-blur-md border border-white/10`
- Shadows: Customizados no Tailwind
- Transitions: Suaves em todos os elementos

## 📝 Regras de Código

- ✅ TypeScript strict (sem `any`)
- ✅ Componentes reutilizáveis
- ✅ Props tipadas
- ✅ Sem HTML direto (apenas via Design System)
- ✅ Todo conteúdo vem de `siteContent.ts`
- ✅ Paths absolutos com `@/*`
- ✅ Acessibilidade básica

## 🔧 Configurações

- **ESLint**: Configurado com TypeScript e Prettier
- **Prettier**: Formatação consistente
- **EditorConfig**: Configuração do editor
- **TypeScript**: Modo strict
- **TailwindCSS**: Tokens customizados

## 📄 Licença

© 2026 Zansk Tech. Todos os direitos reservados.
