<script setup lang="ts">

type Item = {
  key: string | number
  label: string
  icon: string
}
const itemList = ref<Item[]>([
  { key: 0, label: 'Vue', icon: 'i-logos-vue' },
  { key: 1, label: 'Nuxt', icon: 'i-logos-nuxt-icon' },
  { key: 2, label: 'Components', icon: 'i-carbon-cube' }
])
</script>

<template>
  <ul class="the-aside-container">
    <RouterLink class="text-gray-5 text-lg fw-bold flex-center hover:cursor-pointer hover:text-gray-1" to="/">Home</RouterLink>
    <li
      class="text-tesla-gray w-full h-10 flex-center hover:cursor-pointer hover:text-white gap-2"
      v-for="item in itemList"
      :key="item.key"
    >
      <RouterLink :to="`/${item.label.toLowerCase()}`" class="router-link block w-full h-10 text-inherit">
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