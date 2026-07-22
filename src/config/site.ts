export const siteConfig = {
  name: "ATLAS GLOBAL",
  tagline: "Research • Architecture • Platforms",
  description:
    "A Atlas Global investiga, arquiteta e desenvolve plataformas digitais inteligentes, combinando inteligência artificial, engenharia de software, cloud e inovação.",
  url: "https://atlasglobal.digital",
  github: "https://github.com/atlasglobal-core/atlas-global",
  email: "hello@atlasglobal.digital",
  locale: "pt-PT",
  bookingUrl: process.env.NEXT_PUBLIC_ATLAS_BOOKING_URL || "",
  whatsappUrl: process.env.NEXT_PUBLIC_ATLAS_WHATSAPP_URL || "",
  socials: {
    github: "https://github.com/atlasglobal-core/atlas-global",
    linkedin: process.env.NEXT_PUBLIC_ATLAS_LINKEDIN_URL || "",
    x: process.env.NEXT_PUBLIC_ATLAS_X_URL || "",
    youtube: process.env.NEXT_PUBLIC_ATLAS_YOUTUBE_URL || "",
  },
} as const;

export type SiteConfig = typeof siteConfig;