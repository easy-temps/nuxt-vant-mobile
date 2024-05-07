<script setup lang="ts">
defineProps({
  paddingX: {
    type: Number,
    default: 16,
  },
})
</script>

<template>
  <div
    class="absolute left-0 h-full w-full overflow-y-auto"
    :style="`padding-left: ${paddingX}px; padding-right: ${paddingX}px`"
  >
    <slot />
  </div>
</template>
