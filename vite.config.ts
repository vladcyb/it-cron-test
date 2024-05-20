import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

const vitePWA = VitePWA({
  devOptions: {
    enabled: true,
  },
  manifest: {
    name: 'IT Cron',
    short_name: 'IT Cron',
    icons: [
      {
        src: 'icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), vitePWA],
})
