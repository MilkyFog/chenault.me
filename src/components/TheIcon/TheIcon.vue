<script setup lang="ts">
type IconProps = { 
  icon?: string
  color?: string
}
const props = withDefaults(defineProps<IconProps>(), {
  icon: 'i-logos-vueuse',
  color: '',
})
</script>

<template>
  <i class="the-icon text-tesla-gray h-8 flex-center">
    <i class="block size-4" :class="props.icon" :style="{ 'background-color':  props.color }"></i>
    <span class="text-center ml-2">
      <slot></slot>
    </span>
  </i> 
</template>

<style scoped lang="scss">
.the-icon {
  @apply block flex items-center gap-1 bg-#111111 px-1 
  @apply hover:bg-#191919 hover:text-white hover:cursor-pointer;
}
</style>
