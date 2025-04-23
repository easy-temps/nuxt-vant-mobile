<template>
  <main class="flex flex-col min-h-svh">
    <AppHeader class="h-[var(--van-nav-bar-height)]" />

    <div class="p-16 pb-[var(--van-nav-bar-height)] flex-1">
      <slot />
    </div>

    <AppFooter />
  </main>
</template>
