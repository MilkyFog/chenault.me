# vue-router

- vue-router-environment
  - main.ts
    ```ts
    import { createApp } from 'vue'
    import './assets/global.scss'
    import 'uno.css'
    import App from './App.vue'
    import router from './hooks/vue-router/router'

    const app = createApp(App)
    app.use(router as any)
    app.mount('#app')
    ```
  - router.ts
    ```ts
    import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
    import HomeView from '../../pages/HomeView.vue'
    import VueView from '../../pages/VueView.vue'
    import NuxtView from '../../pages/NuxtView.vue'

    const routes: RouteRecordRaw[] = [
      { path: '/', component: HomeView },
      { path: '/vue', component: VueView },
      { path: '/nuxt', component: NuxtView }
    ]

    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    })

    export default router
    ```
  - 
- 