<script setup lang="ts">
import { useAsideStore } from './the-aside.store'
const { itemList } = useAsideStore()
</script>

<template>
  <ul class="the-aside-container">
    <RouterLink
      class="text-lg fw-bold flex-center hover:cursor-pointer text-gray-1/90 hover:text-gray-1 gap-2 shadow-xl shadow-gray-1/50"
      to="/"
    >
    <i class="i-carbon-cube text-gray-1"/>
    <span>Chenault</span>
  </RouterLink>
    <li
      class="text-tesla-gray w-full h-10 flex-center hover:cursor-pointer hover:text-white gap-2"
      v-for="item in itemList"
      :key="item.key"
    >
      <RouterLink
        :to="`/${item.label.toLowerCase()}`"
        class="router-link block w-full h-10 text-inherit"
      >
        <i
          class="block"
          :class="item.icon"
        />
        <span>{{ item.label }}</span>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.router-link {
  text-decoration: none;
  @apply flex-center gap-2;
}
</style>