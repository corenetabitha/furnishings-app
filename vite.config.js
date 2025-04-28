import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    port: 5172, // Use a different port to avoid conflicts
  }
});