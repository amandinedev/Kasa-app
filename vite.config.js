import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    sourcemap: true, // Generate source maps for production builds
  },
  server: {
    hmr: {
      overlay: false,
    }
  },
  css: {
    devSourcemaps: true,  // Optional: Generate CSS source maps during development
    modules: {
      localsConvention: 'camelCase', 
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "src/styles/variables.scss";` // Optional, for global SCSS imports
      }
    }
  },
})
