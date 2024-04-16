<script setup lang="ts">
const active = ref(0)
</script>

<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item replace to="/">
      <span>首页</span>
      <template #icon>
        <div class="i-carbon:home" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/profile">
      <span>我的</span>
      <template #icon>
        <div class="i-carbon:user" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
