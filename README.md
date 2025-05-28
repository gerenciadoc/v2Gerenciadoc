📋 GerenciaDoc
Sistema completo de gestão de documentos para processos licitatórios, desenvolvido com Next.js 14+ e TypeScript.
🚀 Tecnologias

Framework: Next.js 14+ (App Router)
Linguagem: TypeScript
Estilização: Tailwind CSS + Design System customizado
Componentes: Shadcn/UI customizados
Ícones: Lucide React
Backend: Next.js API Routes
Banco de Dados: Prisma + PostgreSQL
Autenticação: NextAuth.js
Deploy: Vercel + Supabase

🎨 Design System
O projeto segue um design system consistente baseado em:

Cores Primárias: Azul corporativo (#0052CC), Verde sucesso (#36B37E), Teal (#00B8D9)
Tipografia: Inter (Google Fonts)
Componentes: Sistema modular e reutilizável
Layout: Design responsivo com sidebar fixa

✨ Funcionalidades Implementadas
🏢 Tela de Detalhes da Licitação

✅ Layout responsivo com sidebar de navegação
✅ Header com menu do usuário
✅ Seções colapsáveis para informações e documentos
✅ Sistema de tabs para categorização de documentos
✅ Modal para adicionar documentos existentes
✅ Filtros e sistema de busca
✅ Estados vazios com call-to-actions
✅ Interface moderna seguindo tendências UX/UI 2025

🧩 Componentes Base

✅ Sidebar de navegação
✅ Header com dropdown de usuário
✅ Cards informativos
✅ Sistema de modais
✅ Tabs interativas
✅ Estados de loading e vazios

🛠️ Instalação e Configuração
Pré-requisitos

Node.js 18+
npm ou yarn
PostgreSQL

Instalação

Clone o repositório:

bashgit clone [URL_DO_REPO]
cd gerenciadoc

Instale as dependências:

bashnpm install

Configure o ambiente:

bashcp .env.local.example .env.local
# Edite as variáveis de ambiente

Configure o banco de dados:

bashnpx prisma generate
npx prisma db push

Execute o projeto:

bashnpm run dev
Acesse: http://localhost:3000
📁 Estrutura do Projeto
src/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais + Design System
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página inicial
│   └── licitacoes/       # Páginas de licitações
├── components/            # Componentes React
│   ├── ui/               # Componentes Shadcn/UI
│   ├── layout/           # Componentes de layout
│   ├── licitacoes/       # Componentes específicos
│   └── modals/           # Modais
├── lib/                  # Utilitários e tipos
├── styles/               # CSS do Design System
└── data/                 # Dados mockados
🎯 Roadmap
🚧 Em Desenvolvimento

 Modal de upload de arquivos
 Preview de documentos PDF
 Sistema de notificações
 Estados de loading aprimorados

📋 Planejado

 Dashboard principal
 Lista de licitações
 Gestão completa de documentos (CRUD)
 Sistema de alertas e vencimentos
 Relatórios e analytics
 Integração com APIs externas
 Autenticação e autorização
 Configurações do usuário

📖 Documentação

Design System
Guia de Componentes
Paleta de Cores
Tipografia
Tendências UI/UX 2025

🤝 Contribuição

Faça um fork do projeto
Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
Commit suas mudanças (git commit -m 'Add some AmazingFeature')
Push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request

📝 Convenções
Commits
Seguimos o padrão Conventional Commits:

feat: nova funcionalidade
fix: correção de bug
docs: mudanças na documentação
style: formatação, espaços em branco, etc.
refactor: refatoração de código
test: adição ou modificação de testes
chore: mudanças em ferramentas, configurações, etc.

Código

TypeScript para tipagem estática
ESLint + Prettier para formatação
Componentes funcionais com hooks
Props tipadas com interfaces
CSS classes do Tailwind + Design System

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
👥 Equipe

Desenvolvimento: [Seu Nome]
Design System: Baseado em tendências UX/UI 2025
Arquitetura: Next.js 14 + TypeScript


Status: 🚧 Em desenvolvimento ativo
Última atualização: Maio 2025
