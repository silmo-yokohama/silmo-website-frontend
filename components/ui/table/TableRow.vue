<script setup lang="ts">
  const props = defineProps<{
    class?: string;
  }>();

  const mergedClasses = mergeClassNames(props.class || '', 'grid grid-cols-1 md:grid-cols-[200px,1fr] py-6 first:pt-0');
</script>

<template>
  <div :class="mergedClasses">
    <slot />
  </div>
</template>
