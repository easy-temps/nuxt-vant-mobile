<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const menuItems = [
  { title: '🎨 Unocss 示例', route: 'unocss' },
  { title: '🍍 持久化 Pinia 状态', route: 'counter' },
  { title: '🙅 404页 演示', route: 'unknown' },
  { title: '🧡 KeepAlive 演示', route: 'keepalive' },
]

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
    return val
  },
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <VanCellGroup inset>
    <VanCell
      center
      title="🌗 暗黑模式"
    >
      <template #right-icon>
        <VanSwitch
          v-model="checked"
          size="20px"
          aria-label="on/off Dark Mode"
          @click="toggleDark"
        />
      </template>
    </VanCell>

    <template
      v-for="item in menuItems"
      :key="item.route"
    >
      <VanCell
        :title="item.title"
        :to="item.route"
        is-link
      />
    </template>
  </VanCellGroup>
</template>
