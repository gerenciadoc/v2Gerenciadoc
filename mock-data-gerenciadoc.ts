        id: '3',
        licitacaoId: '1',
        documentoId: '3',
        obrigatorio: true,
        enviado: true,
        createdAt: new Date('2025-05-12'),
        updatedAt: new Date('2025-05-12'),
      },
      {
        id: '4',
        licitacaoId: '1',
        documentoId: '4',
        obrigatorio: true,
        enviado: true,
        createdAt: new Date('2025-05-15'),
        updatedAt: new Date('2025-05-15'),
      },
      {
        id: '5',
        licitacaoId: '1',
        documentoId: '5',
        obrigatorio: true,
        enviado: true,
        createdAt: new Date('2025-05-20'),
        updatedAt: new Date('2025-05-20'),
      },
    ],
  },
  {
    id: '2',
    titulo: 'Fornecimento de Equipamentos de TI',
    tipo: 'PREGAO_ELETRONICO',
    numero: 'PE-002/2025',
    orgao: 'Governo do Estado de São Paulo',
    valorEstimado: 850000,
    dataAbertura: new Date('2025-06-20'),
    dataEncerramento: new Date('2025-07-30'),
    descricao: 'Aquisição de equipamentos de informática, incluindo computadores, notebooks, impressoras e servidores para modernização do parque tecnológico.',
    status: 'RASCUNHO',
    editalUrl: 'https://example.com/edital-pe-002-2025.pdf',
    empresaId: '1',
    createdAt: new Date('2025-05-15'),
    updatedAt: new Date('2025-05-26'),
    empresa: mockEmpresas[0],
    documentos: [],
  },
  {
    id: '3',
    titulo: 'Serviços de Consultoria Jurídica',
    tipo: 'TOMADA_PRECOS',
    numero: 'TP-001/2025',
    orgao: 'Tribunal de Justiça de São Paulo',
    valorEstimado: 450000,
    dataAbertura: new Date('2025-05-25'),
    dataEncerramento: new Date('2025-06-25'),
    descricao: 'Contratação de escritório de advocacia para prestação de serviços especializados em direito administrativo e processual.',
    status: 'ABERTA',
    empresaId: '1',
    createdAt: new Date('2025-04-20'),
    updatedAt: new Date('2025-05-25'),
    empresa: mockEmpresas[0],
    documentos: [],
  },
];

// ========== NAVEGAÇÃO MOCK ==========

export const mockNavigationItems: NavigationItem[] = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: '/dashboard',
    active: false,
  },
  {
    icon: FileText,
    label: 'Documentos',
    href: '/documentos',
    active: false,
  },
  {
    icon: Trophy,
    label: 'Licitações',
    href: '/licitacoes',
    active: true,
  },
  {
    icon: Bell,
    label: 'Alertas',
    href: '/alertas',
    active: false,
    badge: '3',
  },
  {
    icon: FileText,
    label: 'Relatórios',
    href: '/relatorios',
    active: false,
  },
  {
    icon: Users,
    label: 'Colaboradores',
    href: '/colaboradores',
    active: false,
  },
  {
    icon: Settings,
    label: 'Configurações',
    href: '/configuracoes',
    active: false,
  },
];

// ========== ESTATÍSTICAS DO DASHBOARD ==========

export const mockDashboardStats: DashboardStats = {
  totalDocumentos: 156,
  documentosValidos: 142,
  documentosVencendo: 8,
  documentosVencidos: 6,
  totalLicitacoes: 23,
  licitacoesAbertas: 5,
  licitacoesFinalizadas: 18,
  valorTotalLicitacoes: 15750000,
};

// ========== DADOS PARA GRÁFICOS ==========

export const mockDocumentStatusChart: ChartData[] = [
  { name: 'Válidos', value: 142, color: '#36B37E' },
  { name: 'Vencendo', value: 8, color: '#FFAB00' },
  { name: 'Vencidos', value: 6, color: '#DE350B' },
];

