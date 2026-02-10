import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('framer-motion')) return 'motion-vendor';
            if (id.includes('@radix-ui') || id.includes('lucide-react')) return 'ui-vendor';
            // Avoid creating a broad 'vendor' chunk that catches everything else to prevent circular deps
            // or let Vite handle the rest automatically
          }
        },
      },
    },
  },
});
