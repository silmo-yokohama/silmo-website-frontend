<script setup lang="ts">
  import type { BaseFormProps } from '~/types/form';

  /**
   * セレクトボックスコンポーネント
   * @description フォームで使用するセレクトボックスを提供する
   *
   * @example
   * ```vue
   * <Select
   *   v-model="selectedValue"
   *   :options="[
   *     { value: '1', label: 'オプション1' },
   *     { value: '2', label: 'オプション2' }
   *   ]"
   * />
   * ```
   */

  /**
   * セレクトボックスのオプション型定義
   */
  interface SelectOption {
    /** オプションの値 */
    value: string;
    /** オプションのラベル */
    label: string;
  }

  /**
   * コンポーネントのプロパティ定義
   */
  interface Props extends BaseFormProps {
    /** 現在選択されている値 */
    modelValue: string;
    /** セレクトボックスのオプション一覧 */
    options: SelectOption[];
  }

  defineProps<Props>();

  defineEmits<{
    /** 選択値の更新イベント */
    'update:modelValue': [value: string];
  }>();
</script>

<template>
  <div>
    <select
      :id="id"
      :value="modelValue"
      :required="required"
      :class="[
        'w-full px-4 py-2.5 rounded-lg border bg-transparent transition-colors duration-200',
        error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-white/10 focus:border-primary',
      ]"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option value="" disabled class="text-sm text-gray-500 dark:bg-dark">
        {{ placeholder || '選択してください' }}
      </option>
      <option v-for="option in options" :key="option.value" :value="option.value" class="text-sm dark:text-slate-200 dark:bg-dark">
        {{ option.label }}
      </option>
    </select>
    <p v-if="error" class="mt-2 text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>
