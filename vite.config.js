import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  },
  rollupOptions: {
    output: {
      entryFileNames: `../dist/assets/[name].js`,//輸出的檔案移除哈希值
      chunkFileNames: `../dist/assets/[name].js`,
      assetFileNames: `../dist/assets/[name].[ext]`,
    }
  },
})
