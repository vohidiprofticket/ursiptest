import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"deploy-ursip"
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/my-project/'
  //   : '/'
})
