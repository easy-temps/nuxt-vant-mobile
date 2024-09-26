<script setup lang="ts">
defineOptions({
  name: 'Keepalive',
})

definePageMeta({
  name: 'Keepalive',
  keepalive: true,
  title: '🧡 KeepAlive',
  i18n: 'menu.keepAlive',
  level: 2,
})

const value = ref(1)
</script>

<template>
  <Container>
    <p>{{ $t('keepalive_page.label') }}</p>
    <van-stepper v-model="value" />
  </Container>
</template>
