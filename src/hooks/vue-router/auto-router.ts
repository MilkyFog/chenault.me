import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '~/pages/HomeView/HomeView.vue'
import VueView from '~/pages/VueView.vue'
import NuxtView from '~/pages/NuxtView.vue'
import ComponentsView from '~/pages/ComponentsView.vue'

export type RouteConfig = { // page.ts导出遵守的类型规范
	name: string
	title: string
	children: RouteConfig[]
}
export type PageModules = {
	[key: string]: RouteConfig
}
export const pageModules = import.meta.glob('../../pages/**/page.**', { 
	eager: true,
}) as PageModules // { 'path': page.ts的内容 }

const pattern = /page\.(j|t)s/ // 匹配page.js和page.ts
// 导入组件模块
const componentModules = import.meta.glob('../../pages/**/index.vue')
// 生成并导出路由
const autoRoutes = Object.entries(pageModules).map((page: [string, RouteConfig]) => {
	const [pagePath, config] = page
	const path = pagePath.replace('../../pages', '').replace(pattern, '') || '/'
	// const name = path.split('/').filter(Boolean).join('-') || 'index'
	const name = config.name
	const children = config.children
	const componentPath = pagePath.replace(pattern, 'index.vue')
	const routes = {
		path,
		name,
		component: componentModules[componentPath], // 生产环境有问题 vite使用rollup打包的import()不能放变量 只能放字面量
		children,
		meta: config
	}
	return routes
})

const constantRoutes: RouteRecordRaw[] = [
	{ path: '/home', component: HomeView },
	{ path: '/vue', component: VueView },
  { path: '/nuxt', component: NuxtView },
  { path: '/components', component: ComponentsView }
]
const routes: any[] = [...constantRoutes, ...autoRoutes]
const router = createRouter({
	routes,
	history: createWebHashHistory()
})

export default router