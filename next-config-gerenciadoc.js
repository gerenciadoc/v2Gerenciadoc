/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações básicas
  reactStrictMode: true,
  swcMinify: true,
  
  // Configurações experimentais do Next.js 14
  experimental: {
    // Habilita otimizações do server components
    serverComponentsExternalPackages: ['@prisma/client'],
    // Otimização de CSS
    optimizeCss: true,
    // Scroll restoration
    scrollRestoration: true,
  },

  // Configurações de imagens
  images: {
    // Domínios externos permitidos para imagens
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'supabase.co',
      },
    ],
    // Formatos de imagem permitidos
    formats: ['image/webp', 'image/avif'],
    // Tamanhos de device
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Tamanhos de imagem
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Política de segurança de conteúdo
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https:",
              "connect-src 'self' https:",
              "frame-src 'self' https:",
            ].join('; '),
          },
          // Proteção contra clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Proteção contra MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Proteção XSS
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // HSTS (apenas em produção)
          ...(process.env.NODE_ENV === 'production' ? [{
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          }] : []),
          // Política de referrer
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Permissões do navegador
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirecionamentos
  async redirects() {
    return [
      // Redirecionar de /dashboard para /
      {
        source: '/dashboard',
        destination: '/',
        permanent: false,
      },
      // Redirecionar URLs antigas (se houver)
      {
        source: '/admin',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Rewrites para API proxy (se necessário)
  async rewrites() {
    return [
      // Proxy para APIs externas se necessário
      // {
      //   source: '/api/cep/:path*',
      //   destination: 'https://viacep.com.br/ws/:path*',
      // },
    ];
  },

  // Configurações de bundling
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Configurações customizadas do webpack
    
    // Otimização para bibliotecas grandes
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // Chunk separado para bibliotecas de UI
          ui: {
            name: 'ui-libs',
            test: /[\\/]node_modules[\\/](@radix-ui|lucide-react)[\\/]/,
            chunks: 'all',
            priority: 10,
          },
          // Chunk separado para React
          react: {
            name: 'react',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            chunks: 'all',
            priority: 20,
          },
        },
      },
    };

    // Alias para imports mais limpos
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };

    // Ignorar warnings específicos
    config.ignoreWarnings = [
      { module: /node_modules\/punycode/ },
      { file: /node_modules\/node-fetch/ },
    ];

    return config;
  },

  // Configurações de output (para build)
  output: 'standalone',
  
  // Configurações de compressão
  compress: true,
  
  // PoweredBy header (remover por segurança)
  poweredByHeader: false,
  
  // Configurações de development
  onDemandEntries: {
    // Período em ms para manter as páginas na memória
    maxInactiveAge: 25 * 1000,
    // Número de páginas que devem ser mantidas simultaneamente
    pagesBufferLength: 2,
  },

  // Configurações de TypeScript
  typescript: {
    // Permitir build mesmo com erros de tipo (não recomendado para produção)
    ignoreBuildErrors: false,
  },

  // Configurações de ESLint
  eslint: {
    // Diretórios para lint durante build
    dirs: ['src', 'pages', 'components', 'lib', 'app'],
    // Ignorar erros de lint durante build (não recomendado)
    ignoreDuringBuilds: false,
  },

  // Configurações de ambiente
  env: {
    CUSTOM_APP_NAME: 'GerenciaDoc',
    CUSTOM_APP_VERSION: process.env.npm_package_version || '0.1.0',
  },

  // Configurações de logging (desenvolvimento)
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Configurações de análise de bundle (apenas desenvolvimento)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      if (process.env.ANALYZE === 'true') {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true,
          })
        );
      }
      return config;
    },
  }),
};

// Wrapper para configurações condicionais
const withConfigEnhancements = (config) => {
  // Adicionar configurações específicas para produção
  if (process.env.NODE_ENV === 'production') {
    config.compiler = {
      ...config.compiler,
      // Remover console.log em produção
      removeConsole: {
        exclude: ['error', 'warn'],
      },
    };
  }

  // Configurações para desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    // Fast refresh melhorado
    config.experimental = {
      ...config.experimental,
      forceSwcTransforms: true,
    };
  }

  return config;
};

module.exports = withConfigEnhancements(nextConfig);