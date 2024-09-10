import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '~/pages/home/index.vue'
import VueView from '~/pages/VueView.vue'
import NuxtView from '~/pages/NuxtView.vue'
import ComponentsView from '~/pages/ComponentsView.vue'

export declare type RouteConfig = { // page.ts导出遵守的类型规范
	name: string
	title: string
	children: RouteConfig[]
}
declare type Module = {
	default: RouteConfig
}
declare type PageModules = {
	[key: string]: Module
}

export const pageModules = import.meta.glob('~/pages/**/page.**', { 
	eager: true,
}) as PageModules // { 'path': page.ts的内容 }

const pattern = /page\.(j|t)s/ // 匹配page.js和page.ts
// 导入组件模块
export const componentModules = import.meta.glob('~/pages/**/index.vue')
// 生成并导出路由

export const autoRoutes = Object.entries(pageModules).map((page: [string, Module]) => {
	const [pagePath, config] = page
	const path = pagePath.replace('/src/pages', '').replace(pattern, '') || '/' // 将page.ts路径的前面的/src/page去除 以及最后的page.ts去除 /vue-router
	const name = config.default.name

	const children = config.default.children
	const componentPath = pagePath.replace(pattern, 'index.vue') // 将/pages/vue-router/page.ts => /pages/vue-router/index.vue
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
	{ path: '/', component: HomeView },
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