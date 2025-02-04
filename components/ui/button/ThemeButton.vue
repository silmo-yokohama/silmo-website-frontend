<script setup lang="ts">
  import { Sun, Moon } from 'lucide-vue-next';

  const colorMode = useColorMode();

  const toggleColorMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  };
</script>

<template>
  <!-- カラーモードトグル -->
  <client-only>
    <button
      class="relative p-2 h-8 w-8 hover:text-primary transition-colors duration-200"
      :aria-label="colorMode.value === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
      @click="toggleColorMode"
    >
      <sun
        :class="[
          'absolute top-0 left-0 text-secondary-700 h-8 w-8 duration-300',
          colorMode.value === 'dark' ? 'rotate-45 opacity-0 pointer-events-none' : 'rotate-90 opacity-100',
        ]"
      />
      <moon
        :class="[
          'absolute top-0 left-0 text-primary h-8 w-8 duration-300',
          colorMode.value === 'dark' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0 pointer-events-none',
        ]"
      />
    </button>
  </client-only>
</template>
