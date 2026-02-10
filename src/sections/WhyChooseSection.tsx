import { motion } from 'framer-motion';
import { Award, Clock, Users, Heart } from 'lucide-react';

const differentials = [
  {
    icon: Award,
    title: 'Materiais Premium',
    description: 'Trabalhamos apenas com as marcas líderes, como 3M, Across, NAR PPF, Faaftech, Pioneer, JBL e Hertz, garantindo qualidade, desempenho e durabilidade',
  },
  {
    icon: Clock,
    title: 'Garantia Real',
    description: 'Garantia de até 7 anos em nossos serviços de PPF e até 10 anos nos serviços de Película',
  },
  {
    icon: Users,
    title: 'Profissionais Certificados',
    description: 'Equipe treinada e certificada pelas principais marcas',
  },
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    description: 'Cada projeto é único e tratado com dedicação exclusiva',
  },
];

export function WhyChooseSection() {
  return (
    <section id="diferenciais" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] text-accent mb-3 sm:mb-4">
            Nossos Diferenciais
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            POR QUE ESCOLHER A
            <span className="text-accent"> STRACK CUSTOM</span>?
          </h2>
        </motion.div>

        {/* Differentials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-20"
        >
          {differentials.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
