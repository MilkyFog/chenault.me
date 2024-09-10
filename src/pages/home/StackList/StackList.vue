<script setup lang="ts">


import { Stack } from '.'
type StackListProps = {
  stackList?: Stack[]
}
const props = withDefaults(defineProps<StackListProps>(), {
  stackList: () => []
})
</script>

<template>
  <div class="stack-list-container">
    <TheIcon
      v-for="stack in props.stackList"
      :key="stack.key"
      :icon="stack.icon"
      :color="stack.color"
    >{{ stack.label }}</TheIcon>
  </div>
</template>

<style scoped lang="scss">
.stack-list-container {
  @apply grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-items-center grid-content-center gap-1;
}
</style>