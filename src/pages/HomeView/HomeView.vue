<script setup lang="ts">
import Avatar from '~/assets/img/avatar.jpg'
import StackList from './StackList/StackList.vue'
import { Stack } from './StackList'
import { useAsideStore } from '~/components/TheAside/the-aside.store'
import { Item } from '~/components/TheAside'
const frontendStackList: Stack[] = [
  {
    key: 1,
    icon: 'i-logos-vue',
    label: 'Vue'
  },
  {
    key: 2,
    icon: 'i-logos-react',
    label: 'React'
  },
  {
    key: 3,
    icon: 'i-logos-vitejs',
    label: 'Vite'
  },
  {
    key: 4,
    icon: 'i-logos-typescript-icon',
    label: 'TypeScript'
  },
  {
    key: 5,
    icon: 'i-logos-html-5',
    label: 'HTML5'
  },
  {
    key: 6,
    icon: 'i-logos-css-3',
    label: 'CSS3'
  },
  {
    key: 7,
    icon: 'i-logos-bun',
    label: 'Bun'
  },
  {
    key: 8,
    icon: 'i-logos-vitest',
    label: 'Vitest'
  },
  {
    key: 9,
    icon: 'i-logos-nuxt-icon',
    label: 'Nuxt'
  },
  {
    key: 10,
    icon: 'i-logos-nextjs-icon',
    label: 'Next'
  },
  {
    key: 11,
    icon: 'i-logos-nodejs-icon',
    label: 'NodeJS'
  },
  {
    key: 12,
    icon: 'i-logos-npm-icon',
    label: 'Npm'
  },
  {
    key: 13,
    icon: 'i-logos-rust',
    label: 'Rust',
    color: '#fff'
  },
  {
    key: 14,
    icon: 'i-logos-javascript',
    label: 'JavaScript'
  },
  {
    key: 15,
    icon: 'i-logos-flutter',
    label: 'Flutter'
  },
  {
    key: 16,
    icon: 'i-logos-eslint',
    label: 'ESLint'
  },
]
const backendStackList: Stack[] = [
  {
    key: 1,
    icon: 'i-logos-express',
    label: 'Express',
    color: '#fff',
  },
  {
    key: 2,
    icon: 'i-logos-nestjs',
    label: 'Nest'
  },
  {
    key: 3,
    icon: 'i-logos-mongodb-icon',
    label: 'MongoDB'
  },
  {
    key: 4,
    icon: 'i-logos-mysql-icon',
    label: 'MySQL'
  },
  {
    key: 5,
    icon: 'i-logos-html-5',
    label: 'HTML5'
  },
  {
    key: 6,
    icon: 'i-logos-css-3',
    label: 'CSS3'
  },
  {
    key: 7,
    icon: 'i-logos-bun',
    label: 'Bun'
  },
  {
    key: 8,
    icon: 'i-logos-vitest',
    label: 'Vitest'
  },
  {
    key: 9,
    icon: 'i-logos-nuxt-icon',
    label: 'Nuxt'
  },
  {
    key: 10,
    icon: 'i-logos-nextjs-icon',
    label: 'Next'
  },
  {
    key: 11,
    icon: 'i-logos-nodejs-icon',
    label: 'NodeJS'
  },
  {
    key: 12,
    icon: 'i-logos-npm-icon',
    label: 'Npm'
  },
  {
    key: 13,
    icon: 'i-logos-rust',
    label: 'Rust',
    color: '#fff'
  },
  {
    key: 14,
    icon: 'i-logos-javascript',
    label: 'JavaScript'
  },
  {
    key: 15,
    icon: 'i-logos-flutter',
    label: 'Flutter'
  },
  {
    key: 16,
    icon: 'i-logos-eslint',
    label: 'ESLint'
  },
]
onMounted(() => {
  const {itemList} = useAsideStore()
  const homeItemList: Item[] = [
    { key: 0, label: 'Vue', icon: 'i-logos-vue' },
    { key: 1, label: 'Nuxt', icon: 'i-logos-nuxt-icon' },
    { key: 2, label: 'Components', icon: 'i-carbon-cube' }
  ]
  itemList.value = homeItemList
})
</script>

<template>
  <div class="home-view-container">
    <div class="flex-center flex-col gap-4 relative">
      <img
        class="size-30 rounded-50%"
        :src="Avatar"
      />
      <h1 class="text-xl text-white">Hello! I'm Chenault, a full stack coder.</h1>
      <h2 class="resume">Resume</h2>
      <h2 class="title">Frontend</h2>
      <StackList class="w-80%" :stack-list="frontendStackList"/> 
      <h2 class="title">Backend</h2>
      <StackList class="w-80%" :stack-list="backendStackList"></StackList> 
    </div>
  </div>
</template>

<style scoped lang="scss">


h2 {
  @apply text-gray-5 text-lg w-80% flex items-center justify-start;
  @apply hover:cursor-pointer hover:text-gray-1;
}

.stack-list {
  @apply w-80%;
}
</style>