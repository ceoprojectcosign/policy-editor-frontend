import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173, // 🔒 Lock Vite to port 5173 for debugging consistency
    hmr: {
      overlay: false, // ✅ Disable the full-screen error overlay in dev
    },
  },
});
