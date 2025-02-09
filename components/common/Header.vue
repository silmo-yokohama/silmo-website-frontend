<script setup lang="ts">
  const isMenuOpen = ref(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Profile', path: '/profile' },
    { label: 'Works', path: '/works' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  // Transitionのための遅延
  const delayCloseMenu = () => {
    setTimeout(() => {
      isMenuOpen.value = false;
    }, 200);
  };

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
    <header class="t fixed top-0 left-0 w-full h-[70px] md:h-[80px] border-b border-black/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-dark z-[100]">
      <div class="max-w-container mx-auto px-4 h-full flex items-center justify-between">
        <!-- ハンバーガーメニューボタン -->
        <ui-button-hamburger-button :is-menu-open="isMenuOpen" :set-is-menu-open="(state) => (isMenuOpen = state)" />

        <!-- ロゴ（中央寄せ） -->
        <h1 class="absolute left-1/2 -translate-x-1/2 text-xl font-medium">
          <nuxt-link to="/" class="">
            <span class="sr-only">SilMo</span>
            <ui-images-top-logo />
          </nuxt-link>
        </h1>

        <!-- カラーモードトグル -->
        <ui-button-theme-button />
      </div>
    </header>

    <!-- フルスクリーンメニュー -->
    <ui-menu-main-menu :is-menu-open="isMenuOpen">
      <!-- メインナビゲーション -->
      <ui-menu-list>
        <nuxt-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="block text-xl hover:text-primary transition-all duration-200"
          @click="delayCloseMenu"
        >
          {{ item.label }}
        </nuxt-link>
      </ui-menu-list>

      <!-- メニューフッター -->
      <ui-menu-footer />
    </ui-menu-main-menu>
  </div>
</template>
