import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          dir: 'dist',
          // eslint-disable-next-line consistent-return
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
                return "vendor";
            }
          },
        },
      },
    },
});
