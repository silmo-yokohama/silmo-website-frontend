<script setup lang="ts">
  defineProps<{
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
  }>();
</script>

<template>
  <button class="p-2 hover:text-primary transition-colors duration-200" aria-label="Toggle menu" @click="setIsMenuOpen(!isMenuOpen)">
    <div class="w-6 h-5 relative flex flex-col justify-between">
      <span :class="['w-full h-0.5  bg-current transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-[0.55rem] text-secondary-700' : '']"></span>
      <span :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
      <span :class="['w-full h-0.5  bg-current transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-[0.55rem] text-secondary-700' : '']"></span>
    </div>
  </button>
</template>
