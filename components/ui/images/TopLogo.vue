<script setup lang="ts">
  import BlackLogo from '@/assets/images/logos/logo-h-black.png';
  import WhiteLogo from '@/assets/images/logos/logo-h-white.png';

  const colorMode = useColorMode();
</script>

<template>
  <img class="w-24 md:w-28" :src="colorMode.value !== 'dark' ? BlackLogo : WhiteLogo" alt="Top Logo" />
</template>
