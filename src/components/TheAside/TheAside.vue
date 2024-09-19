<script setup lang="ts">
import TheTitle from './TheTitle'
import TheSearch from './TheSearch'
import RouteList from './RouteList.vue'

</script>

<template>
  <div 
    class="the-aside-container px-2"
    flex="~ col gap-4"
  >
    <TheTitle />
    <TheSearch />
    <RouteList/>
  </div>
  
</template>

<style scoped lang="scss">

</style>