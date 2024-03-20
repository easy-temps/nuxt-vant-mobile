<script setup lang="ts">
import type { ConfigProviderTheme } from 'vant'
const mode = ref<ConfigProviderTheme>('light')

</script>

<template>
  <VanConfigProvider :theme="mode">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VanConfigProvider>
</template>

<style>
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html {
  background: var(--van-gray-1);
  color-scheme: light;
}
</style>
