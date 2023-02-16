import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePluginFonts } from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ['Inter'],
      },
    }),
  ],
  server: {
    host: true,
    port: +process.env.VITE_APP_PORT || 3000,
  },
});
