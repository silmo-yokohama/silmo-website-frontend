<script setup lang="ts">
  const props = defineProps<{
    class?: string;
  }>();

  const mergedClasses = mergeClassNames(props.class || '', 'flex items-center gap-2 mb-4 md:mb-0');
</script>

<template>
  <div :class="mergedClasses">
    <slot />
  </div>
</template>
