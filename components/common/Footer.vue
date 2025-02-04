<script setup lang="ts">
  import { socialMediaLinks } from '@/constants/links';
  const config = useRuntimeConfig();
  const currentYear = new Date().getFullYear();
  const appName = config.public.companyName;
</script>
<template>
  <!-- Footer -->
  <footer class="py-8 border-t border-black/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-dark">
    <div class="max-w-container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-black/60 dark:text-white/60">© {{ `${currentYear} ${appName}` }} . All rights reserved.</p>
        <div class="flex items-center space-x-6">
          <nuxt-link
            :to="socialMediaLinks.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black/60 dark:text-white/60 hover:text-primary transition-colors duration-200"
          >
            <span class="sr-only">GitHub</span>
            <asset-icon-github />
          </nuxt-link>
          <nuxt-link
            :to="socialMediaLinks.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black/60 dark:text-white/60 hover:text-primary transition-colors duration-200"
          >
            <span class="sr-only">Twitter</span>
            <asset-icon-twitter />
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
