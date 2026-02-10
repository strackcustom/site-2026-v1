import { useState, useEffect } from 'react';
import { Menu, Phone, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <nav className="flex items-center justify-between">
          {/* STC Logo */}
          <a href="#inicio" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 text-2xl font-black tracking-tighter text-foreground hover:text-accent transition-colors z-50">
            <img src="/images/logo STC.webp" alt="STC" className="h-10 sm:h-12 w-auto object-contain" />
          </a>


          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-sm font-bold text-white uppercase tracking-wider hover:text-accent transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold shadow-md">
              <Gem className="w-3 h-3 text-white animate-pulse" />
              APLICADOR AUTORIZADO 3M
            </span>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background border-border">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center py-6 border-b border-border">
                  <img src="/images/logo STC.webp" alt="STC" className="h-16 w-auto object-contain" />
                </div>
                <nav className="flex flex-col gap-4 py-8">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2 text-center">
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    <a href="https://wa.me/5511969216106" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Agende Agora
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
