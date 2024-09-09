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
-  
- 
  