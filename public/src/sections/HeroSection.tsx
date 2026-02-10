import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Gem, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="inicio" ref={sectionRef} className="relative min-h-screen flex items-start sm:items-center justify-center overflow-hidden">
      {/* Imagem de Fundo */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div className="hidden sm:block absolute inset-0 bg-cover bg-center bg-no-repeat saturate-[1.8] contrast-[1.1] brightness-[1.2]" style={{ backgroundImage: 'url(/images/hero-car.webp)' }} />
        {/* Mobile Image - Refactored to IMG tag for better object-fit control */}
        <div className="block sm:hidden absolute inset-0 bg-black">
          <img
            src="/images/hero-car.webp"
            alt="BMW M3 Strack Custom"
            className="w-full h-full object-contain object-center saturate-[1.2] contrast-[1.15] brightness-[2.2] scale-[1.35]"
          />
        </div>

        {/* Darker overlay for Silhouette effect - Reduced global opacity on mobile, but added top gradient for text */}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/60 mix-blend-multiply" />
        {/* Mobile Text Protection Gradient - Dark at top, transparent at bottom */}
        <div className="block sm:hidden absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-transparent z-0" />
        {/* Subtle Neon Hint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-purple-500/10 mix-blend-overlay" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        {/* Radial vignette to frame silhouette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_15%,_rgba(0,0,0,0.7)_100%)]" />
      </motion.div>

      {/* Conteúdo */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-20 pt-28 sm:pt-28">
        <div className="max-w-4xl mx-auto text-center">

          {/* Mobile Only: 3M Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex lg:hidden justify-center mb-3 sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-[10px] sm:text-xs font-bold shadow-md border border-white/10">
              <Gem className="w-3 h-3 text-white animate-pulse" />
              APLICADOR AUTORIZADO 3M
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[10px] sm:text-sm md:text-base tracking-[0.3em] text-white font-medium mb-2 sm:mb-6"
          >
            PREMIUM AUTOMOTIVE CARE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6"
          >
            <span className="block text-white">EXCELÊNCIA EM</span>
            <span className="block text-white">
              SOLUÇÕES AUTOMOTIVAS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto mb-8 px-4"
          >
            TRANSFORME O SEU PADRÃO DE PROTEÇÃO
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            {[
              { label: 'Películas Antivandalismo 3M', icon: Shield },
              { label: 'Envelopamento', icon: Gem },
              { label: 'PPF', icon: Shield },
              { label: 'Multimídia', icon: Music },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5 text-xs sm:text-sm text-white">
                <item.icon className="w-3.5 h-3.5 text-white" />
                {item.label}
              </span>
            ))}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-6 text-base w-full sm:w-auto">
              <a href="#servicos" className="flex items-center justify-center gap-2">
                Conheça Nossos Serviços
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#servicos" className="flex flex-col items-center gap-2 text-white hover:text-white/80 transition-colors">
          <span className="text-xs tracking-widest uppercase">Role para baixo</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section >
  );
}
