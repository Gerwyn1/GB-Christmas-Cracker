import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   __APP_ENV__: JSON.stringify('development'),
  // },
})



    // "build:dev": "APP_ENV=development vite build",
    // "build:prod": "APP_ENV=production vite build"