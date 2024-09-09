<script setup lang="ts">
type stack = {
  key: string | number
  icon: string
  label: string
}
const stackList = ref<stack[]>([{
    key: 1,
    icon: 'i-logos-vue',
    label: 'Vue'
  }, {
    key: 2,
    icon: 'i-logos-react',
    label: 'React'
  }, {
    key: 3,
    icon: 'i-logos-vitejs',
    label: 'Vite'
  }, {
    key: 4,
    icon: 'i-logos-typescript-icon',
    label: 'TypeScript'
  }, {
    key: 5,
    icon: 'i-logos-html-5',
    label: 'HTML5'
  }, {
    key: 6,
    icon: 'i-logos-css-3',
    label: 'CSS3'
  }, {
    key: 7,
    icon: 'i-logos-bun',
    label: 'Bun'
  },
])
</script>

<template>
  <div class="text-tesla-gray flex-center w-full h-100vh bg-black">
    <div class="left min-w-50 max-w-20% h-full b-r-1 b-r-solid b-r-#8e8e8e">
      <TheAside></TheAside>
    </div>
    <div class="right w-100% h-full flex-center flex-col relative">
      <img
        class="size-30 rounded-50% absolute top-80"
        src="./assets/img/avatar.jpg"
      />
      <h1 class="text-xl text-white">Hello! I'm Chenault, a full stack coder.</h1>
      <div class="stack-list grid grid-cols-4 grid-items-center grid-content-center gap-1 w-50% h-20">
        <TheIcon v-for="stack in stackList" :key="stack.key" :icon="stack.icon">{{ stack.label }}</TheIcon>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
