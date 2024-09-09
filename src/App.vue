<script setup lang="ts">
type stack = {
  key: string | number
  icon: string
  label: string
  color?: string
}
const stackList = ref<stack[]>([
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
])
</script>

<template>
  <div class="text-tesla-gray flex-center w-full h-100vh bg-black">
    <div class="left min-w-50 max-w-20% h-full b-r-1 b-r-solid b-r-#8e8e8e">
      <TheAside></TheAside>
    </div>
    <div class="right w-100% h-full grid">
      <div></div>
      <div class="flex-center flex-col gap-4 relative">
        <img
          class="size-30 rounded-50%"
          src="./assets/img/avatar.jpg"
        />
        <h1 class="text-xl text-white">Hello! I'm Chenault, a full stack coder.</h1>
        <h2 class="text-gray-5 text-lg w-80% flex items-center justify-start">frontend technology stack</h2>
        <div class="stack-list h-fit w-80% h-20">
          <TheIcon
            v-for="stack in stackList"
            :key="stack.key"
            :icon="stack.icon"
            :color="stack.color"
          >{{ stack.label }}</TheIcon>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stack-list {
  @apply grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-items-center grid-content-center gap-1;
}

.right {
  grid-template-columns: 100px 1fr 100px;
}
</style>
