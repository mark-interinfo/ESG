import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    build: {
      outDir: '../',
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].js`,//輸出的檔案移除哈希值
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        }
      },
    },
})
