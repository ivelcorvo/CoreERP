// frontend/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({

  plugins: [react()],
  //  O valor real virá do CI/CD.
  base: '/', 
  server: {
    port: 3000,
    proxy: {
      // O proxy interno do Docker está correto
      '/api': 'http://backend:3001', 
    }
  },
});