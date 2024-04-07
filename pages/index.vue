<script setup lang="ts">
const menuItems = [
  { title: '💿 Mock 指南', route: 'mock' },
  { title: '📊 Echarts 演示', route: 'charts' },
  { title: '🎨 Unocss 示例', route: 'unocss' },
  { title: '🍍 持久化 Pinia 状态', route: 'counter' },
  { title: '🙅 404页 演示', route: 'unknown' },
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
  set: (val) => {
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
      <!-- item.route -->
      <VanCell
        :title="item.title"
        to="/"
        is-link
      />
    </template>
  </VanCellGroup>
</template>
