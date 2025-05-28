// ========== TIPOS BASE ==========

export type UserRole = 'ADMIN' | 'USER' | 'VIEWER';

export type DocumentoStatus = 'VALID' | 'EXPIRING' | 'EXPIRED' | 'PENDING' | 'REJECTED';

export type DocumentoTipo = 
  | 'FISCAL' 
  | 'TRABALHISTA' 
  | 'TECNICA' 
  | 'QUALIFICACAO' 
  | 'HABILITACAO_JURIDICA' 
  | 'EDITAL' 
  | 'OUTROS';

export type LicitacaoStatus = 
  | 'RASCUNHO'
  | 'AGUARDANDO_ABERTURA'
  | 'ABERTA'
  | 'EM_ANALISE'
  | 'FINALIZADA'
  | 'CANCELADA';

export type LicitacaoTipo = 
  | 'PREGAO_ELETRONICO'
  | 'PREGAO_PRESENCIAL'
  | 'TOMADA_PRECOS'
  | 'CONVITE'
  | 'CONCORRENCIA'
  | 'OUTROS';

export type AtividadeTipo = 
  | 'DOCUMENTO_CRIADO'
  | 'DOCUMENTO_EDITADO'
  | 'DOCUMENTO_REMOVIDO'
  | 'LICITACAO_CRIADA'
  | 'LICITACAO_EDITADA'
  | 'USUARIO_LOGOU'
  | 'ARQUIVO_ENVIADO';

// ========== INTERFACES PRINCIPAIS ==========

export interface User {
  id: string;
  name?: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Empresa {
  id: string;
  razaoSocial: string;
  nomeFantasia?: string;
  cnpj: string;
  email?: string;
  telefone?: string;
  endereco?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  ativa: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Documento {
  id: string;
  nome: string;
  tipo: DocumentoTipo;
  status: DocumentoStatus;
  arquivo?: string;
  tamanho?: number;
  mimetype?: string;
  validade?: Date;
  observacoes?: string;
  empresaId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  empresa?: Empresa;
  user?: User;
  versoes?: DocumentoVersao[];
}

export interface DocumentoVersao {
  id: string;
  documentoId: string;
  versao: number;
  arquivo: string;
  tamanho?: number;
  observacoes?: string;
  createdAt: Date;
}

export interface Licitacao {
  id: string;
  titulo: string;
  tipo: LicitacaoTipo;
  numero?: string;
  orgao: string;
  valorEstimado?: number;
  dataAbertura?: Date;
  dataEncerramento?: Date;
  descricao?: string;
  status: LicitacaoStatus;
  editalUrl?: string;
  empresaId: string;
  createdAt: Date;
  updatedAt: Date;
  empresa?: Empresa;
  documentos?: LicitacaoDocumento[];
  usuarios?: LicitacaoUser[];
}

export interface LicitacaoDocumento {
  id: string;
  licitacaoId: string;
  documentoId: string;
  obrigatorio: boolean;
  enviado: boolean;
  createdAt: Date;
  updatedAt: Date;
  licitacao?: Licitacao;
  documento?: Documento;
}

export interface LicitacaoUser {
  id: string;
  licitacaoId: string;
  userId: string;
  role: UserRole;
  createdAt: Date;
  licitacao?: Licitacao;
  user?: User;
}

export interface AtividadeLog {
  id: string;
  tipo: AtividadeTipo;
  descricao: string;
  entidadeId?: string;
  entidadeTipo?: string;
  userId: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  user?: User;
}

export interface Notificacao {
  id: string;
  titulo: string;
  mensagem: string;
  tipo: 'info' | 'warning' | 'error' | 'success';
  lida: boolean;
  userId: string;
  link?: string;
  createdAt: Date;
  user?: User;
}

// ========== TIPOS PARA UI ==========

export interface NavigationItem {
  icon: any; // LucideIcon
  label: string;
  href?: string;
  active?: boolean;
  badge?: string;
  children?: NavigationItem[];
}

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  disabled?: boolean;
}

export interface StatusBadgeProps {
  status: DocumentoStatus;
  size?: 'sm' | 'md' | 'lg';
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  icon: any; // LucideIcon
  color: 'primary' | 'success' | 'warning' | 'error' | 'info';
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

// ========== TIPOS PARA FORMULÁRIOS ==========

export interface CreateDocumentoFormData {
  nome: string;
  tipo: DocumentoTipo;
  validade?: Date;
  observacoes?: string;
  arquivo?: File;
}

export interface UpdateDocumentoFormData extends Partial<CreateDocumentoFormData> {
  id: string;
}

export interface CreateLicitacaoFormData {
  titulo: string;
  tipo: LicitacaoTipo;
  numero?: string;
  orgao: string;
  valorEstimado?: number;
  dataAbertura?: Date;
  dataEncerramento?: Date;
  descricao?: string;
  editalUrl?: string;
}

export interface UpdateLicitacaoFormData extends Partial<CreateLicitacaoFormData> {
  id: string;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// ========== TIPOS PARA API ==========

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface FilterOptions {
  search?: string;
  status?: DocumentoStatus | LicitacaoStatus;
  tipo?: DocumentoTipo | LicitacaoTipo;
  dataInicio?: Date;
  dataFim?: Date;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// ========== TIPOS PARA UPLOAD ==========

export interface UploadProgress {
  fileName: string;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  error?: string;
}

export interface FileUploadResponse {
  url: string;
  fileName: string;
  size: number;
  mimetype: string;
}

// ========== TIPOS PARA DASHBOARD ==========

export interface DashboardStats {
  totalDocumentos: number;
  documentosValidos: number;
  documentosVencendo: number;
  documentosVencidos: number;
  totalLicitacoes: number;
  licitacoesAbertas: number;
  licitacoesFinalizadas: number;
  valorTotalLicitacoes: number;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

// ========== TIPOS PARA CONFIGURAÇÕES ==========

export interface AppConfig {
  siteName: string;
  siteDescription: string;
  version: string;
  environment: 'development' | 'production' | 'staging';
  features: {
    enableNotifications: boolean;
    enableFilePreview: boolean;
    enableAnalytics: boolean;
    enableBetaFeatures: boolean;
  };
}

// ========== TIPOS UTILITÁRIOS ==========

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type WithTimestamps<T> = T & {
  createdAt: Date;
  updatedAt: Date;
};

// ========== TIPOS PARA CONTEXTOS ==========

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (data: Partial<User>) => Promise<void>;
}

export interface NotificationContextType {
  notifications: Notificacao[];
  unreadCount: number;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  addNotification: (notification: Omit<Notificacao, 'id' | 'createdAt' | 'userId'>) => void;
}

// ========== TIPOS PARA HOOKS ==========

export interface UseDocumentosParams {
  filters?: FilterOptions;
  enabled?: boolean;
}

export interface UseLicitacoesParams {
  filters?: FilterOptions;
  enabled?: boolean;
}

export interface UseUploadParams {
  onSuccess?: (response: FileUploadResponse) => void;
  onError?: (error: string) => void;
  maxFileSize?: number;
  acceptedFileTypes?: string[];
}

// ========== TIPOS PARA MOCK DATA ==========

export interface MockDocumento extends Documento {
  empresa: Empresa;
  user: User;
}

export interface MockLicitacao extends Licitacao {
  empresa: Empresa;
  documentos: LicitacaoDocumento[];
}