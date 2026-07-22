export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Serviços", href: "#servicos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Developers", href: "#developers" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Recursos", href: "#recursos" },
] as const;

export const heroData = {
  id: "inicio",
  eyebrow: "RESEARCH • ARCHITECTURE • PLATFORMS",
  headline: [
    "Construímos o futuro com",
    "pesquisa, arquitetura e",
    "plataformas inteligentes.",
  ],
  headlineGradientStart: 1,
  headlineGradientEnd: 2,
  description:
    "A Atlas Global combina tecnologia, inteligência artificial e experiência internacional para transformar ideias complexas em soluções digitais escaláveis e de alto impacto.",
  primaryCTA: { label: "Explorar o Ecossistema", href: "#ecossistema" },
  secondaryCTA: { label: "Falar com a Atlas", action: "contact" as const },
} as const;

export const trustTechnologies = [
  { name: "AWS", label: "Amazon Web Services" },
  { name: "Supabase", label: "Supabase" },
  { name: "Next.js", label: "Next.js" },
  { name: "Docker", label: "Docker" },
  { name: "OpenAI", label: "OpenAI" },
  { name: "Stripe", label: "Stripe" },
  { name: "Cloudflare", label: "Cloudflare" },
] as const;

export type EcosystemAccent =
  | "blue"
  | "violet"
  | "green"
  | "orange"
  | "cyan"
  | "purple"
  | "magenta"
  | "pink";

export const ecosystemCards = [
  {
    title: "Atlas Core",
    description:
      "Fundação tecnológica que entrega infraestrutura, segurança, dados e análises compartilhadas para todo o ecossistema.",
    accent: "blue" as const,
    icon: "Shield",
  },
  {
    title: "Atlas Platform",
    description:
      "Plataforma modular para operar diferentes ecossistemas, de negócios e setores (Operating Systems).",
    accent: "blue" as const,
    icon: "Layers",
  },
  {
    title: "Atlas Advisory",
    description:
      "Consultoria estratégica para negócios, internacionalização, pagamentos, regulatória e arquitetura empresarial.",
    accent: "violet" as const,
    icon: "Compass",
  },
  {
    title: "Atlas Intelligence",
    description:
      "Soluções de IA, agentes inteligentes, automação, RAG e sistemas de conhecimento avançado.",
    accent: "purple" as const,
    icon: "Brain",
  },
  {
    title: "Atlas Financial",
    description:
      "Soluções financeiras digitais, pagamentos, crypto, carteiras, liquidez internacional e infraestrutura financeira.",
    accent: "magenta" as const,
    icon: "Wallet",
  },
  {
    title: "Atlas Cloud",
    description:
      "Infraestrutura cloud moderna, DevOps, segurança, observabilidade e escalabilidade para aplicações e plataformas.",
    accent: "cyan" as const,
    icon: "Cloud",
  },
  {
    title: "Atlas Labs",
    description:
      "Pesquisa, prototipagem e inovação contínua em IA, blockchain, automação e novas tecnologias.",
    accent: "violet" as const,
    icon: "FlaskConical",
  },
  {
    title: "Atlas Research",
    description:
      "Centro de investigação aplicada, publicações, estudos e arquitetura de soluções empresariais.",
    accent: "magenta" as const,
    icon: "BookOpen",
  },
  {
    title: "Atlas Network",
    description:
      "Parceiros, produtos e parceiros que fazem parte da rede Atlas pelo mundo.",
    accent: "purple" as const,
    icon: "Network",
  },
] as const;

