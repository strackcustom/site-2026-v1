import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus } from 'lucide-react';

// Circular Chart Component
const CircularChart = ({ percentage, label, title }: { percentage: number; label: string; title: string }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="bg-transparent border border-[#2a2a2a] p-8 text-center flex flex-col items-center justify-center">
            <h3 className="text-lg text-white font-normal mb-5">{title}</h3>
            <div className="relative w-[200px] h-[200px] mb-5">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                        className="text-[#0a0a0a]"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx="50"
                        cy="50"
                    />
                    <motion.circle
                        className="text-[#c0c0c0]"
                        strokeWidth="3"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx="50"
                        cy="50"
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{ strokeDasharray: circumference }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-light text-white">
                    {percentage}%
                </div>
            </div>
            <p className="text-[#c0c0c0] text-sm font-light">{label}</p>
        </div>
    );
};

// Percentage Bar Component
const PercentageBar = ({ value }: { value: string }) => {
    const width = parseInt(value);
    return (
        <div className="flex items-center gap-3 justify-end w-full">
            <span className="font-normal min-w-[40px] text-right">{value}</span>
            <div className="h-1.5 flex-grow bg-[#2a2a2a] rounded-full overflow-hidden max-w-[100px]">
                <motion.div
                    className="h-full bg-[#c0c0c0] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

export function TechnologySection() {
    const [activeTab, setActiveTab] = useState<'ultra-vision' | 'dyed-black'>('ultra-vision');

    return (
        <section className="py-20 bg-black text-[#c0c0c0] font-sans selection:bg-[#c0c0c0] selection:text-black">
            <div className="w-full max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block text-[#c0c0c0] text-[13px] tracking-[2px] mb-8 uppercase font-light">
                        APLICADOR AUTORIZADO ACROSS
                    </div>
                    <h2 className="text-5xl font-light text-white mb-5 leading-tight">
                        TECNOLOGIA DE PONTA
                    </h2>
                    <p className="text-lg font-light text-[#c0c0c0] max-w-2xl mx-auto">
                        Películas Automotivas Premium com máxima performance e proteção.
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-5 mb-16 flex-col sm:flex-row">
                    <button
                        type="button"
                        onClick={() => setActiveTab('ultra-vision')}
                        className={`relative py-4 px-8 text-base font-light border transition-all duration-300 overflow-hidden group w-full sm:w-auto
              ${activeTab === 'ultra-vision'
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-[#c0c0c0] border-[#2a2a2a] hover:border-[#c0c0c0] hover:text-white'}`}
                    >
                        ULTRAVISION
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('dyed-black')}
                        className={`relative py-4 px-8 text-base font-light border transition-all duration-300 overflow-hidden group w-full sm:w-auto
              ${activeTab === 'dyed-black'
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-[#c0c0c0] border-[#2a2a2a] hover:border-[#c0c0c0] hover:text-white'}`}
                    >
                        DYED BLACK
                    </button>
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    {activeTab === 'ultra-vision' ? (
                        <motion.div
                            key="ultra-vision"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center mb-16">
                                <h2 className="text-4xl text-white font-light mb-4">PELÍCULA <strong>ULTRAVISION</strong></h2>
                                <p className="max-w-3xl mx-auto text-[17px] font-light">
                                    Com sua exclusiva tecnologia de pigmentação de partículas <strong className="text-[#c0c0c0] font-normal">Nano Cerâmica e Nitrato de Titânio</strong>, ela garante o máximo de rejeição de calor (IR) com a maior nitidez entre qualquer outra película.
                                </p>
                            </div>

                            {/* Charts */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                <CircularChart title="Rejeição Infravermelho" percentage={96} label="Máxima eficiência na rejeição de calor" />
                                <CircularChart title="Bloqueio UV" percentage={99} label="Proteção total contra raios ultravioleta" />
                                <CircularChart title="Energia Rejeitada" percentage={66} label="Eficiência total na rejeição solar" />
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="border border-[#2a2a2a] p-8 hover:border-[#c0c0c0] transition-colors duration-300">
                                    <h3 className="text-xl text-white font-normal mb-5">Anti risco de alto desempenho</h3>
                                    <ul className="space-y-3">
                                        {['Filme PET', 'Revestimento de nitrato de titânio', 'Camada adesiva', 'Revestimento Nano Cerâmico', 'Camada adesiva'].map((item, index) => (
                                            <li key={`${item}-${index}`} className="flex items-center gap-3 font-light text-[#c0c0c0]">
                                                <Minus className="w-3 h-3 text-[#909090]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border border-[#2a2a2a] p-8 hover:border-[#c0c0c0] transition-colors duration-300">
                                    <h3 className="text-xl text-white font-normal mb-5">Tecnologia Exclusiva</h3>
                                    <ul className="space-y-3">
                                        {['Pigmentação de partículas Nano Cerâmica', 'Nitrato de Titânio para rejeição de calor', 'Altíssima definição que não desbota', 'Máxima nitidez visual', 'Proteção contra infravermelho (IR)'].map(item => (
                                            <li key={item} className="flex items-center gap-3 font-light text-[#c0c0c0]">
                                                <Minus className="w-3 h-3 text-[#909090]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Specs Table */}
                            <div className="overflow-x-auto mb-16">
                                <table className="w-full border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="border-b border-[#2a2a2a]">
                                            <th className="p-5 text-left text-white font-normal">Película</th>
                                            {['05', '20', '35', '50', '70', '80'].map(t => <th key={t} className="p-5 text-center text-white font-normal">{t}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-[#2a2a2a]">
                                            <td className="p-5 text-white font-normal">Transmissão Luz Visível</td>
                                            {['7%', '18%', '32%', '48%', '72%', '75%'].map((v) => <td key={v} className="p-5"><PercentageBar value={v} /></td>)}
                                        </tr>
                                        <tr className="border-b border-[#2a2a2a]">
                                            <td className="p-5 text-white font-normal">Rejeição Infravermelho</td>
                                            <td className="p-5"><PercentageBar value="96%" /></td>
                                            <td className="p-5"><PercentageBar value="96%" /></td>
                                            <td className="p-5"><PercentageBar value="96%" /></td>
                                            <td className="p-5"><PercentageBar value="96%" /></td>
                                            <td className="p-5"><PercentageBar value="96%*" /></td>
                                            <td className="p-5"><PercentageBar value="96%" /></td>
                                        </tr>
                                        <tr className="border-b border-[#2a2a2a]">
                                            <td className="p-5 text-white font-normal">Bloqueio UV</td>
                                            {[1, 2, 3, 4, 5, 6].map(i => <td key={i} className="p-5"><PercentageBar value="99%" /></td>)}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="dyed-black"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center mb-16">
                                <h2 className="text-4xl text-white font-light mb-4">PELÍCULA <strong>DYED BLACK</strong></h2>
                                <p className="max-w-3xl mx-auto text-[17px] font-light">
                                    Tecnologia Deep Dyed com tingimento em profundidade. Une o reconhecimento de mercado com excelente custo-benefício e cor preta profunda que não desbota.
                                </p>
                            </div>

                            {/* Charts */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                <CircularChart title="Rejeição Infravermelho" percentage={10} label="Rejeição de calor padrão" />
                                <CircularChart title="Bloqueio UV" percentage={99} label="Proteção total contra raios UV" />
                                <CircularChart title="Energia Rejeitada" percentage={45} label="Eficiência energética" />
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="border border-[#2a2a2a] p-8 hover:border-[#c0c0c0] transition-colors duration-300">
                                    <h3 className="text-xl text-white font-normal mb-5">Tecnologia Deep Dyed</h3>
                                    <ul className="space-y-3">
                                        {['Tingimento em profundidade', 'Coloração nítida e duradoura', 'Não desbota com o tempo', 'Ótimo custo-benefício', 'Cor preta perfeita'].map(item => (
                                            <li key={item} className="flex items-center gap-3 font-light text-[#c0c0c0]">
                                                <Minus className="w-3 h-3 text-[#909090]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border border-[#2a2a2a] p-8 hover:border-[#c0c0c0] transition-colors duration-300">
                                    <h3 className="text-xl text-white font-normal mb-5">Características</h3>
                                    <ul className="space-y-3">
                                        {['Pigmentos integrados', 'Incorporação química e física', 'Proteção contra degradação', 'Estabilidade térmica'].map(item => (
                                            <li key={item} className="flex items-center gap-3 font-light text-[#c0c0c0]">
                                                <Minus className="w-3 h-3 text-[#909090]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Specs Table */}
                            <div className="overflow-x-auto mb-16">
                                <table className="w-full border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="border-b border-[#2a2a2a]">
                                            <th className="p-5 text-left text-white font-normal">Película</th>
                                            {['05', '20', '35', '50'].map(t => <th key={t} className="p-5 text-center text-white font-normal">{t}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-[#2a2a2a]">
                                            <td className="p-5 text-white font-normal">Transmissão Luz Visível</td>
                                            {['4%', '20%', '36%', '56%'].map((v) => <td key={v} className="p-5"><PercentageBar value={v} /></td>)}
                                        </tr>
                                        <tr className="border-b border-[#2a2a2a]">
                                            <td className="p-5 text-white font-normal">Total Energia Rejeitada</td>
                                            {['45%', '39%', '38%', '34%'].map((v) => <td key={v} className="p-5"><PercentageBar value={v} /></td>)}
                                        </tr>
                                        <tr className="border-b border-[#2a2a2a]">
                                            <td className="p-5 text-white font-normal">Bloqueio UV</td>
                                            {[1, 2, 3, 4].map(i => <td key={i} className="p-5"><PercentageBar value="99%" /></td>)}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Comparison Section */}
                <div className="border border-[#2a2a2a] border-t-0 p-0 mt-16 grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 border-b md:border-b-0 md:border-r border-[#2a2a2a]">
                        <div className="text-center mb-8 border-b border-[#2a2a2a] pb-6">
                            <h3 className="text-2xl text-white font-normal">ULTRAVISION</h3>
                            <p className="text-[#c0c0c0] text-sm font-light mt-2">Tecnologia Nano Cerâmica</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { l: 'Tecnologia', v: 'Nano Cerâmica + Titânio' },
                                { l: 'Rejeição IR', v: 'Até 96%' },
                                { l: 'Durabilidade', v: 'Altíssima' },
                                { l: 'Nitidez', v: 'Máxima' }
                            ].map((item) => (
                                <div key={item.l} className="flex justify-between border-b border-[#2a2a2a] pb-3 last:border-0 text-sm">
                                    <span className="text-[#c0c0c0] font-light">{item.l}</span>
                                    <span className="text-white font-normal text-right">{item.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="text-center mb-8 border-b border-[#2a2a2a] pb-6">
                            <h3 className="text-2xl text-white font-normal">DYED BLACK</h3>
                            <p className="text-[#c0c0c0] text-sm font-light mt-2">Tecnologia Deep Dyed</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { l: 'Tecnologia', v: 'Deep Dyed' },
                                { l: 'Rejeição IR', v: 'Até 10%' },
                                { l: 'Durabilidade', v: 'Alta' },
                                { l: 'Custo-benefício', v: 'Excelente' }
                            ].map((item) => (
                                <div key={item.l} className="flex justify-between border-b border-[#2a2a2a] pb-3 last:border-0 text-sm">
                                    <span className="text-[#c0c0c0] font-light">{item.l}</span>
                                    <span className="text-white font-normal text-right">{item.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
