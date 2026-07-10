import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  // Use a project-local cache dir we own, avoiding the stale root-owned
  // node_modules/.vite folder left behind by an earlier `sudo` run.
  cacheDir: '.vite-cache',
})
