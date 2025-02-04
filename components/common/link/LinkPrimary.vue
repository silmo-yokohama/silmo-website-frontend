<script setup lang="ts">
  const props = defineProps<{
    to: string;
    class?: string;
  }>();

  const mergedClasses = mergeClassNames(
    'button-primary inline-block border  dark:border-white/10 rounded-lg py-3 hover:border-primary hover:text-primary transition-colors duration-200',
    props.class || ''
  );

  // class属性を除外した残りの属性を取得
  const attrs = useAttrs();
  const filteredAttrs = computed(() => {
    const { class: _, ...rest } = attrs;
    return rest;
  });
</script>

<template>
  <nuxt-link :to="to" :class="mergedClasses" v-bind="filteredAttrs">
    <slot />
  </nuxt-link>
</template>