export const mockLicitacaoStatusChart: ChartData[] = [
  { name: 'Abertas', value: 5, color: '#0052CC' },
  { name: 'Em Análise', value: 3, color: '#00B8D9' },
  { name: 'Finalizadas', value: 18, color: '#36B37E' },
  { name: 'Canceladas', value: 2, color: '#DE350B' },
];

export const mockDocumentosPorTipo: ChartData[] = [
  { name: 'Fiscal', value: 45, color: '#0052CC' },
  { name: 'Trabalhista', value: 32, color: '#36B37E' },
  { name: 'Técnica', value: 28, color: '#00B8D9' },
  { name: 'Qualificação', value: 25, color: '#FFAB00' },
  { name: 'Hab. Jurídica', value: 18, color: '#7A869A' },
  { name: 'Outros', value: 8, color: '#DE350B' },
];

export const mockLicitacoesPorMes: ChartData[] = [
  { name: 'Jan', value: 2 },
  { name: 'Fev', value: 3 },
  { name: 'Mar', value: 4 },
  { name: 'Abr', value: 5 },
  { name: 'Mai', value: 8 },
  { name: 'Jun', value: 6 },import type {
  MockDocumento,
  MockLicitacao,
  User,
  Empresa,
  NavigationItem,
  DashboardStats,
  ChartData,
} from '@/lib/types';

import {
  LayoutDashboard,
  FileText,
  Trophy,
  Bell,
  Users,
  Settings,
  LogOut,
} from 'lucide-react';

// ========== USUÁRIOS MOCK ==========

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao.silva@empresa.com',
    role: 'ADMIN',
    image: 'https://via.placeholder.com/40x40',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2025-05-27'),
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria.santos@empresa.com',
    role: 'USER',
    image: 'https://via.placeholder.com/40x40',
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2025-05-26'),
  },
  {
    id: '3',
    name: 'Pedro Costa',
    email: 'pedro.costa@empresa.com',
    role: 'VIEWER',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2025-05-25'),
  },
];

// ========== EMPRESAS MOCK ==========

export const mockEmpresas: Empresa[] = [
  {
    id: '1',
    razaoSocial: 'TechSolutions Ltda',
    nomeFantasia: 'TechSolutions',
    cnpj: '12.345.678/0001-90',
    email: 'contato@techsolutions.com',
    telefone: '(11) 99999-9999',
    endereco: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '01234-567',
    ativa: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2025-05-27'),
  },
  {
    id: '2',
    razaoSocial: 'Inovação Digital S.A.',
    nomeFantasia: 'InovaDigital',
    cnpj: '98.765.432/0001-10',
    email: 'contato@inovadigital.com',
    telefone: '(11) 88888-8888',
    endereco: 'Av. Paulista, 1000',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '01310-100',
    ativa: true,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2025-05-26'),
  },
];

// ========== DOCUMENTOS MOCK ==========

