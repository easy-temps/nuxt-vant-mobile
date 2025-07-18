<script setup lang="ts">
import { useAppFooterRouteNames as routeWhiteList } from '~/config'

const route = useRoute()
const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
  else
    router.replace('/')
}

const { t } = useI18n()

const title = computed(() => {
  if (!route.meta)
    return ''
  return route.meta.i18n_key ? t(route.meta.i18n_key) : (route.meta.title || '')
})

const showLeftArrow = computed(() => route.name && routeWhiteList.includes(route.name))
</script>

<template>
  <VanNavBar
    :title="title"
    :left-arrow="!showLeftArrow"
    clickable placeholder fixed
    @click-left="onBack"
  />
</template>
