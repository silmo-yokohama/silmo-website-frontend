<script setup lang="ts">
  import type { TagClassName } from '~/types/tag';

  const props = defineProps<{
    tagColorClass?: TagClassName;
  }>();

  const tagColor = computed(() => props.tagColorClass || 'tag-emerald');
</script>

<template>
  <span :class="`px-2 py-1 text-xs rounded-md  ${tagColor}`">
    <slot />
  </span>
</template>
