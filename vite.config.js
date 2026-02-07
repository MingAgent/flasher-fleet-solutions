import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For custom domain deployment (www.flasher-fleet-solutions.com)
  base: '/',
})
