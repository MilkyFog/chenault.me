<script setup lang="ts">
type IconProps = { 
  icon: string
}
const props = withDefaults(defineProps<IconProps>(), {
  icon: 'i-logos-vueuse'
})
</script>

<template>
  <i class="the-icon text-tesla-gray">
    <i class="block size-4" :class="props.icon"></i>
    <span>
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
