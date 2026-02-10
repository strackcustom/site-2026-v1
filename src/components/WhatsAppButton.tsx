import { motion } from 'framer-motion';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511969216106"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-transparent w-14 h-14 rounded-full shadow-2xl transition-all duration-300 group hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <img src="/whatsapp-logo-icon.webp" alt="WhatsApp" className="w-14 h-14 object-contain" />

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
