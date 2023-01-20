import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {}
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
