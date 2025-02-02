<script setup lang="ts">
  const isMenuOpen = ref(false);

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
<template>
  <div>
    <!-- ヘッダー（最前面に表示） -->
    <header class="fixed top-0 left-0 w-full h-[70px] md:h-[80px] border-b border-black/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-dark z-[100]">
      <div class="max-w-container mx-auto px-4 h-full flex items-center justify-between">
        <!-- ハンバーガーメニューボタン -->
        <ui-button-hamburger-button :is-menu-open="isMenuOpen" :set-is-menu-open="(state) => (isMenuOpen = state)" />

        <!-- ロゴ（中央寄せ） -->
        <nuxt-link to="/" class="absolute left-1/2 -translate-x-1/2 text-xl font-medium"> <ui-images-top-logo /> </nuxt-link>

        <!-- カラーモードトグル -->
        <ui-button-theme-button />
      </div>
    </header>

    <!-- フルスクリーンメニュー -->
    <ui-menu-main-menu :is-menu-open="isMenuOpen">
      <!-- メインナビゲーション -->
      <ui-menu-list>
        <nuxt-link
          v-for="(item, index) in navItems"
          :key="item.path"
          :to="item.path"
          :style="{ transitionDelay: `${index * 100}ms` }"
          class="block text-xl hover:text-primary transition-colors duration-200"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </nuxt-link>
      </ui-menu-list>

      <!-- メニューフッター -->
      <ui-menu-footer />
    </ui-menu-main-menu>
  </div>
</template>
