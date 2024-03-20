<script setup lang="ts">
const menuItems = [
  { title: '💿 Mock 指南', route: 'mock' },
  { title: '📊 Echarts 演示', route: 'charts' },
  { title: '🎨 Unocss 示例', route: 'unocss' },
  { title: '🍍 持久化 Pinia 状态', route: 'counter' },
  { title: '🙅 404页 演示', route: 'unknown'},
]

const checked = ref<boolean>(false)

function toggle() {
  checked.value = !checked.value
}

</script>


<template>
  <VanCellGroup inset>
    <VanCell center title="🌗 暗黑模式">
      <template #right-icon>
        <VanSwitch v-model="checked" size="20px" aria-label="on/off Dark Mode" @click="toggle()" />
      </template>
    </VanCell>

    <template v-for="item in menuItems" :key="item.route">
      <!-- item.route -->
      <VanCell :title="item.title" to="/" is-link />
    </template>
  </VanCellGroup>
</template>
