<script setup lang="ts">
import TheButton from '~/components/TheButton/TheButton.vue'
import { codeToHtml } from 'shiki'

type ShikiProps = {
  code?: string
  lang?: string
}
const props = withDefaults(defineProps<ShikiProps>(), {
  code: 'console.log(\'Hello World\')',
  lang: 'ts'
})
const codeBlock = await codeToHtml(props.code, {
  lang: 'typescript',
  theme: 'vitesse-black',
})

</script>

<template>
  <div class="the-shiki-container relative">
    <span class="absolute right-2 top-0">ts</span>
    <TheButton class="absolute right-0 top-5 z-10" type="transparent">
      <i class="i-carbon-copy block size-4 hover:text-white"/>
    </TheButton>
    <div class="code-block w-fit h-fit rounded-md bg-black py-4 pl-4 pr-30" v-html="codeBlock"></div>
  </div>
</template>

<style scoped lang="scss">
</style>