# ATLAS GLOBAL - Design Strategy

## Official Visual Specification
**Reference**: Maquete_Atlasglobal.png (approved design)

The design is institutional-led, technology-driven, and conversion-enabled. It features a sophisticated dark-mode aesthetic with violet-to-blue gradients, representing global digital infrastructure and technological advancement.

---

## Design Philosophy: Tech-Forward Institutional

**Design Movement**: Contemporary Institutional Tech (minimalist + technological sophistication)

**Core Principles**:
1. **Dark Sophistication**: Deep navy/black backgrounds with violet and blue accents create premium, tech-forward perception
2. **Gradient Hierarchy**: Violet-to-blue gradients mark primary CTAs and key messaging, creating visual flow
3. **Institutional Density**: Compact spacing, clear hierarchy, and purposeful whitespace communicate professionalism
4. **Connected Networks**: Globe and connected elements symbolize global reach and digital infrastructure

**Color Philosophy**:
- **Primary Background**: Deep navy/black (`#0a0e27` or similar) - establishes premium, tech-native aesthetic
- **Accent Gradient**: Violet → Blue (`#9d4edd` → `#3a86ff`) - marks primary actions and key messaging
- **Secondary Accents**: Cyan/light blue for secondary elements and borders
- **Text Hierarchy**: White/near-white for primary text, muted grays for secondary content

**Layout Paradigm**:
- Asymmetric hero with 45% content (left) + 55% globe visualization (right)
- Centered container with generous horizontal margins
- Compact vertical rhythm with clear section separation via subtle borders
- Card-based ecosystem section with 5 cards (top row) + 4 cards (bottom row)

**Signature Elements**:
1. **Connected Globe**: Central visual metaphor - represents global reach, digital networks, and technological infrastructure
2. **Gradient Accents**: Violet-blue gradients on CTAs, headlines, and key messaging
3. **Geometric Borders**: Subtle borders separating sections, creating institutional structure

**Interaction Philosophy**:
- Smooth scroll navigation between sections
- Hover effects on cards and CTAs with subtle scale/glow transitions
- Contact dialog modal for "Falar com a Atlas" CTA
- Mobile menu with smooth slide-in animation

**Animation Guidelines**:
- Scroll-triggered section reveals with fade-in + slight upward motion (300-400ms)
- Card hover: subtle scale (1.02) + shadow enhancement (150ms ease-out)
- CTA buttons: scale on active (0.97) + glow effect on hover
- Globe: subtle rotation/pulse animation to suggest activity
- All animations respect `prefers-reduced-motion`

**Typography System**:
- **Display Font**: Bold, geometric sans-serif for headlines (e.g., Poppins Bold, Space Mono)
- **Body Font**: Clean, readable sans-serif (e.g., Inter, Roboto)
- **Hierarchy**: 
  - H1: 48-56px, bold, white
  - H2: 32-40px, bold, gradient or white
  - H3: 24-28px, medium, white
  - Body: 16px, regular, gray-300
  - Caption: 14px, regular, gray-500

**Brand Essence**:
*Research, architecture, and platforms that power the future of technology.*

**Personality**: Authoritative, innovative, trustworthy, forward-thinking

**Brand Voice**:
- Headlines are bold and action-oriented: "Construímos o futuro" (We build the future)
- CTAs are clear and direct: "Explorar Ecossistema" (Explore Ecosystem)
- Microcopy is professional and benefit-focused: "A Atlas Global pesquisa, desenha e desenvolve plataformas tecnológicas inteligentes..."
- Avoid generic filler; every word serves the institutional positioning

**Logo & Mark**:
- Symbol: Geometric "A" mark (Atlas symbol) - bold, modern, scalable
- Wordmark: "ATLAS GLOBAL" in bold sans-serif
- Subtitle: "Research • Architecture • Platforms"
- Favicon: Simplified symbol version

**Signature Brand Color**: Violet-Blue Gradient (`#9d4edd` → `#3a86ff`)

---

## Section Structure

1. **Navbar**: Sticky, transparent → dark on scroll
2. **Hero**: Eyebrow + headline (gradient) + supporting text + CTAs + globe visualization
3. **Technology Trust Strip**: Logo grid of trusted technologies
4. **Ecosystem Section**: 9 cards (5+4 layout) showcasing Atlas offerings
5. **Why Atlas Section**: 4 key principles with icons
6. **AI Native Section**: Centered AI visualization with surrounding elements
7. **Technology Stack Section**: Grid of technology logos
8. **Metrics Section**: 3 key metrics (projects, platforms, lines of code)
9. **Services Section**: 6 service cards with icons
10. **Developers Section**: Documentation, APIs, SDKs, GitHub links
11. **Final CTA**: Large gradient button + WhatsApp link
12. **Footer**: Navigation, services, resources, contact info, social links

---

## Implementation Notes

- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 1024px, 1280px
- **Performance**: Optimize globe visualization (SVG or lightweight WebGL)
- **Accessibility**: WCAG 2.1 AA compliance, proper color contrast, keyboard navigation
- **SEO**: Proper meta tags, structured data, semantic HTML
- **Multilingual Ready**: Structure supports Portuguese/English switching via language selector