export const servicesData = {
  id: "servicos",
  eyebrow: "SERVIÇOS PARA IMPULSIONAR O SEU NEGÓCIO",
  headline: [
    "Da estratégia à execução,",
    "entregamos",
    "transformação real.",
  ],
  headlineGradientStart: 2,
  headlineGradientEnd: 2,
  cta: { label: "Ver todos os serviços", href: "#servicos" },
  items: [
    {
      title: "Arquitetura de Negócios",
      description:
        "Desenhamos modelos de negócios, estratégias e estruturas para o futuro.",
      icon: "Store",
      accent: "#EC4899",
    },
    {
      title: "Expansão Internacional",
      description:
        "Abrimos mercados e entramos em novos mercados com segurança e conformidade.",
      icon: "Globe",
      accent: "#3B82F6",
    },
    {
      title: "Enterprise AI",
      description:
        "Implementamos IA nas empresas para aumentar eficiência, reduzir custos e gerar vantagem.",
      icon: "Cpu",
      accent: "#8B5CF6",
    },
    {
      title: "Pagamentos & Fintech",
      description:
        "Integração de meios de pagamento, PIX, crypto e infraestrutura financeira robusta.",
      icon: "CreditCard",
      accent: "#EC4899",
    },
    {
      title: "Engenharia de Software",
      description:
        "Desenvolvimento de plataformas, software e APIs com qualidade, performance e segurança.",
      icon: "Code",
      accent: "#22C55E",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Ambientes modernos, seguros e escaláveis para hospedar o crescimento do seu negócio.",
      icon: "CloudCog",
      accent: "#3B82F6",
    },
  ],
} as const;

export const statsData = {
  id: "stats",
  eyebrow: "NÚMEROS QUE REFLETEM O NOSSO IMPACTO",
  items: [
    { value: "+50", label: "Projetos Entregues", icon: "Rocket" },
    { value: "15+", label: "Países Atendidos", icon: "Globe" },
    { value: "100+", label: "Clientes e Parceiros", icon: "Users" },
    { value: "1M+", label: "Linhas de Código", icon: "Code" },
  ],
} as const;

export const whyAtlasData = {
  id: "sobre",
  eyebrow: "PORQUÊ ATLAS?",
  headline: "Princípios que guiam tudo o que fazemos.",
  propositions: [
    {
      title: "Pesquisa Contínua",
      description:
        "Investigação aplicada para resolver problemas reais e criar impacto.",
      icon: "FlaskConical",
      accent: "#38BDF8",
    },
    {
      title: "Arquitetura Inteligente",
      description:
        "Soluções bem desenhadas, escaláveis, seguras e sustentáveis.",
      icon: "Box",
      accent: "#8B5CF6",
    },
    {
      title: "Execução com Excelência",
      description:
        "Transformamos estratégia em resultados, plataformas em realidade.",
      icon: "Rocket",
      accent: "#A855F7",
    },
    {
      title: "Parcerias de Valor",
      description:
        "Trabalhamos junto com clientes e parceiros para criar resultados concretos.",
      icon: "Puzzle",
      accent: "#8B5CF6",
    },
  ],
} as const;

export const aiNativeData = {
  id: "ia",
  eyebrow: "IA NO CENTRO DE TUDO",
  headline: "IA no centro de tudo que construímos.",
  description:
    "Utilizamos inteligência artificial para criar agentes, automatizar processos, gerar conhecimento e acelerar decisões.",
  cta: { label: "Saber mais sobre IA", href: "#" },
  centerLabel: "AI",
  nodes: [
    { label: "Agentes Inteligentes", icon: "Bot", position: "top-left" },
    { label: "LLMs Integrados", icon: "Brain", position: "top-right" },
    { label: "Análise Preditiva", icon: "BarChart3", position: "right" },
    { label: "IA para Negócios", icon: "Briefcase", position: "bottom-right" },
    { label: "RAG & Knowledge", icon: "BookOpen", position: "bottom-left" },
    { label: "Automação", icon: "Settings", position: "left" },
  ],
} as const;

