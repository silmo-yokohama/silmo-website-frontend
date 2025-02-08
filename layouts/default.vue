<template>
  <div class="transition-colors duration-300 min-h-screen">
    <common-header />
    <main class="font-zen">
      <!-- メインコンテンツ -->
      <slot />
    </main>
    <common-footer />
  </div>
</template>

<style scoped>
  .page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
