import { defineConfig } from 'vite';

import createPlugins from '@build/vite/plugins';

export default defineConfig({
  plugins: createPlugins(),
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
