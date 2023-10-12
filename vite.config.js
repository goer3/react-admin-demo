import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9000,
    open: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
        },
        javascriptEnabled: true,
      },
    },
  },
});