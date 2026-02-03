# Zansk Tech - Website Institucional

Website institucional da Zansk Tech, uma empresa de desenvolvimento de produtos digitais. Projeto construído com Next.js 16, React 19, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **React Icons** - Biblioteca de ícones

## 📋 Pré-requisitos

- Node.js 22.x ou superior
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Diogo0602x/zansk.git
cd zansk
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env .env.local
```

Edite o arquivo `.env.local` com suas informações:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER="seu_numero_aqui"
NEXT_PUBLIC_LINKEDIN_URL="https://www.linkedin.com/company/zansk"
NEXT_PUBLIC_EMAIL="seu_email_aqui"
```

## 🏃‍♂️ Executando o projeto

### Modo desenvolvimento
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build para produção
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
zansk/
├── public/              # Imagens e assets públicos
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── team/
│   ├── reviews/
│   ├── cases/
│   ├── processes/
│   └── contact/
├── src/
│   ├── app/            # Páginas (App Router)
│   │   ├── about/
│   │   ├── cases/
│   │   ├── contact/
│   │   ├── processes/
│   │   ├── reviews/
│   │   ├── services/
│   │   ├── team/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/     # Componentes reutilizáveis
│   │   └── ui/
│   └── constants/      # Conteúdo e configurações
│       ├── siteContent.ts
│       └── contact.ts
└── TIPS.md            # Guia de boas práticas
```

## 📝 Editando Conteúdo

Todo o conteúdo do site está centralizado em `src/constants/siteContent.ts`. Para alterar textos, títulos ou descrições, edite este arquivo.

**Exemplo:**
```typescript
// src/constants/siteContent.ts
export const siteContent = {
  pages: {
    home: {
      content: {
        headline: "Seu novo título aqui",
        subheadline: "Seu novo subtítulo",
      }
    }
  }
}
```

## 🖼️ Adicionando Imagens

1. Adicione a imagem em `public/[page]/`
2. Registre o path em `src/constants/siteContent.ts`
3. Use nas páginas através do objeto de conteúdo

**Exemplo:**
```typescript
// siteContent.ts
images: {
  minhaImagem: "/home/minha-imagem.png"
}

// page.tsx
<Image
  src={homeContent.images.minhaImagem}
  alt="Descrição"
  fill
/>
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint

# Formatar código
npm run format
```

## ✅ Checklist antes de Commitar

- [ ] `npm run lint` sem erros
- [ ] `npx tsc --noEmit` sem erros
- [ ] `npm run format` executado
- [ ] Testado em mobile (DevTools)
- [ ] Sem `console.log()` esquecidos
- [ ] Sem código comentado
- [ ] Mensagem de commit clara

## 📚 Documentação Adicional

Para dicas detalhadas e boas práticas, consulte o arquivo [TIPS.md](TIPS.md).

## 📞 Contato

- LinkedIn: [Zansk Tech](https://www.linkedin.com/company/zansk)

## 📄 Licença

Projeto privado - Todos os direitos reservados © 2024 Zansk Tech
