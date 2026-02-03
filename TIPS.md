# 💡 Dicas e Boas Práticas - Zansk Tech

## 🎯 Como Usar o Projeto

### 1. Editando Conteúdo

**✅ SEMPRE edite em:** [`src/constants/siteContent.ts`](src/constants/siteContent.ts)

```typescript
// Exemplo: Mudar o título da home
export const siteContent = {
  pages: {
    home: {
      content: {
        headline: "Novo título aqui",  // ← Edite aqui
        subheadline: "Novo subtítulo",
      }
    }
  }
}
```

**❌ NUNCA** faça hardcode nas páginas:
```tsx
// ❌ ERRADO
<Typography>Texto hardcoded</Typography>

// ✅ CERTO
<Typography>{homeContent.content.headline}</Typography>
```

---

### 2. Adicionando Imagens

**Passo 1:** Adicione a imagem em [`/public/[page]/`](public/)
```
public/
  └── home/
      └── minha-imagem.png  ← Coloque aqui
```

**Passo 2:** Adicione o path em `siteContent.ts`
```typescript
images: {
  minhaImagem: "/home/minha-imagem.png",
}
```

**Passo 3:** Use na página
```tsx
<Image 
  src={homeContent.images.minhaImagem}
  alt="Descrição"
  fill
/>
```

---

### 3. Criando Novos Componentes

**Sempre use o Design System:**

```tsx
// ❌ ERRADO - HTML direto
<div className="...">
  <p>Texto</p>
</div>

// ✅ CERTO - Componentes do DS
<Box className="...">
  <Typography>Texto</Typography>
</Box>
```

**Componentes disponíveis:**
```tsx
import { 
  Box, Container, Stack, Grid,
  Card, Typography, Button, Link, Image,
  Skeleton, Spinner, LoadingOverlay 
} from "@/components/ui";
```

---

### 4. Estilização

**Use classes do Tailwind:**
```tsx
<Box className="p-6 bg-white/10 rounded-xl">
  <Typography className="text-2xl font-bold">
    Título
  </Typography>
</Box>
```

**Tokens customizados:**
```tsx
// Cores
className="bg-primary text-secondary"

// Glass effect
className="bg-white/10 backdrop-blur-md border border-white/10"

// Sombras
className="shadow-glass"
```

---

### 5. Responsividade

**Mobile-first sempre:**
```tsx
// ✅ CERTO
<Box className="text-base md:text-lg lg:text-xl">
  Mobile → Tablet → Desktop
</Box>

// ❌ ERRADO
<Box className="lg:text-xl md:text-lg text-base">
  Desktop → Tablet → Mobile
</Box>
```

**Breakpoints:**
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1280px+

---

### 6. Tipagem TypeScript

**Sempre tipado, nunca `any`:**

```tsx
// ❌ ERRADO
const data: any = { ... }

// ✅ CERTO
interface MyData {
  title: string;
  value: number;
}
const data: MyData = { ... }
```

**Props de componentes:**
```tsx
interface MyComponentProps {
  title: string;
  optional?: boolean;
  children: ReactNode;
}

export function MyComponent({ 
  title, 
  optional = false,
  children 
}: MyComponentProps) {
  // ...
}
```

---

### 7. Estrutura de Páginas

**Template básico:**
```tsx
import { Box, Container, Stack, Typography } from "@/components/ui";
import siteContent from "@/constants/siteContent";

const pageContent = siteContent.pages.about;

export default function AboutPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box className="py-16 lg:py-24">
        <Container>
          <Stack align="center" spacing="xl">
            <Typography variant="display">
              {pageContent.content.headline}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Other sections... */}
    </Box>
  );
}
```

---

### 8. Imagens de Background

**Para imagens `bg*`:**

```tsx
<Box className="relative min-h-screen">
  {/* Background com overlay */}
  <Box className="absolute inset-0 z-0">
    <Image 
      src={content.images.bg}
      alt="Background"
      fill
      className="object-cover"
    />
    <Box className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark" />
  </Box>

  {/* Conteúdo sobre o background */}
  <Container className="relative z-10">
    <Typography>Conteúdo legível</Typography>
  </Container>
</Box>
```

