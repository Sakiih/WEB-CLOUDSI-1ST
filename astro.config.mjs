/**
 * astro.config.mjs
 * Konfigurasi final — Server rendering via Vercel adapter
 * API routes membutuhkan server mode, halaman tetap bisa prerender
 * 
 * OPTIMASI:
 * - Manual chunks: OGL, GSAP, Lenis terpisah untuk caching optimal
 * - Minify output for smaller bundle
 */
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://cloudsi.vercel.app',
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap(),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Separate heavy libraries into their own chunks for optimal caching
            if (id.includes('node_modules/ogl')) {
              return 'vendor-ogl';
            }
            if (id.includes('node_modules/gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('node_modules/lenis')) {
              return 'vendor-lenis';
            }
            if (id.includes('node_modules/@supabase')) {
              return 'vendor-supabase';
            }
          }
        }
      },
      // Optimize CSS
      cssMinify: true,
    },
    // Optimize dependency pre-bundling
    optimizeDeps: {
      include: ['gsap', 'lenis'],
      exclude: ['ogl'] // OGL loaded via import map from CDN
    }
  },
});
