import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Award, Mail } from 'lucide-react';
import { toast } from 'sonner';

import { InstagramColorIcon } from '@/components/InstagramColorIcon';


const GoogleMapsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" style={{ color: '#EA4335' }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5 2.5z" />
  </svg>
);

const contactInfo = [
  {
    icon: Phone,
    title: 'WhatsApp',
    content: '(11) 96921-6106',
    href: 'https://wa.me/5511969216106',
    isExternal: true,
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'strackcustom@gmail.com',
    href: 'mailto:strackcustom@gmail.com',
    isExternal: true,
  },
  {
    icon: InstagramColorIcon,
    title: 'Instagram',
    content: '@strackcustom',
    href: 'https://instagram.com/strackcustom',
    isExternal: true,
  },
  {
    icon: MapPin,
    title: 'Endereço',
    content: (
      <span className="flex items-center gap-1.5">
        Av. Pompéia, 1850
        <GoogleMapsIcon />
      </span>
    ),
    href: 'https://maps.app.goo.gl/tE7tqtusPvypHif76',
    isExternal: true,
  },
  {
    icon: Clock,
    title: 'Horário',
    content: 'Seg-Sex: 8h às 18h | Sáb: 8h às 13h',
    href: null,
    isExternal: false,
  },
];



export function ContactSection() {
  const handleCopyEmail = (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    toast.success('Email copiado para a área de transferência!');
  };

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            ENTRE EM <span className="text-white">CONTATO</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Agende sua visita e transforme seu veículo com a qualidade.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* 3M Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold shadow-lg shadow-red-600/20">
                <Award className="w-4 h-4" />
                APLICADOR AUTORIZADO 3M
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              Informações de Contato
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-10 max-w-2xl">
              Estamos prontos para atender você e tirar todas as suas dúvidas. Entre em contato pelos canais abaixo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      onClick={(e) => {
                        if (item.title === 'Email') {
                          handleCopyEmail(e, 'strackcustom@gmail.com');
                        }
                      }}
                      className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:bg-card/80 transition-all group h-full hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-muted-foreground mb-1">{item.title}</p>
                        <p className="text-sm font-semibold group-hover:text-accent transition-colors">
                          {item.content}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border h-full">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-muted-foreground mb-1">{item.title}</p>
                        <p className="text-sm font-semibold">{item.content}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
