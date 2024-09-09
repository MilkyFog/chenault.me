<script setup lang="ts">
</script>

<template>
  <div class="text-tesla-gray flex-center w-full h-100vh bg-black">
    <div class="left w-20% h-full b-A">
      <TheAside></TheAside>
    </div>
    <div class="right w-80% h-full flex-center flex-col relative">
      <h1 class="text-xl text-white">Hello! I'm Chenault, a full stack coder.</h1>
      <div class="icon-list flex gap-1">
        <TheIcon icon="i-logos-vue">Vue</TheIcon> 
        <TheIcon icon="i-logos-nuxt-icon">Nuxt</TheIcon>
        <TheIcon icon="i-logos-typescript-icon">TypeScript</TheIcon>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
