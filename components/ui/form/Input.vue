<script setup lang="ts">
  import type { BaseFormProps } from '~/types/form';

  /**
   * テキスト入力フィールドコンポーネント
   * @description フォームで使用する標準的なテキスト入力フィールド
   * @component
   *
   * @example
   * ```vue
   * <Input
   *   v-model="value"
   *   id="email"
   *   type="email"
   *   placeholder="メールアドレスを入力"
   *   required
   * />
   * ```
   */
  type InputType = 'text' | 'email' | 'tel' | 'password';

  /**
   * 入力フィールドの型定義
   * @extends BaseFormProps 基本フォームプロパティを継承
   */
  interface Props extends BaseFormProps {
    /** 入力値 */
    modelValue: string;
    /**
     * 入力タイプ
     * @default 'text'
     */
    type?: InputType;
  }

  /** 許可する入力タイプ */

  withDefaults(defineProps<Props>(), {
    type: 'text',
  });

  /** 入力値の更新イベント */
  const emit = defineEmits<{
    'update:modelValue': [value: string];
  }>();

  /**
   * 入力値変更ハンドラ
   * @param event 入力イベント
   */
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
  };
</script>

<template>
  <div>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :class="[
        'w-full px-4 py-2.5 rounded-lg border bg-transparent transition-colors duration-200',
        error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-white/10 focus:border-primary',
      ]"
      @input="handleInput"
    />
    <p v-if="error" class="mt-2 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>
