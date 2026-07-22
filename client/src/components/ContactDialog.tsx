import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    onOpenChange(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-contact-dialog className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-white">Falar com a Atlas</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Nome</label>
            <Input
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background border-border text-white placeholder:text-gray-600"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Email</label>
            <Input
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background border-border text-white placeholder:text-gray-600"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Empresa</label>
            <Input
              type="text"
              placeholder="Sua empresa"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-background border-border text-white placeholder:text-gray-600"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Mensagem</label>
            <Textarea
              placeholder="Como podemos ajudar?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-background border-border text-white placeholder:text-gray-600 resize-none"
              rows={4}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-700 hover:to-blue-700"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
