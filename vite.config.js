import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

const version = fs.readFileSync('./version.txt', 'utf-8').trim()


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  define:{
    __APP_VERSION__: JSON.stringify(version),
  },
})
