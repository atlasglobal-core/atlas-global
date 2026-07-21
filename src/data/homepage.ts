export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#ecossistema" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Recursos", href: "#recursos" },
] as const;

export const heroData = {
  id: "inicio",
  eyebrow: "RESEARCH • ARCHITECTURE • PLATFORMS",
  headline: [
    "Arquitetamos o futuro.",
    "Construímos o que",
    "impulsiona o mundo.",
  ],
  description:
    "A Atlas Global pesquisa, desenha e desenvolve plataformas tecnológicas inteligentes que transformam ideias complexas em soluções digitais escaláveis.",
  primaryCTA: { label: "Explorar Ecossistema", href: "#ecossistema" },
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
    title: "Atlas Platform",
    description:
      "Plataforma modular para criar, gerir e escalar soluções digitais inteligentes.",
    accent: "blue" as const,
    icon: "Layers",
  },
  {
    title: "Atlas Advisory",
    description:
      "Consultoria estratégica para negócios internacionais, finanças, operações e tecnologia.",
    accent: "violet" as const,
    icon: "Compass",
  },
  {
    title: "Atlas Intelligence",
    description:
      "Soluções de IA, agentes inteligentes e sistemas de conhecimento avançados.",
    accent: "green" as const,
    icon: "Brain",
  },
  {
    title: "Atlas Financial",
    description:
      "Infraestrutura tecnológica para pagamentos, blockchain e soluções financeiras digitais.",
    accent: "orange" as const,
    icon: "Wallet",
  },
  {
    title: "Atlas Cloud",
    description:
      "Arquitetura cloud, DevOps, segurança e infraestrutura escalável.",
    accent: "cyan" as const,
    icon: "Cloud",
  },
  {
    title: "Atlas Labs",
    description:
      "Investigação, prototipagem e inovação para criar as tecnologias de amanhã.",
    accent: "purple" as const,
    icon: "FlaskConical",
  },
  {
    title: "Atlas Research",
    description:
      "Estudos, whitepapers e investigação aplicada em tecnologia.",
    accent: "magenta" as const,
    icon: "BookOpen",
  },
  {
    title: "Atlas Network",
    description:
      "Projetos independentes e colaborações que fazem parte da rede Atlas.",
    accent: "pink" as const,
    icon: "Network",
  },
] as const;

export const whyAtlasData = {
  id: "sobre",
  eyebrow: "PORQUÊ ATLAS?",
  headline: [
    "Unimos estratégia,",
    "tecnologia e execução",
    "para criar impacto real.",
  ],
  propositions: [
    {
      title: "Visão Estratégica",
      description: "Entendemos o negócio para desenhar soluções que geram valor.",
      icon: "Target",
    },
    {
      title: "Arquitetura Inteligente",
      description:
        "Projetamos plataformas escaláveis, seguras e preparadas para o futuro.",
      icon: "Box",
    },
    {
      title: "Tecnologia Avançada",
      description:
        "Aplicamos IA, Cloud, Dados e Blockchain para resolver problemas complexos.",
      icon: "Code",
    },
    {
      title: "Execução de Excelência",
      description:
        "Transformamos estratégia em produtos digitais de alta performance.",
      icon: "Rocket",
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
    "Fale com a Atlas e descubra como podemos transformar a sua ideia numa plataforma digital de impacto.",
  meetingCard: {
    title: "Agendar Reunião",
    description: "Marque uma conversa estratégica com a nossa equipa.",
    icon: "Calendar",
    action: "booking" as const,
  },
  whatsappCard: {
    title: "Falar no WhatsApp",
    description: "Fale connosco através do seu canal preferido.",
    icon: "MessageCircle",
    action: "whatsapp" as const,
  },
} as const;

export const footerData = {
  id: "recursos",
  description:
    "A Atlas Global é uma empresa de Research, Architecture & Platforms. Criamos soluções digitais inteligentes que impulsionam organizações e transformam o futuro.",
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Soluções", href: "#ecossistema" },
    { label: "Ecossistema", href: "#ecossistema" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Recursos", href: "#recursos" },
  ],
  resources: [
    { label: "Ecossistema", href: "#ecossistema" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "GitHub", href: "https://github.com/atlasglobal-core/atlas-global" },
    { label: "Falar com a Atlas", href: "#", action: "contact" as const },
  ],
  copyright: "© 2026 Atlas Global. Todos os direitos reservados.",
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