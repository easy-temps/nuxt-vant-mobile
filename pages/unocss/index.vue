<script setup lang="ts">
definePageMeta({
  title: '🎨 Unocss 示例',
  i18n: 'menu.unocssExample',
})
</script>

<template>
  <div>
    <h1 class="text-6xl color-pink font-semibold">
      {{ $t('unocss_page.hello', ['Unocss!']) }}
    </h1>

    <p class="mt-10 text-gray-700 dark:text-white">
      {{ $t('unocss_page.desc') }}
    </p>

    <button class="mt-10 btn">
      {{ $t('unocss_page.btn_txt') }}
    </button>
  </div>
</template>
