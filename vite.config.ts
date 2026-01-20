import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //   server: {
  //   port: 3001,   
  // },
})



// plugins usedf or adding extra features, react support and env handling
// vite.config: it is used for how to build run and optimize

