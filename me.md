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
  - 使用教程: https://www.cnblogs.com/echolun/p/17524216.html
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
  - vite.config.ts
- environment
  - package.json
    ```json
    {
      "name": "vue",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "vue-tsc -b && vite build",
        "preview": "vite preview",
        "test": "vitest --u --w"
      },
      "dependencies": {
        "vue": "^3.4.37"
      },
      "devDependencies": {
        "@iconify/json": "^2.2.241",
        "@types/spark-md5": "^3.0.4",
        "@unocss/preset-icons": "^0.62.3",
        "@unocss/preset-mini": "^0.62.2",
        "@unocss/transformer-directives": "^0.62.2",
        "@vitejs/plugin-vue": "^5.1.2",
        "@vitejs/plugin-vue-jsx": "^4.0.1",
        "@vue/test-utils": "^2.4.6",
        "@vueuse/core": "^11.0.3",
        "axios": "^1.7.5",
        "cz-conventional-changelog-zh": "^0.0.2",
        "cz-customizable": "^7.2.1",
        "happy-dom": "^15.0.0",
        "pinia": "^2.2.2",
        "sass": "^1.77.8",
        "spark-md5": "^3.0.2",
        "typescript": "^5.5.3",
        "unocss": "^0.62.2",
        "unplugin-auto-import": "^0.18.2",
        "unplugin-vue-components": "^0.27.4",
        "vite": "^5.4.1",
        "vitest": "^2.0.5",
        "vue-tsc": "^2.0.29"
      },
      "config": {
        "commitizen": {
          "path": "./node_modules/cz-conventional-changelog-zh"
        }
      }
    }
    ```
  - vite.config.ts
    ```ts
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
    ```
  - main.ts
    ```ts
    import { createApp } from 'vue'
    import App from './App.vue'
    // css sass
    import 'virtual:uno.css'
    import './assets/global.scss'
    import { createPinia } from 'pinia'
    // import ElementPlus from 'element-plus'
    // import 'element-plus/dist/index.css'

    const pinia = createPinia()
    const app = createApp(App)

    app.use(pinia)
    // app.use(ElementPlus)
    app.mount('#app')
    ```
  - tsconfig.app.json 
    ```json
    {
      "compilerOptions": {
        "target": "ES2020",
        "useDefineForClassFields": true,
        "module": "ESNext",
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "skipLibCheck": true,

        /* Bundler mode */
        "moduleResolution": "bundler",
        "allowImportingTsExtensions": true,
        "isolatedModules": true,
        "moduleDetection": "force",
        "noEmit": true,
        /* JSX TSX */
        "jsx": "preserve",
        "jsxImportSource": "vue",

        /* Linting */
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true,

        // type
        // "types": ["element-plug/global"] 
      },
      "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "types/**/*.ts"]
    }

    ```
- sass-module
  - [bilibili](https://www.bilibili.com/video/BV1uw4m1v79V/?spm_id_from=333.337.search-card.all.click&vd_source=bbb17d49654d454c95ef8157b625f1bb)
  - @import
    - css运行时: @import url('undefined.css') 哪怕写一个不存在的文件也不会报错
      - 运行后的结构是@import url('undefined.css')
    - sass编译时: @import 'undefined.css'
      - 运行后结果为: * { marging: 0; padding: 0 } 
      - 问题: 容易混淆 + 污染变量 后面的变量会覆盖前面的变量
      - 问题: 没有私有的内部变量
    - 
  - @use: sass推荐使用的模块化方式
    - 编译时: @use url('undefined.css') 编译时就会报错
    - @use 'common.scss' 会给每个文件加上一个命名空间
    - @use 'common.scss' as * 会把命名空间去掉
    - @use 'common.scss' as common
    - common.$color
    - 定义私有变量: $_color: 'red': 加_或者-
    - 
  - 
- unocss定义font-tesla为font-family
  
  - rules: uno.config.ts
    rules: [
      ['font-tesla', { 'font-family': '"Universal Sans Text", -apple-system, Arial, sans-serif, "Universal Sans Display Trial"'}]
    ],
  - 
- unocss字体大小排序
  - x: extra s: small m: medium l: large
  - xxs xs s m l xl 2xl
- unocss 设置letter-spacing文字的间隔 实现ls-1px
  - https://unocss.dev/config/rules
  - 如何实现unocss的动态规则
    - [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
- withdefault 
## withDefaults

```typescript

export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})

```
  