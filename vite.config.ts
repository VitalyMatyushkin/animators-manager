import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [babel()],
}));
