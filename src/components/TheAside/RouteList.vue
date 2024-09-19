<script setup lang="ts">
import { useAsideStore } from '~/components/TheAside/index.ts'
const { itemList } = useAsideStore()
</script>

<template>
  <ul class="route-list">
    <li
      class="text-tesla-gray w-full h-10 flex-center hover:cursor-pointer hover:text-white gap-2"
      v-for="item in itemList"
      :key="item.key"
    >
      <RouterLink
        :to="`/${item.label.toLowerCase()}`"
        class="router-link block w-full h-10 text-inherit decoration-none"
        flex="~ center gap-2"
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

</style>