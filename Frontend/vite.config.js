import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('C:\\Test\\cert-key.pem'),
      cert: fs.readFileSync('C:\\Test\\cert.pem'),
      ca:fs.readFileSync('C:\\Test\\ca.pem')
    }
  },
  plugins: [react()]
})
