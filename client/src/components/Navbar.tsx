import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Soluções', href: '#ecossistema' },
    { label: 'Ecossistema', href: '#ecossistema' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Recursos', href: '#recursos' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-bold text-sm">ATLAS GLOBAL</span>
              <span className="text-xs text-gray-400">Research • Architecture • Platforms</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex text-white border-violet-500/50 hover:bg-violet-500/10"
              onClick={() => {
                const dialog = document.querySelector('[data-contact-dialog]') as HTMLElement;
                if (dialog) dialog.click();
              }}
            >
              Falar com a Atlas
            </Button>

            {/* Language Selector */}
            <select className="hidden sm:block bg-transparent text-sm text-gray-300 border border-gray-600 rounded px-2 py-1 hover:border-gray-400 transition-colors">
              <option value="pt">PT</option>
              <option value="en">EN</option>
            </select>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DialogContent className="fixed inset-0 top-[72px] h-[calc(100vh-72px)] w-full rounded-none border-0 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col gap-6 pt-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-lg text-gray-300 hover:text-white transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white mt-4"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const dialog = document.querySelector('[data-contact-dialog]') as HTMLElement;
                if (dialog) dialog.click();
              }}
            >
              Falar com a Atlas
            </Button>
          </nav>
        </DialogContent>
      </Dialog>
    </>
  );
}
