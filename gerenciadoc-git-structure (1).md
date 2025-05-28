# Estrutura do Projeto GerenciaDoc para Git

## 📁 Estrutura de Pastas

```
gerenciadoc/
├── .gitignore
├── .env.local.example
├── README.md
├── CHANGELOG.md
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── components.json
├── docs/
│   ├── design-system/
│   │   ├── design-system.css
│   │   ├── paleta-cores.md
│   │   ├── tipografia.md
│   │   ├── componentes.md
│   │   └── layout-espacamento.md
│   ├── guias/
│   │   ├── guia-design-system-gerenciadoc.md
│   │   └── tendencias-ui-ux-2025.md
│   ├── screenshots/
│   └── context-template.md
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── assets/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── licitacoes/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── api/
│   ├── components/
│   │   ├── ui/ (shadcn components)
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── MainLayout.tsx
│   │   ├── licitacoes/
│   │   │   ├── LicitacaoDetalhes.tsx
│   │   │   └── DocumentosSection.tsx
│   │   └── modals/
│   │       └── AdicionarDocumentoModal.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── types.ts
│   ├── styles/
│   │   └── design-system.css
│   └── data/
│       └── mockData.ts
└── prisma/
    ├── schema.prisma
    └── migrations/
```

## 🚀 Comandos para Inicializar

### 1. Criar o repositório
```bash
mkdir gerenciadoc
cd gerenciadoc
git init
```

### 2. Inicializar Next.js
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir
```

### 3. Instalar dependências adicionais
```bash
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs
npm install lucide-react class-variance-authority clsx tailwind-merge
npm install prisma @prisma/client
npm install next-auth
```

### 4. Configurar Shadcn/UI
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add tabs
```

## 📝 Arquivos Principais a Criar

### package.json
```json
{
  "name": "gerenciadoc",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:push": "prisma db push",
    "db:studio": "prisma studio"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "^18",
    "react-dom": "^18",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-tabs": "^1.0.4",
    "lucide-react": "^0.378.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0",
    "prisma": "^5.14.0",
    "@prisma/client": "^5.14.0",
    "next-auth": "^4.24.7"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.3"
  }
}
```

### .gitignore
```
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# Database
/prisma/dev.db
/prisma/dev.db-journal

# IDE
.vscode/
.idea/
*.swp
*.swo
```

### tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Design System Colors
        primary: {
          DEFAULT: "#0052CC",
          hover: "#0747A6",
          active: "#043584",
        },
        success: {
          DEFAULT: "#36B37E",
          hover: "#2E9E6B",
          active: "#268C5F",
        },
        teal: {
          DEFAULT: "#00B8D9",
          hover: "#00A3BF",
          active: "#008DA3",
        },
        error: {
          DEFAULT: "#DE350B",
          hover: "#C62F0A",
          active: "#AE2A09",
        },
        warning: {
          DEFAULT: "#FFAB00",
          hover: "#E69900",
          active: "#CC8800",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

## 📋 Checklist de Criação

### Arquivos de Configuração
- [ ] package.json
- [ ] tsconfig.json
- [ ] tailwind.config.js
- [ ] next.config.js
- [ ] .gitignore
- [ ] .env.local.example
- [ ] components.json (shadcn)

### Documentação
- [ ] README.md
- [ ] CHANGELOG.md
- [ ] docs/design-system/ (todos os arquivos MD e CSS)
- [ ] docs/context-template.md

### Código Fonte
- [ ] src/app/layout.tsx
- [ ] src/app/globals.css (com design system)
- [ ] src/components/licitacoes/LicitacaoDetalhes.tsx
- [ ] src/lib/types.ts
- [ ] src/data/mockData.ts

### Banco de Dados
- [ ] prisma/schema.prisma

## 🎯 Próximos Passos após Git

1. **Commit inicial:**
```bash
git add .
git commit -m "feat: setup inicial do projeto GerenciaDoc

- Configuração Next.js 14 com TypeScript
- Design System implementado
- Tela de detalhes de licitação completa
- Estrutura de componentes base
- Documentação técnica"
```

2. **Criar repositório remoto** (GitHub/GitLab)
3. **Push inicial:**
```bash
git remote add origin [URL_DO_REPO]
git branch -M main
git push -u origin main
```

Quer que eu crie os arquivos específicos agora ou você prefere que eu ajude com algum arquivo em particular?