import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

const promoImages = [
    {
        src: '/images/promo-1.jpg',
        alt: 'Promoção 1',
    },
    {
        src: '/images/promo-2.jpg',
        alt: 'Promoção 2',
    },
    {
        src: '/images/promo-3.jpg',
        alt: 'Promoção 3',
    },
];

interface PromotionsSectionProps {
    onImageClick: (image: string, title: string) => void;
}

export function PromotionsSection({ onImageClick }: PromotionsSectionProps) {
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) {
            return;
        }

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 10000);

        return () => clearInterval(intervalId);
    }, [api]);

    return (
        <section id="promocoes" className="py-16 sm:py-20 bg-background relative overflow-hidden">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        PROMOÇÕES <span className="text-red-600">ESPECIAIS</span>
                    </h2>
                    <div className="h-1 w-20 bg-red-600 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            loop: true,
                            align: "center",
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {promoImages.map((image) => (
                                <CarouselItem key={image.src} className="basis-full">
                                    <div className="p-1">
                                        <div
                                            className="overflow-hidden rounded-2xl shadow-xl bg-black relative cursor-pointer group"
                                            onClick={() => onImageClick(image.src, image.alt)}
                                        >
                                            <div className="aspect-[4/3] sm:aspect-[16/9] w-full flex items-center justify-center">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            {/* Zoom Hint */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                                                <span className="text-white text-sm font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
                                                    Ver em tela cheia
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-background/50 hover:bg-background/80 border-none text-white" />
                        <CarouselNext className="right-4 bg-background/50 hover:bg-background/80 border-none text-white" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
