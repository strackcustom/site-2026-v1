import { motion } from 'framer-motion';
import { Shield, Lock, Sun, Music, Settings, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Lock,
    title: 'Película Antivandalismo 3M',
    description: 'Segurança premium contra impactos e vandalismo. Retém estilhaços e dificulta invasões. Aplicador autorizado 3M.',
    features: ['Resistência a Impactos', 'Redução de Calor', '3 Anos de Garantia 3M'],
    highlight: true,
  },
  {
    icon: Sun, // Usando Sol para filme de controle solar
    title: 'Película Automotiva',
    description: 'Tecnologia com excelente custo-benefício. Garante privacidade, conforto térmico e ótima visibilidade sem interferir em sinais de GPS/Rádio.',
    features: ['Bloqueio UV: até 99%', 'Rejeição Solar (TSER): até 45%', '5 Anos de Garantia'],
    highlight: false,
  },
  {
    icon: Shield, // Shield para alta proteção/performance
    title: 'Película Nano Cerâmica',
    description: 'Máxima performance em redução de calor e nitidez. Tecnologia Nano Cerâmica que não desbota e oferece conforto térmico superior e excelente visibilidade.',
    features: ['Rejeição IR: até 96%', 'Rejeição Solar: até 66%', '10 Anos de Garantia'],
    highlight: false,
  },
  {
    icon: Shield,
    title: 'PPF (Paint Protection Film)',
    description: 'Proteção invisível para a pintura contra riscos, pedras e chuva ácida. Mantém o valor do veículo com tecnologia auto regenerativa.',
    features: ['Autocura de Riscos', 'Hidrofobia', '7 Anos de Garantia'],
    highlight: false,
  },
  {
    icon: Music,
    title: 'Multimídia & Conectividade',
    description: 'Centrais multimídia com Apple CarPlay e Android Auto, telas HD e integração com sistemas originais do veículo. Instalação 100% plug and play, sem cortes ou alterações na fiação original do veículo, preservando a garantia de fábrica.',
    features: ['CarPlay/Android Auto', 'Câmera de Ré', 'Acabamento Original'],
    highlight: false,
  },
  {
    icon: Settings,
    title: 'Acessórios Tecnológicos',
    description: 'Soluções avançadas como Streaming Box Faaftech (Netflix/YouTube) e Interface ShiftPower para eliminar delay do acelerador. Soluções com instalação plug and play, sem corte de fios, mantendo a originalidade e a garantia do veículo.',
    features: ['Streaming Box', 'ShiftPower', 'Plug and Play'],
    highlight: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-28 bg-muted/5">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] text-white mb-3 sm:mb-4">
            O QUE FAZEMOS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Soluções completas para proteção e personalização do seu veículo com materiais de alta performance
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.highlight
                ? 'border-accent/50 shadow-lg shadow-accent/5'
                : 'border-border hover:border-accent/30'
                }`}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${service.highlight ? 'bg-accent/20' : 'bg-accent/10 group-hover:bg-accent/20'
                  }`}>
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                variant="ghost"
                className="p-0 h-auto text-accent hover:text-accent/80 hover:bg-transparent font-medium text-sm group/btn"
              >
                <a
                  href={`https://wa.me/5511969216106?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
