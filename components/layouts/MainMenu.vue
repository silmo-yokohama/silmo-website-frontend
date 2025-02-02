<script setup lang="ts">
  defineProps<{
    isMenuOpen: boolean;
  }>();
</script>

<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isMenuOpen" class="fixed inset-0 bg-[#FAFAFA] dark:bg-dark flex flex-col z-50">
      <slot />
    </div>
  </transition>
</template>
