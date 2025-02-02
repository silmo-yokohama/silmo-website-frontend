<script setup lang="ts">
  const props = defineProps<{
    class?: string;
  }>();

  const defaultClasses = 'font-mono first-letter:text-primary';
  const mergedClasses = mergeClassNames(defaultClasses, props.class || '');
</script>

<template>
  <h2 :class="mergedClasses"><slot /></h2>
</template>
