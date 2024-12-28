<script lang="ts" setup>
import { useProseStore } from '~/stores/prose'

definePageMeta({
  layout: 'default',
  title: '随笔',
  i18n: 'menu.fetch',
})

const proseStore = useProseStore()

async function fetchData() {
  await proseStore.fetchProse()
}

fetchData()
</script>

<template>
  <div>
    {{ proseStore.prose }}
  </div>
</template>
