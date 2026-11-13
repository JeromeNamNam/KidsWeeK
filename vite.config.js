import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site at https://<user>.github.io/KidsWeeK/
// If you rename the repository, change this base path accordingly.
export default defineConfig({
  base: '/KidsWeeK/',
  plugins: [react()],
})
