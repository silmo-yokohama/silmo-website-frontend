<script setup lang="ts">
  import '@/assets/scss/buttons/primary.scss';
  const props = defineProps<{
    class?: string;
    disabled?: boolean;
    onClick?: () => void;
  }>();

  const mergedClasses = mergeClassNames(
    'button-primary inline-block border  dark:border-white/10 rounded-lg py-3 hover:border-primary hover:text-primary transition-colors duration-200',
    props.disabled ? 'is-disabled' : '',
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
  <button :class="mergedClasses" v-bind="filteredAttrs" :disabled="props.disabled || false" @click="props.onClick || null">
    <slot />
  </button>
</template>
