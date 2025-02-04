<script setup lang="ts">
  import BlackLogo from '@/assets/images/logos/logo-h-black.png';
  import WhiteLogo from '@/assets/images/logos/logo-h-white.png';

  const colorMode = useColorMode();

  const logo = computed(() => (colorMode.value !== 'dark' ? BlackLogo : WhiteLogo));
</script>

<template>
  <client-only>
    <img class="w-24 md:w-28" :src="logo" alt="Top Logo" />
  </client-only>
</template>
