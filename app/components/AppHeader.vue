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

/**
 * Get page title
 * Located in i18n/locales/json
 */
const title = computed(() => {
  if (route.name) {
    return t(`navbar.${route.name}`)
  }

  return t('navbar.Undefined')
})

/**
 * Display the left arrow
 * If route name is in route white list, display left arrow
 */
const showLeftArrow = computed(() => {
  if (route.name && routeWhiteList.includes(route.name)) {
    return true
  }

  return false
})
</script>

<template>
  <van-nav-bar
    :title="title"
    clickable
    placeholder
    fixed
    :left-arrow="!showLeftArrow"
    @click-left="onBack"
  />
</template>