export const mockDocumentos: MockDocumento[] = [
  {
    id: '1',
    nome: 'Certidão Negativa Federal',
    tipo: 'FISCAL',
    status: 'VALID',
    arquivo: 'certidao_federal.pdf',
    tamanho: 2097152, // 2MB
    mimetype: 'application/pdf',
    validade: new Date('2025-06-14'),
    observacoes: 'Certidão emitida pela Receita Federal',
    empresaId: '1',
    userId: '1',
    createdAt: new Date('2025-05-10'),
    updatedAt: new Date('2025-05-10'),
    empresa: mockEmpresas[0],
    user: mockUsers[0],
  },
  {
    id: '2',
    nome: 'Certidão Negativa Estadual',
    tipo: 'FISCAL',
    status: 'EXPIRING',
    arquivo: 'certidao_estadual.pdf',
    tamanho: 1572864, // 1.5MB
    mimetype: 'application/pdf',
    validade: new Date('2025-06-05'),
    observacoes: 'Certidão emitida pela Secretaria da Fazenda Estadual',
    empresaId: '1',
    userId: '1',
    createdAt: new Date('2025-05-08'),
    updatedAt: new Date('2025-05-08'),
    empresa: mockEmpresas[0],
    user: mockUsers[0],
  },
  {
    id: '3',
    nome: 'FGTS - Certificado de Regularidade',
    tipo: 'TRABALHISTA',
    status: 'VALID',
    arquivo: 'fgts_regularidade.pdf',
    tamanho: 1048576, // 1MB
    mimetype: 'application/pdf',
    validade: new Date('2025-07-15'),
    observacoes: 'Certificado emitido pela Caixa Econômica Federal',
    empresaId: '1',
    userId: '2',
    createdAt: new Date('2025-05-12'),
    updatedAt: new Date('2025-05-12'),
    empresa: mockEmpresas[0],
    user: mockUsers[1],
  },
  {
    id: '4',
    nome: 'Certidão de Registro no CREA',
    tipo: 'TECNICA',
    status: 'VALID',
    arquivo: 'registro_crea.pdf',
    tamanho: 3145728, // 3MB
    mimetype: 'application/pdf',
    validade: new Date('2025-08-30'),
    observacoes: 'Registro profissional no CREA-SP',
    empresaId: '1',
    userId: '1',
    createdAt: new Date('2025-05-15'),
    updatedAt: new Date('2025-05-15'),
    empresa: mockEmpresas[0],
    user: mockUsers[0],
  },
  {
    id: '5',
    nome: 'Balanço Patrimonial 2024',
    tipo: 'QUALIFICACAO',
    status: 'VALID',
    arquivo: 'balanco_patrimonial_2024.pdf',
    tamanho: 5242880, // 5MB
    mimetype: 'application/pdf',
    validade: new Date('2025-12-31'),
    observacoes: 'Demonstrações financeiras auditadas',
    empresaId: '1',
    userId: '1',
    createdAt: new Date('2025-05-20'),
    updatedAt: new Date('2025-05-20'),
    empresa: mockEmpresas[0],
    user: mockUsers[0],
  },
  {
    id: '6',
    nome: 'Contrato Social Atualizado',
    tipo: 'HABILITACAO_JURIDICA',
    status: 'VALID',
    arquivo: 'contrato_social.pdf',
    tamanho: 2621440, // 2.5MB
    mimetype: 'application/pdf',
    observacoes: 'Última alteração registrada na Junta Comercial',
    empresaId: '1',
    userId: '1',
    createdAt: new Date('2025-05-25'),
    updatedAt: new Date('2025-05-25'),
    empresa: mockEmpresas[0],
    user: mockUsers[0],
  },
];

// ========== LICITAÇÕES MOCK ==========

export const mockLicitacoes: MockLicitacao[] = [
  {
    id: '1',
    titulo: 'Obra de Reforma - Plantão Médico',
    tipo: 'PREGAO_ELETRONICO',
    numero: 'PE-001/2025',
    orgao: 'Prefeitura Municipal de São Paulo',
    valorEstimado: 1250000,
    dataAbertura: new Date('2025-06-12'),
    dataEncerramento: new Date('2025-07-22'),
    descricao: 'Contratação de empresa especializada para execução de obra de reforma do Plantão Médico Municipal, incluindo serviços de alvenaria, elétrica, hidráulica, pintura e acabamentos.',
    status: 'AGUARDANDO_ABERTURA',
    editalUrl: 'https://example.com/edital-pe-001-2025.pdf',
    empresaId: '1',
    createdAt: new Date('2025-05-01'),
    updatedAt: new Date('2025-05-27'),
    empresa: mockEmpresas[0],
    documentos: [
      {
        id: '1',
        licitacaoId: '1',
        documentoId: '1',
        obrigatorio: true,
        enviado: true,
        createdAt: new Date('2025-05-10'),
        updatedAt: new Date('2025-05-10'),
      },
      {
        id: '2',
        licitacaoId: '1',
        documentoId: '2',
        obrigatorio: true,
        enviado: true,
        createdAt: new Date('2025-05-10'),
        updatedAt: new Date('2025-05-10'),
      },
      {
        id: '3',
        licitacaoId: '1',
        documentoId: '3',