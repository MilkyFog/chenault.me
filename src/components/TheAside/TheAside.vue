<script setup lang="ts">

const itemList = ref([
  { key: 0, label: 'Vue', icon: 'i-logos-vue' },
  { key: 1, label: 'Nuxt', icon: 'i-logos-nuxt-icon'}
])
</script>

<template>
  <ul class="the-aside-container">
    <h2 class="text-white flex-center">Content</h2>
    <li
      class="text-tesla-gray w-full h-10 flex-center hover:cursor-pointer hover:text-white"
      v-for="item in 10"
      :key="item"
    >TheAside</li>
  </ul>
</template>

<style scoped lang="scss"></style>