<script setup lang="ts">
  interface Props {
    title: string;
    subtitle?: string;
    description?: string;
  }

  defineProps<Props>();
</script>
<template>
  <div class="relative py-24 mt-16 md:mt-20 overflow-hidden">
    <!-- Geometric background pattern -->
    <div class="absolute inset-0">
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white dark:from-gray-900/80 dark:to-gray-900 transition-colors" />

      <!-- Background pattern -->
      <div class="absolute inset-0 dark:opacity-30 transition-opacity page-title" />

      <!-- Accent circles -->
      <div class="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl transition-colors" />
      <div class="absolute -left-32 top-1/3 w-72 h-72 bg-primary/3 dark:bg-primary/5 rounded-full blur-3xl transition-colors" />
    </div>

    <!-- Main content -->
    <div class="container mx-auto px-4 relative">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Subtitle -->
        <div v-if="subtitle" class="mb-4">
          <span class="text-sm tracking-[0.25em] text-primary font-medium">
            {{ subtitle }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors font-oswald tracking-widest">
          {{ title }}
        </h1>

        <!-- Decorative line -->
        <div class="my-10 flex justify-center gap-2">
          <div class="w-20 h-1 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
          <div class="w-6 h-1 rounded-full bg-secondary/50"></div>
        </div>

        <!-- Description -->
        <p v-if="description" class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .page-title {
    background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300a197\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  }
</style>
