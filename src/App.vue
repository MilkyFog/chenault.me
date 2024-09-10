<script setup lang="ts">
onMounted(() => {
  const router = useRouter()
  router.push('/vue')
})

</script>

<template>
  <div class="text-tesla-gray flex-center w-full h-100vh bg-black">
    <div class="left min-w-50 max-w-20% h-full">
      <TheAside />
    </div>
    <Suspense>
      <div class="right w-100% h-full bg-gray-5/30%">
        <RouterView />
      </div>
    </Suspense>
  </div>
</template>

<style scoped lang="scss"></style>
