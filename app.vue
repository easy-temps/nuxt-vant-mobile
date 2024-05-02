<script setup lang="ts">
import type { ConfigProviderTheme } from 'vant'
import { appName } from '~/constants'

useHead({
  title: appName,
})

const color = useColorMode()
const mode = computed(() => color.value as ConfigProviderTheme)
</script>

<template>
  <VanConfigProvider :theme="mode">
    <ColorScheme tag="div">
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ColorScheme>
  </VanConfigProvider>
</template>
