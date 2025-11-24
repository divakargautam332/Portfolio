import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // GitHub Pages ke liye jaruri
  preview: {
    host: true, // 0.0.0.0 par expose karega
    port: 4173, // optional, default port
    allowedHosts: 'all', // Render ke hostname block nahi honge
  }
})

