<script setup lang="ts">
  const props = defineProps<{
    class?: string;
  }>();

  const mergedClasses = mergeClassNames(props.class || '', 'bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8');
</script>

<template>
  <div :class="mergedClasses">
    <div class="divide-y divide-black/5 dark:divide-white/5">
      <slot />
    </div>
  </div>
</template>
