import { motion } from 'framer-motion';
import { Gem, Shield, Handshake } from 'lucide-react';

export function AboutSection() {
    return (
        <section id="sobre" className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-bl-full -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-tr-full -z-10" />

            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <p className="text-xs sm:text-sm tracking-[0.2em] text-white mb-3 sm:mb-4">
                        QUEM SOMOS
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        SOBRE A <span className="text-white">STRACK CUSTOM</span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Especializada em proteção e tecnologia automotiva. Nossa missão é entregar perfeição técnica em PPF, películas automotivas e soluções de personalização, unindo técnica especializada, acabamento impecável e paixão por carros, para que o seu veículo receba o tratamento mais avançado do mercado.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: Foco Técnico */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-card border border-border p-8 rounded-2xl hover:border-accent/30 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                            <Gem className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Performance estética superior</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Mais que um serviço, entregamos a valorização real do seu patrimônio. Unimos o acabamento impecável à durabilidade das marcas líderes mundiais, elevando o padrão de segurança e o estilo do seu automóvel com precisão técnica absoluta.
                        </p>
                    </motion.div>

                    {/* Card 2: Perfil do Cliente */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-card border border-border p-8 rounded-2xl hover:border-accent/30 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                            <Handshake className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Tranquilidade em primeiro lugar</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Mantemos um padrão de excelência em cuidado automotivo, assegurando que seu veículo permaneça em um ambiente controlado e seguro. Aqui, o profissionalismo na custódia é tão importante quanto a perfeição no acabamento.
                        </p>
                    </motion.div>

                    {/* Card 3: Especialidades */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-card border border-border p-8 rounded-2xl hover:border-accent/30 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                            <Shield className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Soluções de Alta Performance</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Somos especialistas em proteção e personalização avançada. Do PPF de última geração às películas térmicas e integração multimídia, oferecemos a tecnologia necessária para quem exige o melhor material e não aceita improvisos na execução.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
