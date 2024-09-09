// uno.config.ts
import { defineConfig, presetAttributify, presetIcons } from 'unocss'
import presetMini from '@unocss/preset-mini'
import transformerDirectives from '@unocss/transformer-directives'
export default defineConfig({
  presets: [
    presetMini(), 
    presetAttributify(), 
    presetIcons()
  ],
  shortcuts: {
    'b-A': 'b-1px b-solid b-red',
    'flex-center': 'flex items-center justify-center',
  },
  transformers: [transformerDirectives()],
})