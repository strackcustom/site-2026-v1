import { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GallerySectionProps {
  onImageClick: (image: string, title: string) => void;
}

const galleryItems = [
  // PELICULA
  {
    src: '/images/pelicula-new-1.jpg',
    title: 'Instalação Profissional',
    category: 'PELÍCULA',
    priority: true,
  },
  {
    src: '/images/pelicula-new-2.jpg',
    title: 'Acabamento Detalhado',
    category: 'PELÍCULA',
    priority: true,
  },
  {
    src: '/images/pelicula-new-3.jpg',
    title: 'Visual Moderno',
    category: 'PELÍCULA',
    priority: true,
  },
  {
    src: '/images/pelicula-new-4.jpg',
    title: 'Proteção Solar',
    category: 'PELÍCULA',
    priority: true,
  },
  {
    src: '/images/pelicula-new-5.jpg',
    title: 'Conforto Térmico',
    category: 'PELÍCULA',
    priority: true,
  },
  {
    src: '/images/pelicula-new-1.jpg',
    title: 'Qualidade Garantida',
    category: 'PELÍCULA',
    priority: false,
  },
  {
    src: '/images/pelicula-new-2.jpg',
    title: 'Aplicação Perfeita',
    category: 'PELÍCULA',
    priority: false,
  },
  {
    src: '/images/pelicula-new-3.jpg',
    title: 'Estilo Único',
    category: 'PELÍCULA',
    priority: false,
  },
  {
    src: '/images/pelicula-new-4.jpg',
    title: 'Privacidade',
    category: 'PELÍCULA',
    priority: false,
  },
  {
    src: '/images/pelicula-new-5.jpg',
    title: 'Redução de Calor',
    category: 'PELÍCULA',
    priority: false,
  },

  // PPF

  {
    src: '/images/gallery-ppf.jpg',
    title: 'Proteção Duradoura',
    category: 'PPF',
    priority: false,
  },
  {
    src: '/images/ppf-new-1.jpg',
    title: 'Aplicação Detalhada',
    category: 'PPF',
    priority: true,
  },
  {
    src: '/images/ppf-new-2.jpg',
    title: 'Proteção Premium',
    category: 'PPF',
    priority: true,
  },

  // ACESSÓRIO
  {
    src: '/images/acessorio-1.jpg',
    title: 'Central Multimídia',
    category: 'ACESSÓRIOS',
    priority: false,
  },
  {
    src: '/images/acessorio-2.jpg',
    title: 'Instalação de Som',
    category: 'ACESSÓRIOS',
    priority: true,
  },
  {
    src: '/images/acessorio-4.jpg',
    title: 'Acabamento Premium',
    category: 'ACESSÓRIOS',
    priority: false,
  },


  // FINALIZADOS
  {
    src: '/images/finalizado-1.jpg',
    title: 'BMW M4 Competition',
    category: 'FINALIZADOS',
    priority: true,
  },
  {
    src: '/images/finalizado-2.jpg',
    title: 'Mercedes C-Class',
    category: 'FINALIZADOS',
    priority: true,
  },
  {
    src: '/images/finalizado-3.jpg',
    title: 'Mercedes C-Class Frontal',
    category: 'FINALIZADOS',
    priority: false,
  },
  {
    src: '/images/finalizado-4.png',
    title: 'Porsche 911',
    category: 'FINALIZADOS',
    priority: true,
  },

  {
    src: '/images/finalizado-3.jpg',
    title: 'Detalhes Frontais',
    category: 'FINALIZADOS',
    priority: false,
  },
  {
    src: '/images/finalizado-4.png',
    title: 'Performance',
    category: 'FINALIZADOS',
    priority: true,
  },
];

const categories = ["PELÍCULA", "PPF", "ACESSÓRIOS", "FINALIZADOS"];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function GallerySection({ onImageClick }: GallerySectionProps) {
  const [activeTab, setActiveTab] = useState("PELÍCULA");

  // Scroll active tab into view when it changes (for mobile)
  const scrollToTab = (value: string) => {
    const tabElement = document.querySelector(`[data-value="${value}"]`);
    if (tabElement) {
      tabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  // Update validation when arrow buttons are clicked
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    scrollToTab(value);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
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
            NOSSOS <span className="text-white">TRABALHOS</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Confira nossos projetos realizados em Películas, PPF e Acessórios.
          </p>
        </motion.div>

        {/* Gallery Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {/* Mobile Prev Arrow */}
            <button
              type="button"
              onClick={() => {
                const currentIndex = categories.indexOf(activeTab);
                const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
                handleTabChange(categories[prevIndex]);
              }}
              className="p-2 rounded-full bg-muted/50 border border-white/5 text-white hover:bg-muted transition-colors sm:hidden"
              aria-label="Categoria anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <TabsList className="bg-muted/50 p-1 rounded-full border border-white/5 flex flex-nowrap overflow-x-auto sm:overflow-visible justify-start sm:justify-center h-auto w-full sm:w-auto scrollbar-hide">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  data-value={category}
                  onClick={() => handleTabChange(category)}
                  className="rounded-full px-4 sm:px-8 py-2 text-xs sm:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 whitespace-nowrap"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Mobile Next Arrow */}
            <button
              type="button"
              onClick={() => {
                const currentIndex = categories.indexOf(activeTab);
                const nextIndex = (currentIndex + 1) % categories.length;
                handleTabChange(categories[nextIndex]);
              }}
              className="p-2 rounded-full bg-muted/50 border border-white/5 text-white hover:bg-muted transition-colors sm:hidden"
              aria-label="Próxima categoria"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="min-h-[400px]">
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4 sm:-ml-6">
                    {galleryItems
                      .filter((item) => item.category === category)
                      .map((item, index) => (
                        // eslint-disable-next-line react-x/no-array-index-key
                        <CarouselItem key={`${item.title}-${index}`} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3">
                          <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-card h-full"
                            onClick={() => onImageClick(item.src, item.title)}
                          >
                            {/* Image */}
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              style={{ display: 'block' }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Category Badge */}
                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                              <span className="px-2.5 sm:px-3 py-1 bg-red-600/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs text-white font-semibold">
                                {item.category}
                              </span>
                            </div>

                            {/* Zoom Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <ZoomIn className="w-6 h-6 text-white" />
                              </div>
                            </div>

                            {/* Title */}
                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10">
                              <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-accent transition-colors drop-shadow-lg">
                                {item.title}
                              </h3>
                            </div>
                          </motion.div>
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="flex -left-4 sm:-left-12 bg-background/50 hover:bg-background/80 border-none text-white" />
                  <CarouselNext className="flex -right-4 sm:-right-12 bg-background/50 hover:bg-background/80 border-none text-white" />
                </Carousel>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Big Company Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mt-16 sm:mt-24"
        >
          <img
            src="/images/logo(1).webp"
            alt="STRACK CUSTOM"
            className="w-48 sm:w-64 md:w-80 h-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
