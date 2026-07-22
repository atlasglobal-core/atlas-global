import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().min(2, "O nome é obrigatório."),
  email: z.string().email("Email inválido."),
  empresa: z.string().optional(),
  pais: z.string().optional(),
  areaInteresse: z.string().min(1, "Selecione uma área de interesse."),
  descricao: z.string().min(10, "Descreva o seu projeto (mín. 10 caracteres)."),
  canalPreferido: z.string().min(1, "Selecione um canal de contacto."),
  consentimento: z.literal(true, {
    message: "Deve aceitar o consentimento de contacto.",
  }),
  honeypot: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check — silently accept
    if (body.honeypot) {
      return NextResponse.json({
        success: true,
        message: "Mensagem enviada com sucesso.",
      });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    // In production, this would send to a configured endpoint/webhook.
    // For phase 1, we return success and the client falls back to mailto.
    // Future Atlas Core integration replaces this handler.

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso. Entraremos em contacto em breve.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}