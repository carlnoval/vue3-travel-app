import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// manually added
import path from 'path'

// original from vite
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

// modified to to be able to use the @ symbol as an alias for the source directory, similar to Vue CLI created projects
export default defineConfig({
  alias: {
    '@' : path.resolve(__dirname, './src')
  },
  plugins: [vue()],
})
