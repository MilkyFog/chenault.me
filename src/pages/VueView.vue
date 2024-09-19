<script setup lang="ts">
import { Item } from '~/components/TheAside'
import { useAsideStore } from '~/components/TheAside/the-aside.store'

const route = useRoute()
onMounted(() => {
  const vueItemList: Item[] = [
    { key: 0, label: 'Vue-Router', icon: 'i-logos-vue' },
    // { key: 1, label: 'Nuxt', icon: 'i-logos-nuxt-icon' },
    // { key: 2, label: 'Vue-Use', icon: 'i-logos-vueuse' },
    // { key: 3, label: 'Shiki', icon: 'i-logos-shiki-icon'}
  ]
  const { itemList } = useAsideStore()
  itemList.value = vueItemList
})
</script>

<template>
  <div class="vue-view-container">
    <div class="">当前路由: {{ route.fullPath }}</div>
    <div class="item-list w-80% h-30 grid lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-8">
      <div class="the-item rounded-xl hover:cursor-pointer min-w-60 flex items-center gap-4 h-fit px-1" v-for="item in 4" :key="item">
        <i class="i-logos-nuxt-icon saturate-0 block size-20 text-center w-20%" />
        <div class="w-80% h-full flex flex-col justify-center">
          <h2 class="text-hover text-white/50 text-nowrap ls-0">Nuxt Playgound</h2>
          <span class="text-span text-gray-4/50 ls-0">Interactive Playgound for leanring Nuxt</span>
        </div>
      </div>
    </div> 
  </div>
</template>

<style scoped lang="scss">
.saturate-0 {
  filter: saturate(0); 
}
.the-item {
  @apply shadow-md shadow-gray-500;
  &:hover {
    background-color: rgba(136, 136, 136, .1);
    .text-hover {
      @apply text-white;
    }
    .text-span {
      @apply text-gray-4; 
    }
    i {
      filter: saturate(1);
    }
  }
}

</style>