<script setup lang="ts">
  /**
   * 通知ブロックを表示するコンポーネント
   * 情報、警告、エラーの3種類の表示バリエーションを持つ
   * @component Notice
   */

  import { Info, CircleX, CircleCheckBig, TriangleAlert } from 'lucide-vue-next';

  /**
   * 通知の種類を定義
   */
  type NoticeVariant = 'info' | 'warning' | 'error';

  /**
   * コンポーネントのプロパティ定義
   */
  interface Props {
    /** 通知のタイトル */
    title: string;
    /** 通知の種類 */
    variant: NoticeVariant;
    /** 表示するリストアイテム */
    list: string[];
    /** 追加のクラス名 */
    class?: string;
  }

  const props = defineProps<Props>();

  /**
   * バリアント別の色定義
   */
  const VARIANT_COLORS = {
    info: {
      wrapper: 'from-blue-50/80 to-blue-50/40 dark:from-blue-900/20 dark:to-blue-900/10 border-blue-100/50 dark:border-blue-800/50',
      icon: 'bg-blue-100 dark:bg-blue-900/50',
      text: 'text-blue-800 dark:text-blue-200',
    },
    warning: {
      wrapper: 'from-yellow-50/80 to-yellow-50/40 dark:from-yellow-900/20 dark:to-yellow-900/10 border-yellow-100/50 dark:border-yellow-800/50',
      icon: 'bg-yellow-100 dark:bg-yellow-900/50',
      text: 'text-yellow-800 dark:text-yellow-200',
    },
    error: {
      wrapper: 'from-red-50/80 to-red-50/40 dark:from-red-900/20 dark:to-red-900/10 border-red-100/50 dark:border-red-800/50',
      icon: 'bg-red-100 dark:bg-red-900/50',
      text: 'text-red-800 dark:text-red-200',
    },
  } as const;

  const BASE_WRAPPER_CLASS = 'py-6 px-4 md:px-6 mb-12 md:p-8 bg-gradient-to-br backdrop-blur-sm rounded-2xl border';
  const BASE_ICON_CLASS = 'flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full';

  const wrapperClass = computed(() => mergeClassNames(BASE_WRAPPER_CLASS, VARIANT_COLORS[props.variant].wrapper, props.class || ''));

  const iconClass = computed(() => mergeClassNames(BASE_ICON_CLASS, VARIANT_COLORS[props.variant].icon));

  const textClass = computed(() => VARIANT_COLORS[props.variant].text);
</script>

<template>
  <div :class="wrapperClass">
    <div class="flex items-center gap-4 mb-6 md:mb-8">
      <div :class="iconClass">
        <component :is="variant === 'info' ? Info : variant === 'warning' ? CircleX : TriangleAlert" class="w-6 h-6" :class="textClass" />
      </div>
      <h2 class="text-lg md:text-xl font-semibold" :class="textClass">
        {{ title }}
      </h2>
    </div>
    <ul class="flex flex-col list-none text-xs md:text-sm gap-2 m-0 p-0 ml-4">
      <li v-for="item in list" :key="item" class="flex justify-start items-center gap-4">
        <circle-check-big class="w-4 min-w-4 h-4 min-h-4 text-blue-400" />
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
