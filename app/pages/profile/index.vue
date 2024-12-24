<script setup lang="ts">
definePageMeta({
  layout: 'default',
  title: '我的',
  i18n: 'menu.profile',
})
</script>

<template>
  <div mx-auto mb-60 pt-15 text-center text-16 text-dark dark:text-white>
    {{ $t('profile_page.txt') }}
  </div>
</template>
