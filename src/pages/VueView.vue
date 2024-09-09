<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Item } from '~/components/TheAside'
import { useAsideStore } from '~/components/TheAside/the-aside.store'


const route = useRoute()
onMounted(() => {
  const vueItemList: Item[] = [
    { key: 0, label: 'Vue-Router', icon: '' },
    { key: 1, label: 'Nuxt', icon: 'i-logos-nuxt-icon' },
    { key: 2, label: 'Vue-Use', icon: 'i-logos-vueuse' }
  ]
  const { itemList } = useAsideStore()
  itemList.value = vueItemList
})
</script>

<template>
  <div class="vue-view-container">
    <div class="">当前路由: {{ route.fullPath }}</div>
  </div>
</template>

<style scoped lang="scss"></style>