# ========== CONFIGURAÇÕES DO BANCO DE DADOS ==========

# URL de conexão com PostgreSQL
# Formato: postgresql://username:password@localhost:5432/database_name
DATABASE_URL="postgresql://username:password@localhost:5432/gerenciadoc"

# URL para desenvolvimento local (pode usar SQLite)
# DATABASE_URL="file:./dev.db"

# ========== NEXTAUTH.JS CONFIGURAÇÕES ==========

# Chave secreta para JWT (gere uma nova em produção)
# Você pode gerar uma com: openssl rand -base64 32
NEXTAUTH_SECRET="your-secret-key-here"

# URL da aplicação (mude para sua URL de produção)
NEXTAUTH_URL="http://localhost:3000"

# ========== PROVEDORES DE AUTENTICAÇÃO ==========

# Google OAuth (opcional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# GitHub OAuth (opcional)
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"

# Microsoft Azure AD (opcional)
AZURE_AD_CLIENT_ID="your-azure-client-id"
AZURE_AD_CLIENT_SECRET="your-azure-client-secret"
AZURE_AD_TENANT_ID="your-azure-tenant-id"

# ========== CONFIGURAÇÕES DE EMAIL ==========

# SMTP para envio de emails (opcional)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@gerenciadoc.com"

# ========== UPLOAD DE ARQUIVOS ==========

# AWS S3 (opcional para armazenamento de arquivos)
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_REGION="us-east-1"
AWS_S3_BUCKET="gerenciadoc-files"

# Cloudinary (alternativa para uploads)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# ========== CONFIGURAÇÕES DE DESENVOLVIMENTO ==========

# Ambiente (development, production, test)
NODE_ENV="development"

# URL da API (para desenvolvimento local)
NEXT_PUBLIC_API_URL="http://localhost:3000/api"

# Habilitar logs de debug
DEBUG="true"

# ========== CONFIGURAÇÕES DE PRODUÇÃO ==========

# URL do domínio de produção
NEXT_PUBLIC_APP_URL="https://your-domain.com"

# Supabase (se usar como banco de dados em produção)
SUPABASE_URL="your-supabase-url"
SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"

# ========== INTEGRAÇÕES EXTERNAS ==========

# API de CEP (opcional)
CEP_API_KEY="your-cep-api-key"

# API de CNPJ (opcional)
CNPJ_API_KEY="your-cnpj-api-key"

# Webhook para notificações (opcional)
WEBHOOK_URL="https://your-webhook-url.com"

# ========== MONITORAMENTO E ANALYTICS ==========

# Sentry para monitoramento de erros (opcional)
SENTRY_DSN="your-sentry-dsn"

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID="your-google-analytics-id"

# ========== CONFIGURAÇÕES DE CACHE ==========

# Redis para cache (opcional)
REDIS_URL="redis://localhost:6379"

# ========== CONFIGURAÇÕES DE SEGURANÇA ==========

# CORS origins permitidas (separadas por vírgula)
CORS_ORIGINS="http://localhost:3000,https://your-domain.com"

# Rate limiting
RATE_LIMIT_MAX="100"
RATE_LIMIT_WINDOW="900000"

# ========== VARIÁVEIS DE FEATURE FLAGS ==========

# Habilitar funcionalidades experimentais
ENABLE_BETA_FEATURES="false"
ENABLE_FILE_PREVIEW="true"
ENABLE_NOTIFICATIONS="true"
ENABLE_ANALYTICS="false"

# ========== INSTRUÇÕES ==========

# 1. Copie este arquivo para .env.local
# 2. Preencha as variáveis necessárias para seu ambiente
# 3. Nunca commite o arquivo .env.local no Git
# 4. Para produção, configure as variáveis no seu provedor de hosting

# IMPORTANTE: 
# - Gere chaves secretas seguras para produção
# - Use URLs HTTPS em produção
# - Configure adequadamente as permissões do banco de dados
# - Mantenha as chaves de API seguras e rotacione periodicamente