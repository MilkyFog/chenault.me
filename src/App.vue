<script setup lang="ts">
import { RouterView } from 'vue-router'


</script>

<template>
  <div class="text-tesla-gray flex-center w-full h-100vh bg-black">
    <div class="left min-w-50 max-w-20% h-full b-r-1 b-r-solid b-r-#8e8e8e">
      <TheAside></TheAside>
    </div>
    <div class="right w-100% h-full">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
