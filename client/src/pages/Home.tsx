import { useState } from 'react';
import { ArrowRight, Zap, Users, Code, Rocket, Github, FileText, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import GlobeVisualization from '@/components/Globe';
import ContactDialog from '@/components/ContactDialog';

export default function Home() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const ecosystemCards = [
    {
      icon: '⚡',
      title: 'Atlas Core',
      description: 'Plataforma de integracao que fornece elasticidade, seguranca, dados e servicos compartilhados para todo o ecossistema.',
    },
    {
      icon: '🌐',
      title: 'Atlas Platform',
      description: 'Infraestrutura para operar diferentes ecossistemas de negocios e ativos (Operating Systems).',
    },
    {
      icon: '🏢',
      title: 'Atlas Advisory',
      description: 'Consultoria em negocios, internacionalizacao, negociacoes e arquitetura empresarial.',
    },
    {
      icon: '🧠',
      title: 'Atlas IntelliSence',
      description: 'Inteligencia artificial, automacao, IA&O e inteligencia avancada.',
    },
    {
      icon: '💰',
      title: 'Atlas Financial',
      description: 'Solucoes financeiras digitais, pagamentos, credito, carteiras e infraestrutura financeira.',
    },
    {
      icon: '☁️',
      title: 'Atlas Cloud',
      description: 'Infraestrutura cloud moderna, DevOps, observabilidade e plataformas.',
    },
    {
      icon: '🔬',
      title: 'Atlas Labs',
      description: 'Pesquisa, prototipagem e inovacao continua em IA, blockchain e novas tecnologias.',
    },
    {
      icon: '📊',
      title: 'Atlas Research',
      description: 'Centro de investigacao dedicado, publicacoes, estudos e pesquisa aplicada.',
    },
    {
      icon: '🌍',
      title: 'Atlas Network',
      description: 'Projetos, produtos e parcerias que fazem parte da rede global da Atlas.',
    },
  ];

  const whyAtlasItems = [
    {
      icon: '🏗️',
      title: 'Arquitetura de Negocios',
      description: 'Descritivos modelos de negócio e estruturas de parcerias.',
    },
    {
      icon: '🌍',
      title: 'Expansao Internacional',
      description: 'Apoiamos empresas a crescer globalmente com expertise local.',
    },
    {
      icon: '⚙️',
      title: 'Enterprise AI',
      description: 'Solucoes de IA de nível empresarial, seguras e escaláveis.',
    },
    {
      icon: '💼',
      title: 'Parcerias de Valor',
      description: 'Transformamos ideias em produtos, plataformas e negocios.',
    },
  ];

  const technologies = [
    'TypeScript',
    'Node.js',
    'React',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'Tailwind CSS',
    'AI / LLMs',
  ];

  const services = [
    {
      icon: '🏗️',
      title: 'Arquitetura de Negocios',
      description: 'Descritivos modelos de negócio e estruturas de parcerias.',
    },
    {
      icon: '🌍',
      title: 'Expansao Internacional',
      description: 'Apoiamos empresas a crescer globalmente.',
    },
    {
      icon: '⚙️',
      title: 'Enterprise AI',
      description: 'Solucoes de IA escaláveis e seguras.',
    },
    {
      icon: '💳',
      title: 'Pagamentos & Fintech',
      description: 'Integracao de solucoes de pagamento e fintech.',
    },
    {
      icon: '💻',
      title: 'Engenharia de Software',
      description: 'Desenvolvimento de solucoes digitais escaláveis.',
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Infraestrutura cloud moderna e operacoes.',
    },
  ];

  const metrics = [
    { number: '450+', label: 'Projetos Entregues' },
    { number: '100+', label: 'Clientes e Parceiros' },
    { number: '1M+', label: 'Linhas de Codigo' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />

      {/* Hero Section */}
      <section id="inicio" className="pt-[120px] pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-violet-400 mb-4 tracking-widest">
                  RESEARCH • ARCHITECTURE • PLATFORMS
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  <span className="text-white">Construimos o futuro</span>
                  <br />
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    com pesquisa, arquitetura
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    e plataformas inteligentes.
                  </span>
                </h1>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                A Atlas Global combina tecnologia, inteligencia artificial e expertise internacional para transformar ideias complexas em solucoes digitais escaláveis e de alto impacto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => {
                    const element = document.querySelector('#ecossistema');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-700 hover:to-blue-700 text-base px-8 py-6"
                >
                  Explorar Ecossistema <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  onClick={() => setContactDialogOpen(true)}
                  variant="outline"
                  className="border-violet-500/50 text-white hover:bg-violet-500/10 text-base px-8 py-6"
                >
                  Falar com a Atlas
                </Button>
              </div>
            </div>

            {/* Right Globe */}
            <div className="hidden lg:block h-[500px] relative">
              <GlobeVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Trust Strip */}
      <section className="py-16 border-t border-b border-gray-800 bg-gradient-to-r from-violet-500/5 to-blue-500/5">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-400 mb-8 font-semibold tracking-widest">
            TECNOLOGIA E INOVACAO EM QUE CONFIAMOS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['AWS', 'Supabase', 'Next.js', 'Docker', 'OpenAI', 'Stripe', 'Cloudflare'].map((tech) => (
              <div key={tech} className="text-gray-400 font-semibold text-sm hover:text-white transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecossistema" className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-semibold tracking-widest mb-4">O ECOSSISTEMA ATLAS</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Um ecossistema completo para
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                criar, operar e escalar o futuro.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemCards.map((card, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-violet-500/50 hover:bg-gradient-to-br hover:from-violet-500/10 hover:to-blue-500/10 transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                <div className="flex items-center text-violet-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Saiba mais <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Atlas Section */}
      <section id="sobre" className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-semibold tracking-widest mb-4">POR QUE ATLAS?</p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Principios que guiam
              <br />
              tudo o que fazemos.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAtlasItems.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Native Section */}
      <section className="py-24 border-b border-gray-800 bg-gradient-to-b from-violet-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                IA no centro de
                <br />
                tudo o que construimos.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Utilizamos inteligencia artificial para criar agentes, automatizar processos, gerar decisoes e acelerar inovacao.
              </p>
            </div>
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-500/30 flex items-center justify-center">
                <div className="text-6xl">🤖</div>
              </div>
            </div>
            <div className="space-y-4">
              {['Agentes Inteligentes', 'Automacao', 'RAG & Knowledge', 'Analise Preditiva', 'IA para Negocios'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tecnologias" className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-semibold tracking-widest mb-4">TECNOLOGIAS QUE UTILIZAMOS</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Ferramentas modernas para
              <br />
              solucoes de proxima geracao.
            </h2>
            <Button variant="outline" className="border-violet-500/50 text-white hover:bg-violet-500/10 mt-8">
              Ver todas as tecnologias
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="p-4 rounded-lg border border-gray-700 bg-gray-900/30 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all text-center"
              >
                <p className="text-white font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-to-r from-violet-600/20 to-blue-600/20 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {metric.number}
                </div>
                <p className="text-gray-300 font-semibold">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="recursos" className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-semibold tracking-widest mb-4">SERVICOS PARA IMPULSIONAR SEU NEGOCIO</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Da estrategia a execucao,
              <br />
              entregamos <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">transformacao real.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/30 hover:border-violet-500/50 transition-all"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-24 border-b border-gray-800 bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-semibold tracking-widest mb-4">DEVELOPERS</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Construimos para developers.
              <br />
              Com tools, libs e bibliotecas.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Acesse a nossa documentacao, APIs e SDKs. Construa, integre e crie o futuro conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FileText size={24} />, label: 'Documentacao' },
              { icon: <Code size={24} />, label: 'API Reference' },
              { icon: <Smartphone size={24} />, label: 'SDKs' },
              { icon: <Github size={24} />, label: 'GitHub' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-gray-700 bg-gray-900/30 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all text-center cursor-pointer"
              >
                <div className="text-violet-400 mb-3 flex justify-center">{item.icon}</div>
                <p className="text-white font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-violet-600/30 to-blue-600/30 border border-violet-500/30 rounded-xl p-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Vamos construir o
              <br />
              proximo projeto de sucesso.
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Fale conosco sobre suas necessidades, desafios e visao. Juntos, transformamos ideias em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setContactDialogOpen(true)}
                className="bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-700 hover:to-blue-700 text-base px-8 py-6"
              >
                Agendar Reuniao
              </Button>
              <Button
                variant="outline"
                className="border-violet-500/50 text-white hover:bg-violet-500/10 text-base px-8 py-6"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold mb-4">NAVEGACAO</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#ecossistema" className="hover:text-white transition-colors">Ecossistema</a></li>
                <li><a href="#tecnologias" className="hover:text-white transition-colors">Tecnologias</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">SERVICOS</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Consultoria</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desenvolvimento</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IA & Automacao</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">RECURSOS</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentacao</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Eventos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">CONTATO</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:atlas@global.digital" className="hover:text-white transition-colors">atlas@global.digital</a></li>
                <li><a href="tel:+5511999000000" className="hover:text-white transition-colors">+55 11 9 9900-0000</a></li>
                <li className="pt-2">Sao Paulo, Brasil</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">REDES SOCIAIS</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <span>© 2024 Atlas Global. Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
