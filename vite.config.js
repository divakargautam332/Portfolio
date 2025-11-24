import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base remove karo Render ke liye, sirf GitHub Pages me chahiye hota hai
  // base: '/Portfolio/',
  preview: {
    host: '0.0.0.0',         // Render ko external network se expose karega
    port: 4173,               // optional
    strictPort: true,         // agar port busy ho to fail kare
    allowedHosts: ['portfolio-2-psyl.onrender.com'] // Add exact Render hostname
  }
})


