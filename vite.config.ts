import { defineConfig } from 'vite';

import createPlugins from '@build/vite/plugins';
import createResolves from '@build/vite/resolves';

export default defineConfig({
  plugins: createPlugins(),
  resolve: createResolves(),
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
