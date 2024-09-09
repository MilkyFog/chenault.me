<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.fullPath)
</script>

<template>
  <div class="vue-view-container">
    <div class="">Vue</div>
  </div>
</template>

<style scoped lang="scss">
</style>