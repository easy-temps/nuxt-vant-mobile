<script setup lang="ts">
const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
  else
    router.replace('/')
}
</script>

<template>
  <main text="center gray-300 dark:gray-200 18" py="20">
    <van-icon name="warn-o" size="3em" />
    <slot />

    <div class="mt-10">
      <button van-haptics-feedback btn m="3 t8" @click="onBack">
        {{ $t('error_page.back_btn') }}
      </button>
    </div>
  </main>
</template>
