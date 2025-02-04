<script setup lang="ts">
  import type { TagClassName } from '@/types/tag';

  const props = defineProps<{
    to: string;
    title: string;
    description: string;
    category: string;
  }>();

  const tagInfo: { name: string; color: TagClassName }[] = [
    {
      name: 'Web App',
      color: 'tag-indigo',
    },
    {
      name: 'Website',
      color: 'tag-emerald',
    },
    {
      name: 'Mobile App',
      color: 'tag-purple',
    },
    {
      name: 'Design',
      color: 'tag-amber',
    },
  ];

  const tag = computed(() => tagInfo.find((tag) => tag.name === props.category));
</script>

<template>
  <nuxt-link :to="to" class="group border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:border-primary transition-colors duration-200">
    <div class="flex items-center gap-2">
      <common-tag :tag-color-class="tag?.color">
        {{ tag?.name }}
      </common-tag>
    </div>
    <h3 class="mt-4 text-xl">{{ title }}</h3>
    <p class="mt-2 text-black/60 dark:text-white/60">
      {{ description }}
    </p>
    <div class="mt-4 flex items-center text-primary">
      <span class="group-hover:translate-x-2 transition-transform duration-200"> View Project </span>
    </div>
  </nuxt-link>
</template>
