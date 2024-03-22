<script setup lang="ts">
import type { ConfigProviderTheme } from 'vant'
import { appName } from '~/constants'

const mode = ref<ConfigProviderTheme>('light')

useHead({
  title: appName,
})
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
