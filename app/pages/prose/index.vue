<script lang="ts" setup>
import { useProseStore } from '~/stores/prose'

definePageMeta({
  layout: 'default',
  title: '随笔',
  i18n: 'menu.fetch',
})

const proseStore = useProseStore()

function fetch() {
  proseStore.fetchProse()
}

function clear() {
  proseStore.clearProse()
}
</script>

<template>
  <div>
    <div class="h-300 flex items-center justify-center rounded-15 bg-white p-16 dark:bg-[--van-background-2]">
      <div v-if="proseStore.prose" class="text-16 leading-26">
        {{ proseStore.prose }}
      </div>

      <ClientOnly v-else>
        <van-empty :description="$t('prose_page.btn_empty_desc')" />
      </ClientOnly>
    </div>

    <van-space class="m-10" direction="vertical" fill>
      <van-button type="primary" round block @click="fetch">
        {{ $t('prose_page.btn_fetch') }}
      </van-button>
      <van-button type="default" round block @click="clear">
        {{ $t('prose_page.btn_clear') }}
      </van-button>
    </van-space>
  </div>
</template>
