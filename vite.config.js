import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// manually added import
import path from 'path'


// modified to to be able to use the @ symbol as an alias for the source directory, similar to Vue CLI created projects
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src')
    },
  },
})
