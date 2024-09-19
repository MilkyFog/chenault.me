<script setup lang="ts">
type TheHeadProps = {
  type?: string
}
const props = withDefaults(defineProps<TheHeadProps>(), {
  type: 'h2'
})
</script>

<template>
  <div class="the-head" :class="props.type">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.h2 {
  @apply text-gray-5 text-lg fw-bold;
  @apply hover:cursor-pointer hover:text-gray-1;
}
</style>