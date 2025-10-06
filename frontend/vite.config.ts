// frontend/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const BASE_PATH = process.env.NODE_ENV === 'production' 
  ? '/nome-do-seu-repo/' 
  : '/';

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  server: {
    port: 3000,
    proxy: {
      // CORREÇÃO CRUCIAL: Use o nome do serviço 'backend'
      '/api': 'http://backend:3001', 
    }
  },
});