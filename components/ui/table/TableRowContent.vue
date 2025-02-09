<script setup lang="ts">
  const props = defineProps<{
    class?: string;
  }>();

  const mergedClasses = mergeClassNames(props.class || '', 'flex flex-wrap gap-2');
</script>

<template>
  <div :class="mergedClasses">
    <slot />
  </div>
</template>
