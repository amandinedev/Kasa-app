import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
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
