<script setup lang="ts">
  /**
   * ボタンコンポーネント
   *
   * @description 汎用的なボタンコンポーネント。
   * 様々なスタイルバリエーションとサイズに対応。
   * toプロパティが指定された場合は自動的にnuxt-linkとして描画。
   */

  interface ButtonProps {
    /** ボタンの種類 */
    variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'slate';
    /** ボタンのサイズ */
    size?: 'sm' | 'md' | 'lg';
    /** アイコンの有無 */
    hasIcon?: boolean;
    /** 無効状態 */
    disabled?: boolean;
    /** カスタムクラス */
    class?: string;
    /** クリックイベントハンドラ */
    onClick?: () => void;
    /** リンク先のパス（指定時はnuxt-linkとして描画） */
    to?: string;
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'default',
    size: 'md',
    hasIcon: false,
    disabled: false,
  });

  // ベースとなるクラスを生成
  const baseClass = computed(() => {
    const classes = ['btn'];

    // バリアントに応じたクラスを追加
    if (props.variant !== 'default') {
      classes.push(`btn-${props.variant}`);
    }

    // サイズクラスを追加
    if (props.size !== 'md') {
      classes.push(`btn-${props.size}`);
    }

    // アイコン用クラスを追加
    if (props.hasIcon) {
      classes.push('btn-icon !inline-flex');
    }

    return classes.join(' ');
  });

  // 最終的なクラスを生成
  const mergedClasses = computed(() => [baseClass.value, props.class].filter(Boolean).join(' '));

  // class属性を除外した残りの属性を取得
  const attrs = useAttrs();
  const filteredAttrs = computed(() => {
    const { class: _, ...rest } = attrs;
    return rest;
  });
</script>

<template>
  <nuxt-link v-if="to" :to="to" :class="mergedClasses" v-bind="filteredAttrs" :disabled="disabled">
    <slot />
  </nuxt-link>
  <button v-else :class="mergedClasses" v-bind="filteredAttrs" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>
