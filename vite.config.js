import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        products: '/src/pages/products.html',
        about: '/src/pages/about.html',
        contact: '/src/pages/contact.html',
      },
    },
  },
});
