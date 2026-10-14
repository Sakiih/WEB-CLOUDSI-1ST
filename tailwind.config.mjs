/**
 * tailwind.config.mjs
 * Konfigurasi Tailwind CSS v3 untuk Cloudsi Connect
 * Extends: CSS Custom Properties dari tokens.css
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        sky: {
          deep: 'hsl(210, 60%, 6%)',
          mid: 'hsl(205, 55%, 14%)',
          surface: 'hsl(200, 50%, 22%)',
        },
        water: {
          surface: 'hsl(195, 70%, 35%)',
          light: 'hsl(190, 65%, 55%)',
        },
        accent: {
          gold: 'hsl(45, 85%, 65%)',
        },
      },
      maxWidth: {
        container: '1400px',
      },
      transitionTimingFunction: {
        glass: 'cubic-bezier(0.23, 1, 0.32, 1)',
        water: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        fast: '200ms',
        normal: '500ms',
        slow: '900ms',
        ripple: '1800ms',
      },
    },
  },
  plugins: [],
};
