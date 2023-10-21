import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 9000,
    open: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': 'rgba(32, 44, 64)',
        },
        javascriptEnabled: true,
      },
    },
  },
});
