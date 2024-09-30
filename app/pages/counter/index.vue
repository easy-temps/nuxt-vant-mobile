<script setup lang="ts">
import useCounter from '~/composables/counter'

definePageMeta({
  title: '🍍 持久化 Pinia 状态',
  i18n: 'menu.persistPiniaState',
})

const counter = useCounter()

function add() {
  counter.increment()
}
</script>

<template>
  <div>
    <h1 class="text-6xl color-pink font-semibold">
      Hello, Pinia!
    </h1>

    <p class="mt-10 text-gray-700 dark:text-white">
      {{ $t('counter_page.label') }}
    </p>

    <p class="mt-10">
      {{ $t('counter_page.label_num') }}:
      <strong class="text-green-500"> {{ counter.count }} </strong>
    </p>

    <button class="mt-10 btn" @click="add">
      {{ $t('counter_page.btn_add') }}
    </button>
  </div>
</template>
