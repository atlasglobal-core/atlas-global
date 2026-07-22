# Atlas Global Homepage - Implementation Plan

## Official Specifications
- **Visual Reference:** Maquete_AtlasGlobal.png (located at /home/ubuntu/atlas-global/upload/)
- **Structure Reference:** Official prompt v1.1
- **Repository:** https://github.com/atlasglobal-core/atlas-global
- **Branch:** feat/official-homepage-v1
- **Domain:** https://atlasglobal.digital

## Key Visual Elements from Maquete_AtlasGlobal.png

### Design System
- **Background:** Dark navy (#020611)
- **Primary Gradient:** Violet to Blue (#8B5CF6 to #3B82F6)
- **Accent Colors:**
  - Blue: #3B82F6
  - Violet: #8B5CF6
  - Purple: #7C3AED
  - Cyan: #38BDF8
  - Magenta: #EC4899
  - Green: #10B981
  - Orange: #F97316

### Sections to Implement

1. **Navbar**
   - Logo + "ATLAS GLOBAL" + "Research • Architecture • Platforms"
   - Nav items: Início, Ecossistema, Serviços, Tecnologias, Sobre Nós, Recursos
   - CTA: "Falar com a Atlas"
   - Language selector (PT)
   - Sticky/transparent → dark on scroll

2. **Hero Section** (#inicio)
   - Eyebrow: "RESEARCH • ARCHITECTURE • PLATFORMS"
   - Headline: "Construímos o futuro com pesquisa, arquitetura e plataformas inteligentes."
   - Supporting text: "A Atlas Global combina tecnologia, inteligência artificial e expertise internacional..."
   - CTAs: "Explorar o Ecossistema" (primary), "Falar com a Atlas" (secondary)
   - Globe animation on right side

3. **Technology Trust Strip**
   - Label: "TECNOLOGIA, CONFIANÇA E INOVAÇÃO"
   - Logos: AWS, Supabase, Next.js, Docker, OpenAI, Stripe, Cloudflare

4. **Ecosystem Section** (#ecossistema)
   - Eyebrow: "O ECOSSISTEMA ATLAS"
   - Heading: "Um ecossistema completo para criar, operar e escalar o futuro."
   - 9 Cards (4 columns desktop, 2 rows):
     1. Atlas Core - "Força, elasticidade, segurança..."
     2. Atlas Platform - "Plataforma modular..."
     3. Atlas Advisory - "Consultoria estratégica..."
     4. Atlas Intelligence - "Soluções de IA..."
     5. Atlas Financial - "Infraestrutura tecnológica..."
     6. Atlas Cloud - "Arquitetura cloud..."
     7. Atlas Labs - "Investigação e inovação..."
     8. Atlas Research - "Estudos, whitepapers..."
     9. Atlas Network - "Projetos independentes..."

5. **Services Section**
   - Heading: "Da estratégia à execução, entregamos transformação real."
   - 6 Service Cards with icons:
     - Arquitetura de Negócios
     - Expansão Internacional
     - Enterprise AI
     - Pagamentos & Fintech
     - Engenharia de Software
     - Cloud & DevOps

6. **Stats Section**
   - 650 Projetos Entregues
   - 15+ Países Atendidos
   - 100+ Clientes e Parceiros
   - 1M+ Linhas de Código

7. **Why Atlas Section** (#sobre)
   - Eyebrow: "PORQUÊ ATLAS?"
   - Heading: "Unimos estratégia, tecnologia e execução para criar impacto real."
   - 4 Propositions:
     - Visão Estratégica
     - Arquitetura Inteligente
     - Tecnologia Avançada
     - Execução de Excelência

8. **AI Native Section**
   - Heading: "IA no centro de tudo o que construímos."
   - Central AI diagram with connections:
     - Agentes Inteligentes
     - LLMs Integrados
     - Automação
     - RAG & Knowledge
     - Análise Preditiva
     - IA para Negócios

9. **Developers Section**
   - Heading: "Construímos para developers. Com tools, libs e biblioteca."
   - 4 Resource Cards:
     - Documentação
     - API Reference
     - SDKs
     - GitHub

10. **Technology Stack Section** (#tecnologias)
    - Eyebrow: "TECNOLOGIAS QUE UTILIZAMOS"
    - Heading: "Ferramentas modernas para soluções de próxima geração."
    - 8 Primary Badges: TypeScript, Next.js, React, Node.js, PostgreSQL, Docker, Kubernetes, AI/LLMs
    - Dialog with grouped technologies

11. **Final CTA Section** (#contacto)
    - Gradient background (blue-violet)
    - Heading: "Vamos construir o próximo projeto de sucesso."
    - Supporting text: "Fale com a Atlas e descubra como podemos transformar..."
    - 2 Action Cards:
      - "Agendar Reunião" (calendar icon)
      - "Falar no WhatsApp" (whatsapp icon)

12. **Contact Dialog**
    - Fields: Nome, Email, Empresa, País, Área de Interesse, Descrição, Canal Preferido, Consentimento
    - Validation: React Hook Form + Zod
    - Honeypot protection

13. **Footer** (#recursos)
    - Brand block + description
    - Navigation column
    - Resources column
    - Contacts: hello@atlasglobal.digital, +351 910 000 000
    - Social: GitHub (confirmed), LinkedIn, X, YouTube (if configured)
    - Legal links
    - Copyright: © 2026 Atlas Global

## Implementation Status

### Completed
- [x] Repository cloned
- [x] Branch feat/official-homepage-v1 created
- [x] Dependencies installed
- [x] Design system tokens in place
- [x] Page.tsx structure correct

### In Progress
- [ ] Navbar refinement
- [ ] Hero section with globe
- [ ] Technology trust strip
- [ ] Ecosystem section (9 cards)
- [ ] Services section
- [ ] Stats section
- [ ] Why Atlas section
- [ ] AI Native section
- [ ] Developers section
- [ ] Technology stack section
- [ ] Final CTA section
- [ ] Contact dialog
- [ ] Footer
- [ ] i18n setup (pt-PT, en, es)
- [ ] SEO/metadata
- [ ] Responsiveness testing
- [ ] Performance testing
- [ ] Commit and push
- [ ] PR creation

## Environment Variables
```
NEXT_PUBLIC_ATLAS_BOOKING_URL=
NEXT_PUBLIC_ATLAS_WHATSAPP_URL=
NEXT_PUBLIC_ATLAS_CONTACT_EMAIL=hello@atlasglobal.digital
```

## Git Workflow
1. Working branch: feat/official-homepage-v1
2. Commit message: `feat(web): implement official Atlas Global homepage v1`
3. Push to origin
4. Create PR to main (when supported)

## Performance Targets
- Lighthouse Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
