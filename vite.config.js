import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true,
      exclude: [/virtual:/, /node_modules/, /sb-preview/]
    })
  ],
  server: {
    watch: {
      usePolling: true
    },
    cors: false
  },
  build: {
    sourcemap: true
  },
  resolve: {
    alias: {
      '@src': `${path.resolve(__dirname, 'src')}`,
      '@utils': `${path.resolve(__dirname, 'src/utils')}`,
      '@urls': `${path.resolve(__dirname, 'src/urls')}`,
      '@assets': `${path.resolve(__dirname, 'src/assets')}`,
      '@routes': `${path.resolve(__dirname, 'src/routes')}`,
      '@components': `${path.resolve(__dirname, 'src/components')}`,
      '@context': `${path.resolve(__dirname, 'src/context')}`
    }
  }
})
