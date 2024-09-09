import { Item } from './the-aside.type'

export const useAsideStore = createGlobalState(() => {
  const itemList: Ref<Item[]> = ref([
    { key: 0, label: 'Vue', icon: 'i-logos-vue' },
    { key: 1, label: 'Nuxt', icon: 'i-logos-nuxt-icon' },
    { key: 2, label: 'Components', icon: 'i-carbon-cube' }
  ])
  return {
    itemList
  }
})