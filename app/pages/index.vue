<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'
import type { PickerColumn } from 'vant'
import type { ComputedRef } from 'vue'
import { Locale } from 'vant'

definePageMeta({
  layout: 'default',
  title: '主页',
  i18n: 'menu.home',
})

const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

const checked = computed({
  get: () => color.value === 'dark',
  set: (val: boolean) => {
    color.preference = val ? 'dark' : 'light'
  },
})

const { setLocale, t } = useI18n()
const i18n = useNuxtApp().$i18n

const showLanguagePicker = ref(false)

const languageValues = ref<string[]>([i18n.locale.value])

const { locales } = useI18n() as { locales: ComputedRef<LocaleObject[]> }

const menus = computed(() => [
  { title: t('menu.unocssExample'), route: 'unocss' },
  { title: t('menu.keepAlive'), route: 'keepalive' },
  { title: t('menu.persistPiniaState'), route: 'counter' },
  { title: t('menu.404Demo'), route: 'unknown' },
])

function onLanguageConfirm(event: { selectedOptions: PickerColumn }) {
  const lang = event.selectedOptions[0]?.code

  setLocale(lang)
  Locale.use(lang)
  localStorage.setItem('lang', lang)

  showLanguagePicker.value = false
}
</script>

<template>
  <div>
    <VanCellGroup inset>
      <VanCell :title="$t('menu.darkMode')" center>
        <template #right-icon>
          <ClientOnly>
            <VanSwitch
              v-model="checked"
              size="20px"
              aria-label="on/off Dark Mode"
            />
          </ClientOnly>
        </template>
      </VanCell>

      <VanCell
        :title="$t('menu.language')"
        :value="locales.find(i => i.code === i18n.locale.value)?.name"
        is-link
        @click="showLanguagePicker = true"
      />

      <template v-for="item in menus" :key="item.route">
        <VanCell :title="item.title" :to="item.route" is-link />
      </template>
    </VanCellGroup>

    <van-popup v-model:show="showLanguagePicker" position="bottom">
      <van-picker
        v-model="languageValues"
        :columns="locales"
        :columns-field-names="{ text: 'name', value: 'code' }"
        @confirm="onLanguageConfirm"
        @cancel="showLanguagePicker = false"
      />
    </van-popup>
  </div>
</template>
