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
  rules: [
    ['font-tesla', { 'font-family': '"Universal Sans Text", -apple-system, Arial, sans-serif, "Universal Sans Display Trial"'}],
    [/^ls-(\d+)$/, (match) => ({ 'letter-spacing': `${Number(match[1]) / 32 }rem` })],
  ],
  shortcuts: {
    'b-A': 'b-1px b-solid b-#8e8e8e',
    'flex-center': 'flex items-center justify-center'
  },
  transformers: [transformerDirectives()],
})