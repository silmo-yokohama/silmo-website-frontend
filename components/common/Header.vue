<template>
  <div>
    <!-- ヘッダー（最前面に表示） -->
    <header class="fixed top-0 left-0 w-full h-[60px] md:h-[50px] border-b border-black/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-dark z-[100]">
      <div class="max-w-container mx-auto px-4 h-full flex items-center justify-between">
        <!-- ハンバーガーメニューボタン -->
        <button class="p-2 hover:text-primary transition-colors duration-200" aria-label="Toggle menu" @click="isMenuOpen = !isMenuOpen">
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
            <span :class="['w-full h-0.5 bg-current transition-opacity duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
            <span :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
          </div>
        </button>

        <!-- ロゴ（中央寄せ） -->
        <NuxtLink to="/" class="absolute left-1/2 -translate-x-1/2 text-xl font-medium"> Portfolio </NuxtLink>

        <!-- カラーモードトグル -->
        <ClientOnly>
          <button class="p-2 hover:text-primary transition-colors duration-200" @click="toggleColorMode">
            <span v-if="colorMode.value === 'dark'">🌞</span>
            <span v-else>🌙</span>
          </button>
        </ClientOnly>
      </div>
    </header>

    <!-- フルスクリーンメニュー -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isMenuOpen" class="fixed inset-0 bg-[#FAFAFA] dark:bg-dark flex flex-col z-50">
        <!-- メインナビゲーション -->
        <nav class="flex-1 flex flex-col items-center justify-center">
          <TransitionGroup
            tag="div"
            class="space-y-8"
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
          >
            <NuxtLink
              v-for="(item, index) in navItems"
              :key="item.path"
              :to="item.path"
              :style="{ transitionDelay: `${index * 100}ms` }"
              class="block text-xl hover:text-primary transition-colors duration-200"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </TransitionGroup>
        </nav>

        <!-- メニューフッター -->
        <div class="py-8 border-t border-black/10 dark:border-white/10">
          <div class="flex justify-center items-center space-x-8">
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
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  const colorMode = useColorMode();
  const isMenuOpen = ref(false);

  const toggleColorMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  };

  const navItems = [
    { label: 'Profile', path: '/profile' },
    { label: 'Works', path: '/works' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  // メニューが開いているときはスクロールを無効化
  watch(isMenuOpen, (value) => {
    if (value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
</script>
