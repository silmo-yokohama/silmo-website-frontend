<script setup lang="ts">
  import type { BaseFormProps } from '~/types/form';

  /**
   * 複数行テキスト入力フィールドコンポーネント
   * @description テキストエリアの入力を管理し、v-modelと連携する
   *
   * @component
   * @example
   * ```vue
   * <Textarea
   *   v-model="text"
   *   id="description"
   *   placeholder="説明を入力"
   *   :required="true"
   *   :error="validationError"
   * />
   * ```
   */
  interface Props extends BaseFormProps {
    /**
     * 入力値
     * @default ''
     */
    modelValue: string;
  }

  const props = defineProps<Props>();

  /**
   * 入力値の更新イベント
   * @event update:modelValue
   */
  const emit = defineEmits<{
    'update:modelValue': [value: string];
  }>();

  // テキストエリアのベースクラス
  const baseClasses = ['w-full', 'px-4', 'py-2.5', 'rounded-lg', 'border', 'bg-transparent', 'transition-colors', 'duration-200', 'min-h-[160px]', 'resize-y'];

  // エラー状態に応じたボーダークラス
  const borderClasses = computed(() => (props.error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-white/10 focus:border-primary'));

  /**
   * テキストエリアの入力ハンドラ
   * @param event 入力イベント
   */
  const handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    emit('update:modelValue', target.value);
  };
</script>

<template>
  <div>
    <textarea :id="id" :value="modelValue" :placeholder="placeholder" :required="required" :class="[baseClasses, borderClasses]" @input="handleInput" />
    <p v-if="error" class="mt-2 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>
