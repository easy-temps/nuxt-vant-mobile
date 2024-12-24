<template>
  <main class="flex flex-col min-h-svh">
    <AppHeader class="h-[var(--van-nav-bar-height)]" />

    <div class="flex-1 p-16 pb-[var(--van-nav-bar-height)]">
      <slot />
    </div>

    <AppFooter />
  </main>
</template>
