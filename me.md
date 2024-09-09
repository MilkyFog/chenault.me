# me

## 2024.9.9
- 创建项目: pnpm create vite
- 如何使用git cz
  - ni -D cz-customizable cz-conventional-changelog-zh
  - package.json
    ```json
    "config": {
      "commitizen": {
        "path": "./node_modules/cz-conventional-changelog-zh"
      }
    }
    ```
  - 
- 连接远程仓库
  git remote add origin https://github.com/MilkyFog/chenault.me.git
  git branch -M main
  git push -u origin main
- 部署: vercel
  - https://vercel.com/milkyfogs-projects/chenault-me
- 引入unocss
  - ni -D unocss @unocss/preset-mini @unocss/transformer-directives @iconify/json
  - uno.config.ts
    ```ts
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
    ```
  - main.ts: `import "uno.css"`
-