<script setup lang="ts">
  const props = defineProps<{
    class?: string;
    childClass?: string;
  }>();

  const defaultClasses = 'py-section-mobile md:py-section-desktop border-t border-black/10 dark:border-white/10';
  const defaultChildClasses = 'max-w-container mx-auto px-4';
  const mergedClasses = mergeClassNames(defaultClasses, props.class || '');
  const mergedChildClasses = mergeClassNames(defaultChildClasses, props.childClass || '');
</script>
<template>
  <section :class="mergedClasses">
    <div :class="mergedChildClasses">
      <slot />
    </div>
  </section>
</template>
