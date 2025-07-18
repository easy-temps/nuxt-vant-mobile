<script setup lang="ts">
definePageMeta({
  title: '🎨 Unocss 示例',
  i18n_key: 'menu.unocssExample',
})
</script>

<template>
  <div>
    <h1 class="text-6xl color-pink font-semibold">
      {{ $t('unocss_page.hello', ['Unocss!']) }}
    </h1>

    <p class="text-gray-700 mt-10 dark:text-white">
      {{ $t('unocss_page.desc') }}
    </p>

    <button class="btn mt-10">
      {{ $t('unocss_page.btn_txt') }}
    </button>
  </div>
</template>
