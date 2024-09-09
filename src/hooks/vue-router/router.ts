import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
import HomeView from '../../pages/HomeView/HomeView.vue'
import VueView from '../../pages/VueView.vue'
import NuxtView from '../../pages/NuxtView.vue'
import ComponentsView from '../../pages/ComponentsView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/vue', component: VueView },
  { path: '/nuxt', component: NuxtView },
  { path: '/components', component: ComponentsView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router