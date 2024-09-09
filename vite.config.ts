/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueJSX from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
const plugins = [
  vue(), 
  UnoCSS(), 
  VueJSX(), 
  AutoImport({
    imports: ['vue', 'vitest', '@vueuse/core'], // 指定需要自动引入的文件
    dts: './types/auto-imports.d.ts', // 指定生成文件的路径
    dirs: ['./src/hooks/**'], // 自定义API的引入路径
    eslintrc: {
      enabled: true,
      filepath: './types/.eslintrc-auto-import.json' // 指定文件路径
    },
    resolvers: [ElementPlusResolver()]
  }),
  Components({
    resolvers: [ElementPlusResolver()],
    dts: './types/components.d.ts',
    dirs: ['./src/components'],
  }) 
]
export default defineConfig({
  plugins,
  test: {
    environment: 'happy-dom',
    exclude: ['**/node_modules/**']
  },
})