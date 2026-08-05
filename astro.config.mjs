// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hvshs.com',
  vite: {
    esbuild: {
      target: 'es2022',
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            lit: ['lit'],
          },
        },
      },
    },
  },
});
