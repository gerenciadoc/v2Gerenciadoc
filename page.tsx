  {/* Hero Section */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="pt-16 pb-20 text-center">
      <div className="mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
          <CheckCircle className="w-4 h-4 mr-2" />
          Sistema Online e Funcionando
        </div>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Gerencie suas{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Licitações
        </span>
        <br />
        de forma inteligente
      </h1>
      
      <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
        Sistema completo para gestão de documentos e processos licitatórios. 
        Organize, monitore e acompanhe todas suas participações em um só lugar.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Link 
          href="/dashboard"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
        >
          <BarChart3 className="w-5 h-5 mr-2" />
          Acessar Dashboard
        </Link>
        <Link 
          href="/licitacoes"
          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
        >
          <Trophy className="w-5 h-5 mr-2" />
          Ver Licitações
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { number: '50+', label: 'Licitações Gerenciadas' },
          { number: '200+', label: 'Documentos Organizados' },
          { number: '99%', label: 'Uptime do Sistema' }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {[
        {
          icon: FileText,
          title: 'Gestão de Documentos',
          description: 'Organize e monitore validade de certidões, contratos e documentos técnicos com alertas automáticos.',
          color: 'blue'
        },
        {
          icon: Trophy,
          title: 'Acompanhamento de Licitações',
          description: 'Controle prazos, status e progresso de todas suas participações com dashboards intuitivos.',
          color: 'purple'
        },
        {
          icon: Users,
          title: 'Colaboração em Equipe',
          description: 'Trabalhe em equipe com controle de acesso, histórico de atividades e notificações.',
          color: 'green'
        }
      ].map((feature, index) => (
        <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
          <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>

    {/* Security & Trust */}
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-20">
      <div className="text-center mb-8">
        <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Segurança e Confiabilidade</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Seus dados estão protegidos com as melhores práticas de segurança e backup automático.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Shield, title: 'Dados Criptografados', desc: 'SSL/TLS e criptografia de ponta' },
          { icon: Clock, title: 'Backup Automático', desc: 'Seus dados sempre seguros' },
          { icon: CheckCircle, title: 'Uptime 99.9%', desc: 'Disponibilidade garantida' }
        ].map((item, index) => (
          <div key={index} className="text-center">
            <item.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </main>

  {/* Footer */}
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">GerenciaDoc</span>
        </div>
        <div className="text-gray-400 text-center md:text-right">
          <p>&copy; 2025 GerenciaDoc. Sistema de gestão de documentos para licitações.</p>
          <p className="text-sm mt-1">Desenvolvido com ❤️ para facilitar sua gestão</p>
        </div>
      </div>
    </div>
  </footer>
</div>
