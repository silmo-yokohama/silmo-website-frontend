<script setup lang="ts">
  import type { Project } from '@/types/project';

  const props = defineProps<{
    project: Project;
    class?: string;
  }>();

  const mergedClasses = mergeClassNames(
    props.class || '',
    'group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 hover:border-primary transition-all duration-300'
  );
</script>
<template>
  <div :class="mergedClasses">
    <!-- 画像エリア -->
    <div class="relative aspect-[16/9] overflow-hidden bg-black/5 dark:bg-white/5">
      <nuxt-img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <!-- コンテンツエリア -->
    <div class="p-6">
      <!-- タグ -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in project.tags" :key="tag.id" class="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary/20">
          {{ tag.name }}
        </span>
      </div>

      <!-- タイトルと説明 -->
      <h3 class="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">
        {{ project.title }}
      </h3>
      <p class="text-black/60 dark:text-white/60 line-clamp-2">
        {{ project.description }}
      </p>

      <!-- 詳細を見るリンク -->
      <div class="mt-4 flex items-center text-primary">
        <span class="text-sm group-hover:translate-x-2 transition-transform duration-300"> 詳細を見る </span>
      </div>
    </div>
  </div>
</template>
