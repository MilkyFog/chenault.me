import { codeToHtml } from 'shiki'

const code = 'const a = 1' // 输入代码片段
const html = await codeToHtml(code, {
  lang: 'javascript',
  theme: 'vitesse-dark'
})

console.log(html) // 带有高亮显示的 HTML 字符串