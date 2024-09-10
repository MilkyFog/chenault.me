<script setup lang="ts">
type TheButtonProps = {
  type?: string
}
const props = withDefaults(defineProps<TheButtonProps>(), {
  type: 'primary'
})
</script>

<template>
  <button class="" :class="`${props.type}-button`">
    <slot></slot>
  </button> 
</template>

<style scoped lang="scss">
button {
  border: initial;
  @apply text-white font-tesla ls-2;
  @apply hover:cursor-pointer;
  @apply border-rd-md py-1 px-2;
}
.primary-button {
  @apply  bg-blue-600 text-white;
}
.white-button {
  @apply bg-gray-100 text-black;
}
.transparent-button {
  @apply bg-transparent text-gray-5;
}
.copy-button {
  @apply bg-transparent; 
}
</style>