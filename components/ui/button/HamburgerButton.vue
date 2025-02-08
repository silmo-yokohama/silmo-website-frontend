<script setup lang="ts">
  /**
   * ハンバーガーメニューの開閉を制御するボタンコンポーネント
   * @component
   *
   * @prop {boolean} isMenuOpen - メニューの開閉状態
   * @prop {(isMenuOpen: boolean) => void} setIsMenuOpen - メニューの開閉状態を更新する関数
   */
  defineProps<{
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
  }>();
</script>

<template>
  <button class="p-2 text-primary" aria-label="メニューを開閉" @click="setIsMenuOpen(!isMenuOpen)">
    <div class="relative flex h-5 w-6 flex-col justify-between">
      <span :class="['h-0.5 w-full bg-current transition-all duration-300', isMenuOpen ? 'translate-y-[0.55rem] rotate-45 text-secondary-700' : '']" />
      <span :class="['h-0.5 w-full bg-current transition-all duration-300', isMenuOpen ? 'opacity-0' : '']" />
      <span :class="['h-0.5 w-full bg-current transition-all duration-300', isMenuOpen ? '-translate-y-[0.55rem] -rotate-45 text-secondary-700' : '']" />
    </div>
  </button>
</template>
