/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts'
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // automatically import constant stylesheets
        additionalData: `@import "${path.resolve(__dirname, 'src/app/constant.less')}";\n`
        +  `@import "${path.resolve(__dirname, 'src/app/global.less')}";`,
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@features': '/src/features',
      '@app': '/src/app',
      '@hooks': '/src/hooks',
      '@layouts': '/src/layouts',
      '@libs': '/src/libs',
      '@pages': '/src/pages',
      '@services': '/src/services',
      '@utils': '/src/utils'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://lovin.overclock.team',
        changeOrigin: true,
      }
    }
  }
})