export const developersData = {
  id: "developers",
  eyebrow: "DEVELOPERS",
  headline: [
    "Construímos para desenvolvedores.",
    "Com tools, APIs e liberdade.",
  ],
  description:
    "Aceda a nossa documentação, API e SDKs. Construa, Integre e crie o futuro connosco.",
  items: [
    {
      title: "Documentação",
      description: "Aceda à documentação dos produtos Atlas.",
      icon: "FileText",
      accent: "#3B82F6",
    },
    {
      title: "API Reference",
      description: "Explore as APIs disponíveis.",
      icon: "Code",
      accent: "#3B82F6",
    },
    {
      title: "SDKs",
      description: "Bibliotecas e ferramentas para integrar facilmente.",
      icon: "Package",
      accent: "#8B5CF6",
    },
    {
      title: "GitHub",
      description: "Código aberto e projetos da comunidade Atlas.",
      icon: "Github",
      accent: "#F8FAFC",
    },
  ],
} as const;

export const techBadges = [
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "data" },
  { name: "Docker", category: "infrastructure" },
  { name: "Kubernetes", category: "infrastructure" },
  { name: "AI / LLMs", category: "ai" },
] as const;

export const allTechnologies = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Fastify", "Prisma"],
  Data: ["PostgreSQL", "Supabase", "Storage"],
  Infraestrutura: ["Docker", "Kubernetes", "Ubuntu", "Nginx", "Cloudflare", "Vercel"],
  "Inteligência Artificial": ["LLMs", "RAG", "AI Agents", "Prompt Engineering"],
} as const;

export const ctaData = {
  id: "contacto",
  headline: ["Vamos construir o", "próximo projeto de sucesso."],
  description:
    "Fale com os nossos especialistas e descubra como podemos ajudar a transformar a sua visão em realidade.",
  meetingCard: {
    title: "Agendar Reunião",
    description: "Marque uma conversa estratégica com a nossa equipa.",
    icon: "Calendar",
    action: "booking" as const,
  },
  whatsappCard: {
    title: "Falar no WhatsApp",
    description: "Fale connosco agora pelo WhatsApp.",
    icon: "MessageCircle",
    action: "whatsapp" as const,
  },
} as const;

export const footerData = {
  id: "recursos",
  description:
    "A Atlas Global é uma empresa de Research, Architecture & Platforms. Combinamos tecnologia digital e inteligência artificial para construir negócios e transformar o futuro.",
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Ecossistema", href: "#ecossistema" },
    { label: "Serviços", href: "#servicos" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Developers", href: "#developers" },
    { label: "Recursos", href: "#recursos" },
  ],
  services: [
    { label: "Advisory", href: "#ecossistema" },
    { label: "Enterprise AI", href: "#servicos" },
    { label: "Fintech", href: "#servicos" },
    { label: "Cloud", href: "#servicos" },
    { label: "Platform", href: "#ecossistema" },
    { label: "Internacionalização", href: "#servicos" },
  ],
  resources: [
    { label: "Documentação", href: "#developers" },
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Eventos", href: "#" },
    { label: "Carreiras", href: "#" },
  ],
  contacts: {
    email: "hello@atlasglobal.digital",
    phone: "+351 910 000 000",
    address: "Lisboa, Portugal",
    hours: "Seg - Sex: 09:00 - 18:00",
  },
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { label: "X", href: "https://x.com", icon: "X" },
    { label: "GitHub", href: "https://github.com/atlasglobal-core/atlas-global", icon: "Github" },
    { label: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Utilização", href: "#" },
    { label: "Cookies", href: "#" },
  ],
  copyright: "© 2024 Atlas Global. Todos os direitos reservados.",
} as const;

export const contactFormOptions = {
  interests: [
    "Atlas Platform",
    "Atlas Advisory",
    "Atlas Intelligence",
    "Atlas Financial",
    "Atlas Cloud",
    "Atlas Labs",
    "Atlas Research",
    "Partnership",
    "General enquiry",
  ],
  channels: ["Email", "WhatsApp", "Video call", "Telefone"],
} as const;