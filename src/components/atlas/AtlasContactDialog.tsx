"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useContactStore } from "@/lib/contact-store";
import { contactFormOptions } from "@/data/homepage";
import { contactService } from "@/services/contact.service";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { AtlasButton } from "./AtlasButton";

const contactFormSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  empresa: z.string().optional(),
  pais: z.string().optional(),
  areaInteresse: z.string().min(1, "Selecione uma área de interesse"),
  descricao: z.string().min(10, "Descreva o seu projeto (mín. 10 caracteres)"),
  canalPreferido: z.string().min(1, "Selecione um canal"),
  consentimento: z.boolean().refine((v) => v === true, {
    message: "Deve aceitar o consentimento de contacto",
  }),
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function AtlasContactDialog() {
  const { open, closeDialog } = useContactStore();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      pais: "",
      areaInteresse: "",
      descricao: "",
      canalPreferido: "",
      consentimento: false,
      website: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setSubmitStatus("loading");
    try {
      const result = await contactService.submit({
        nome: data.nome,
        email: data.email,
        empresa: data.empresa || undefined,
        pais: data.pais || undefined,
        areaInteresse: data.areaInteresse,
        descricao: data.descricao,
        canalPreferido: data.canalPreferido,
        consentimento: data.consentimento,
        honeypot: data.website,
      });

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);
        form.reset();
      } else {
        setSubmitStatus("error");
        setSubmitMessage(result.error);
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Ocorreu um erro inesperado. Tente novamente.");
    }
  }

  function handleClose() {
    closeDialog();
    setTimeout(() => {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }, 300);
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-[rgba(148,163,184,0.14)] bg-[#0B1426] text-[#F8FAFC] sm:max-w-xl atlas-scrollbar">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#F8FAFC]">
            Falar com a Atlas
          </DialogTitle>
          <DialogDescription className="text-[#7F8BA3]">
            Conte-nos sobre o seu projeto. Entraremos em contacto em até 24 horas.
          </DialogDescription>
        </DialogHeader>

        {submitStatus === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-[#22C55E]/20">
              <svg className="size-7 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-[#F8FAFC]">Mensagem enviada!</p>
            <p className="max-w-sm text-sm text-[#A8B1C2]">{submitMessage}</p>
            <AtlasButton variant="secondary" onClick={handleClose}>
              Fechar
            </AtlasButton>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
              {/* Honeypot */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <Input
                  id="contact-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  {...form.register("website")}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#A8B1C2]">Nome *</FormLabel>
                      <FormControl>
                        <Input placeholder="O seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#A8B1C2]">Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@exemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="empresa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#A8B1C2]">Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pais"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#A8B1C2]">País</FormLabel>
                      <FormControl>
                        <Input placeholder="País" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="areaInteresse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#A8B1C2]">Área de interesse *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full border-[rgba(148,163,184,0.14)] bg-[#020611] text-[#A8B1C2]">
                          <SelectValue placeholder="Selecione uma área" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border-[rgba(148,163,184,0.14)] bg-[#0B1426]">
                        {contactFormOptions.interests.map((interest) => (
                          <SelectItem
                            key={interest}
                            value={interest}
                            className="text-[#A8B1C2] focus:bg-[#101A2E] focus:text-[#F8FAFC]"
                          >
                            {interest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#A8B1C2]">
                      Descrição do projeto *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva o seu projeto, objetivos e desafios..."
                        className="min-h-[100px] border-[rgba(148,163,184,0.14)] bg-[#020611] text-[#A8B1C2]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="canalPreferido"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#A8B1C2]">Canal preferido *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full border-[rgba(148,163,184,0.14)] bg-[#020611] text-[#A8B1C2]">
                          <SelectValue placeholder="Selecione um canal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border-[rgba(148,163,184,0.14)] bg-[#0B1426]">
                        {contactFormOptions.channels.map((channel) => (
                          <SelectItem
                            key={channel}
                            value={channel}
                            className="text-[#A8B1C2] focus:bg-[#101A2E] focus:text-[#F8FAFC]"
                          >
                            {channel}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consentimento"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start gap-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-0.5 border-[rgba(148,163,184,0.3)]"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal text-[#A8B1C2]">
                        Autorizo a Atlas Global a entrar em contacto comigo relativamente
                        a este pedido. *
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {submitStatus === "error" && (
                <p className="text-sm text-[#EF4444]" role="alert">
                  {submitMessage}
                </p>
              )}

              <AtlasButton
                type="submit"
                variant="primary"
                disabled={submitStatus === "loading"}
                icon={
                  submitStatus === "loading" ? (
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  ) : undefined
                }
                className="w-full justify-center"
              >
                {submitStatus === "loading" ? "A enviar..." : "Enviar mensagem"}
              </AtlasButton>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}