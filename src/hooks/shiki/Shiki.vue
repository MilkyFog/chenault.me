<script setup lang="ts">
type ShikiProps = {
  code?: string
}
const props = withDefaults(defineProps<ShikiProps>(), {
  code: 'console.log(\'Hello World\')'
})
</script>

<template>
  <div class="">
    <span></span>
    <div class="">Hello</div>
  </div>
</template>

<style scoped lang="scss">
</style>