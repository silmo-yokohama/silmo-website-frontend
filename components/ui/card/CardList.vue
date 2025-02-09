<script setup lang="ts">
  const props = defineProps<{
    class?: string;
  }>();

  const mergedClasses = mergeClassNames(props.class || '', 'grid grid-cols-1 md:grid-cols-2 gap-8');
</script>

<template>
  <div :class="mergedClasses">
    <slot />
  </div>
</template>
