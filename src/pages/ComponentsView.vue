<script setup lang="ts">

</script>

<template>
  <div class="components-view-container px-2">
    <h1>Button</h1>
    <div class="button-list flex gap-2">
      <button class="blue-button">button</button>
      <button class="white-button">button</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  @apply text-gray-1;
}
button {
  all: initial;
  @apply text-white font-tesla ls-2;
  @apply hover:cursor-pointer;
  @apply border-rd-md py-1 px-2;
}
.blue-button {
  @apply  bg-blue-600 text-white;
}
.white-button {
  @apply bg-gray-100 text-black;
}
</style>