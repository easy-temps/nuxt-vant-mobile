<script setup lang="ts">
import { useAppFooterRouteNames as names } from '~/config'

const route = useRoute()

const classNames = computed(() => {
  return route.name && names.includes(route.name) ? 'py-20' : 'px-10 pt-60'
})
</script>

<template>
  <main>
    <AppHeader />

    <div :class="classNames">
      <slot />
    </div>

    <AppFooter />
  </main>
</template>
