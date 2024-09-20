<script setup lang="ts">
const visible = ref(true)
const handleFocus = (e: any) => { 
  e.target.blur()
  visible.value = true
}
</script>

<template>
  <div
    class="the-search-container relative w-full h-8 px-2 py-1.5 rounded-md shadow-md shadow-gray-300/50 py-2"
    flex="~ items-center gap-2"
  >
    <i
      class="block size-4 hover:cursor-pointer"
      i-carbon-search
    ></i>
    <input
      type="text"
      placeholder="Search"
      class="w-full bg-transparent placeholder:text-gray-400 focus:outline-none outline-none border-initial"
      un-text="~ gray-300"
      @focus="(e) => handleFocus(e)"
    />
    <span
      class="flex items-center b-A rounded absolute right-1.5 top-1/2 -translate-y-1/2 px-1"
      hover="~ cursor-pointer"
      shadow="~ md gray-100"
    >
      <i class="block i-carbon-mac-command"></i>
      <span class="ml-1">K</span>
    </span>
    <CommandMenu :visible />
  </div>
</template>

<style scoped lang="scss">

</style>