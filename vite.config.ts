import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Check if we're building for the custom domain
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Set base path for GitHub Pages
  base: "/Tk/",
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: 'globalThis',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // Use terser for minification to avoid React errors
    minify: 'terser',
    // Ensure single CSS file to prevent security errors
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Prevent CSS security issues with consistent naming
        manualChunks: undefined,
      },
    },
  },
  // Add CSS configuration to prevent security errors
  css: {
    postcss: {},
  },
}));
