export interface ContactPayload {
  nome: string;
  email: string;
  empresa?: string;
  pais?: string;
  areaInteresse: string;
  descricao: string;
  canalPreferido: string;
  consentimento: boolean;
  honeypot?: string;
}

type SubmitResult =
  | { success: true; message: string }
  | { success: false; error: string };

export const contactService = {
  async submit(payload: ContactPayload): Promise<SubmitResult> {
    // Honeypot check
    if (payload.honeypot) {
      return { success: true, message: "Mensagem enviada com sucesso." };
    }

    // Server-side submission
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        return {
          success: false,
          error: data.error || "Erro ao enviar mensagem. Tente novamente.",
        };
      }
      return { success: true, message: data.message || "Mensagem enviada com sucesso." };
    } catch {
      // Fallback: mailto link
      const { siteConfig } = await import("@/config/site");
      const subject = encodeURIComponent(
        `[Atlas Global] ${payload.areaInteresse} — ${payload.nome}`
      );
      const body = encodeURIComponent(
        `Nome: ${payload.nome}\nEmail: ${payload.email}${payload.empresa ? `\nEmpresa: ${payload.empresa}` : ""}${payload.pais ? `\nPaís: ${payload.pais}` : ""}\nÁrea de interesse: ${payload.areaInteresse}\nCanal preferido: ${payload.canalPreferido}\n\n${payload.descricao}`
      );
      window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`);
      return {
        success: true,
        message:
          "A abrir o seu cliente de email. Se não abrir, contacte-nos diretamente em hello@atlasglobal.digital",
      };
    }
  },
};