---

### 9. Cards com Glass Effect

```tsx
<Card variant="glass" padding="lg">
  <Stack spacing="md">
    <Typography variant="subtitle">
      Título
    </Typography>
    <Typography className="text-secondary-300">
      Descrição
    </Typography>
  </Stack>
</Card>
```

**Variantes:**
- `glass` - Efeito glass (padrão)
- `solid` - Fundo sólido
- `outline` - Apenas borda

---

### 10. Botões

```tsx
{/* Botão sólido */}
<Button variant="solid" size="lg">
  Clique aqui
</Button>

{/* Botão glass */}
<Button variant="glass" size="md">
  Saiba mais
</Button>

{/* Botão com loading */}
<Button loading={isLoading}>
  Enviar
</Button>
```

---

### 11. Layout Grid

```tsx
{/* Grid simples */}
<Grid cols={3} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>

{/* Grid responsivo */}
<Grid 
  cols={1} 
  responsive={{ 
    md: 2, 
    lg: 3 
  }}
>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

---

### 12. Stack (Flexbox)

```tsx
{/* Stack vertical */}
<Stack spacing="lg">
  <Typography>Item 1</Typography>
  <Typography>Item 2</Typography>
</Stack>

{/* Stack horizontal */}
<Stack direction="row" spacing="md" align="center">
  <Button>Botão 1</Button>
  <Button>Botão 2</Button>
</Stack>
```

---

### 13. Loading States

```tsx
{/* Skeleton para loading */}
{isLoading ? (
  <Skeleton variant="rectangular" height={200} />
) : (
  <Card>Conteúdo</Card>
)}

{/* Spinner */}
<Spinner size="lg" />

{/* Overlay de loading */}
<LoadingOverlay loading={isLoading} message="Carregando..." />
```

---

### 14. Formulários

```tsx
<Box>
  <label className="block text-sm font-medium mb-2">
    Nome
  </label>
  <input
    type="text"
    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary"
  />
</Box>
```

---

### 15. Navegação

```tsx
import { Link } from "@/components/ui";

{/* Link interno */}
<Link href="/about">Sobre</Link>

{/* Link externo */}
<Link href="https://..." external>
  LinkedIn
</Link>

{/* Link em botão */}
<Link href="/contact">
  <Button>Fale conosco</Button>
</Link>
```

---

## 🔧 Comandos Úteis

```bash
# Limpar cache do Next.js
rm -rf .next

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install

# Verificar erros antes de commitar
npm run lint
npx tsc --noEmit

# Formatar todo o código
npm run format
```

---

## 🐛 Troubleshooting

### Erro de compilação CSS
```bash
# Limpe o cache
rm -rf .next
npm run dev
```

### Erros de tipo TypeScript
```bash
# Verifique os erros
npx tsc --noEmit

# Reinicie o servidor TypeScript no VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### Imagem não carrega
1. Verifique se está em `/public`
2. Use path absoluto começando com `/`
3. Verifique o nome do arquivo (case-sensitive)

---

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

---

## 💡 Dicas Rápidas

1. **Sempre use o Design System** - Nunca HTML direto
2. **Conteúdo no siteContent.ts** - Nunca hardcode
3. **Mobile-first** - Pense mobile primeiro
4. **TypeScript strict** - Nunca use `any`
5. **Componentes pequenos** - Dividir para conquistar
6. **Código formatado** - Use Prettier
7. **Commits semânticos** - `feat:`, `fix:`, `chore:`

---

## ✅ Checklist Antes de Commitar

- [ ] `npm run lint` sem erros
- [ ] `npx tsc --noEmit` sem erros
- [ ] `npm run format` executado
- [ ] Testado em mobile (DevTools)
- [ ] Sem console.log() esquecidos
- [ ] Sem código comentado
- [ ] Mensagem de commit clara

---

**Feliz coding! 🚀**
