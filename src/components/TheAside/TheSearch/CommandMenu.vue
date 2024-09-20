<script setup lang="ts">
import { Command } from 'vue-command-palette'
const props = withDefaults(defineProps<{
  visible: boolean,
}>(), {
  visible: false,
})
console.log(props.visible)
</script>

<template>
  <Command.Dialog
    :visible="visible"
    theme="Raycast"
  >
    <template #header>
      <Command.Input placeholder="Search" class="text-white" />
    </template>
    <template #body>
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </template>
  </Command.Dialog>
</template>

<style scoped lang="scss">
@use './Raycast/raycast.scss';

.Raycast {
  @apply bg-black;
}
</style>