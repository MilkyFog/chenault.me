<script setup lang="ts">
const itemList = ref([
  { key: '1', quetion: '如何实现Cmd + K打开搜索框', answer: 'console', isToggle: false },
  { key: '1', quetion: '如何实现Cmd + K打开搜索框', answer: 'console', isToggle: false },
])
</script>

<template>
  <div class="notes-container flex flex-col items-center h-full gap-4 p-4">
    <div
      v-for="item in itemList"
      :key="item.key"
      class="notes-item w-full py-2 px-4"
      flex="~ col justify-center gap-4"
      @click="item.isToggle = !item.isToggle"
    >
      <div
        class="question w-full relative hover:text-gray-1 hover:cursor-pointer px-4 py-2 rounded-md"
        shadow="~ md gray-5"
        flex="~ items-center justify-between"
      >
        <span>如何实现Cmd + K打开搜索框</span>
        <div class="ml-auto">
          <i
            class="block"
            :class="[item.isToggle ? 'i-carbon-arrow-up' : 'i-carbon-arrow-down']"
          ></i>
        </div>
      </div>

      <div
        v-show="!item.isToggle"
        class="answer w-100% b-A shadow-md shadow-gray-7 rounded-md h-fit px-4 py-2"
      >
      <div v-for="i in 3" :key="i">{{ item.answer }}</div>
    </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notes-item {}
</style>