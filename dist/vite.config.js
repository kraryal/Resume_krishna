import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Resume_krishna/', // Add this line - your repo name
  build: {
    outDir: 'dist'
  }
})