<script setup lang="ts">

type Item = {
  key: string | number
  label: string
  icon: string
}
const itemList = ref<Item[]>([
  { key: 0, label: 'Vue', icon: 'i-logos-vue' },
  { key: 1, label: 'Nuxt', icon: 'i-logos-nuxt-icon'},
  { key: 2, label: 'Components', icon: 'i-carbon-cube'}
])
</script>

<template>
  <ul class="the-aside-container">
    <h2 class="text-white flex-center">Content</h2>
    <li
      class="text-tesla-gray w-full h-10 flex-center hover:cursor-pointer hover:text-white flex items-center gap-2"
      v-for="item in itemList"
      :key="item.key"
    >
    <i class="block" :class="item.icon"/>
    <span>{{ item.label }}</span>
  </li>
  </ul>
</template>

<style scoped lang="scss"></style>