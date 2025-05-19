import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

 
export default defineConfig({
  base: '/dxnfamly/', // 👈 هذا مهم جدًا عند النشر إلى GitHub Pages
  plugins: [react()],
});

