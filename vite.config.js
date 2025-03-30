import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/', // Correct for root domain deployment
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Group Vue and its related dependencies together
          if (id.includes('node_modules/vue') || 
              id.includes('node_modules/@vue') || 
              id.includes('vue-router')) {
            return 'vendor-vue'
          }
          // Group other node_modules separately
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
        // Cache busting for production
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Ensure all dependencies are properly bundled
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})