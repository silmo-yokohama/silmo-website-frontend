<template>
  <div class="min-h-screen pt-[60px] md:pt-[50px]">
    <!-- Hero Section -->
    <section class="relative min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-50px)] flex items-center">
      <!-- 背景画像 -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-[#FAFAFA]/90 dark:bg-dark/90"></div>
        <div
          class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop')] bg-center bg-cover opacity-10"
        ></div>
      </div>

      <div class="w-full">
        <div class="max-w-container mx-auto px-4">
          <h1 class="max-w-[800px] text-6xl font-oswald">Web <span class="text-primary">Design</span> + <span class="text-secondary">Development</span></h1>
          <p class="mt-8 max-w-[600px] text-lg">WEBアプリ開発 / WEBサイト制作 / LP制作 / デザイン制作</p>
        </div>
      </div>
    </section>

    <!-- Featured Works -->
    <section class="py-section-mobile md:py-section-desktop border-t border-black/10 dark:border-white/10">
      <div class="max-w-container mx-auto px-4">
        <h2 class="font-mono">Selected Works</h2>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <NuxtLink
            v-for="(work, i) in works"
            :key="i"
            to="/works/1"
            class="group border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:border-primary transition-colors duration-200"
          >
            <div class="flex items-center gap-2">
              <span :class="['px-2 py-1 text-xs rounded-md', categoryColors[work.category as keyof typeof categoryColors]]">
                {{ work.category }}
              </span>
            </div>
            <h3 class="mt-4 text-xl">{{ work.title }}</h3>
            <p class="mt-2 text-black/60 dark:text-white/60">
              {{ work.description }}
            </p>
            <div class="mt-4 flex items-center text-primary">
              <span class="group-hover:translate-x-2 transition-transform duration-200"> View Project </span>
            </div>
          </NuxtLink>
        </div>

        <!-- Works & Portfolio Links -->
        <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="/works"
            class="w-full sm:w-auto px-8 py-4 border border-black/10 dark:border-white/10 rounded-lg hover:border-primary hover:text-primary transition-colors duration-200 text-center"
          >
            View All Works
          </NuxtLink>
          <NuxtLink
            to="/portfolio"
            class="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 text-center"
          >
            View Portfolio
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-section-mobile md:py-section-desktop border-t border-black/10 dark:border-white/10">
      <div class="max-w-container mx-auto px-4">
        <h2 class="font-mono">Get in Touch</h2>
        <p class="mt-4 max-w-[600px] text-lg">新しいプロジェクトのご相談やお問い合わせをお待ちしています。 まずはお気軽にメッセージをお送りください。</p>
        <NuxtLink
          to="/contact"
          class="mt-8 inline-block border border-black/10 dark:border-white/10 rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors duration-200"
        >
          Contact Me
        </NuxtLink>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-black/10 dark:border-white/10">
      <div class="max-w-container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-black/60 dark:text-white/60">© 2024 Your Name. All rights reserved.</p>
          <div class="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-black/60 dark:text-white/60 hover:text-primary transition-colors duration-200"
            >
              <span class="sr-only">GitHub</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-black/60 dark:text-white/60 hover:text-primary transition-colors duration-200"
            >
              <span class="sr-only">Twitter</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-black/60 dark:text-white/60 hover:text-primary transition-colors duration-200"
            >
              <span class="sr-only">LinkedIn</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'default',
  });

  const categoryColors = {
    'Web App': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    Website: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    'Mobile App': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
    Design: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
  };

  const works = [
    {
      title: 'E-commerce Platform',
      description: 'Next.js と Supabase を使用したモダンなECサイト。',
      category: 'Web App',
    },
    {
      title: 'Corporate Website',
      description: 'アニメーションと高いパフォーマンスを両立した企業サイト。',
      category: 'Website',
    },
    {
      title: 'Fitness Tracking App',
      description: 'React Native で開発したクロスプラットフォームアプリ。',
      category: 'Mobile App',
    },
    {
      title: 'Design System',
      description: 'コンポーネントライブラリとデザインガイドライン。',
      category: 'Design',
    },
  ];
</script>
