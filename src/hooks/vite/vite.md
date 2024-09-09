# vite
- vite-alias
  - vite.config.ts
    ```ts
    import { fileURLToPath, URL } from 'url'
    export default defineConfig({
      resolve: {
        alias: {
          '~': fileURLToPath(new URL('./src', import.meta.url)),
          'libs': fileURLToPath(new URL('./libs', import.meta.url))
        }
      },
    })
    ```
  - vscode extensions: path intellisence
    ```json
    {
      "path-intellisense.mappings": {
        "~/": "${workspaceFolder}/src",
        "libs/": "${workspaceFolder}/libs", 
      },
    }
    ```
  - tsconfig.app.json
    ```json
    {
      "compilerOptions": {
        "baseUrl": "./",
        "paths": {
          "~/*": ["src/*"],
          "libs/*": ["libs/*"],
        }
      },
      "include": [
        "libs/**/*.ts", "libs/**/*.vue",
      ],

    }
    ```
  - 
- 
