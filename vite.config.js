import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      components: path.resolve(__dirname, '/src/components'),
      // eslint-disable-next-line no-undef
      ui: path.resolve(__dirname, '/src/components/ui'),
      // eslint-disable-next-line no-undef
      sections: path.resolve(__dirname, '/src/sections'),
      // eslint-disable-next-line no-undef
      views: path.resolve(__dirname, '/src/views'),
    },
  },
  base: '/layouts-mega-thread/',
  build: {
    assetsDir: 'assets',
  },
});
