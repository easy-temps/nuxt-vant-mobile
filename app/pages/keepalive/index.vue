<script setup lang="ts">
defineOptions({
  name: 'Keepalive',
})

definePageMeta({
  name: 'Keepalive',
  keepalive: true,
})

const value = ref(1)
</script>

<template>
  <div>
    <p> {{ $t('keepalive_page.label') }} </p>
    <van-stepper v-model="value" class="mt-10" />
  </div>
</template>
