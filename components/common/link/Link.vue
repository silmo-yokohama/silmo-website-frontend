<script setup lang="ts">
  const props = defineProps<{
    to: string;
    class?: string;
  }>();

  const mergedClasses = mergeClassNames(
    'inline-block border  dark:border-white/10 rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors duration-200',
    props.class || ''
  );
</script>

<template>
  <nuxt-link :to="to" :class="mergedClasses" v-bind="$attrs">
    <slot />
  </nuxt-link>
</template>
