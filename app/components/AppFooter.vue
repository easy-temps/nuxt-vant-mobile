<script setup lang="ts">
import { useAppFooterRouteNames as names } from '~/config'

const route = useRoute()

const active = ref(0)

const show = computed(() => {
  if (route.name && names.includes(route.name))
    return true
  return false
})
</script>

<template>
  <van-tabbar v-if="show" v-model="active" route placeholder fixed>
    <van-tabbar-item replace to="/">
      <span>{{ $t('tabbar.home') }}</span>
      <template #icon>
        <div class="i-carbon:home" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/profile">
      <span>{{ $t('tabbar.profile') }}</span>
      <template #icon>
        <div class="i-carbon:user" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
