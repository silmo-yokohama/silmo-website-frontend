/**
 * タグの色定義
 * @description タグコンポーネントで使用する色の定義
 */

// カラーリスト
export type ColorName = 'red' | 'blue' | 'green' | 'yellow' | 'gray' | 'purple' | 'slate';

// ダミーのクラス使用（Tailwindの静的解析用）
const dummyClasses = {
  red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
  green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
  gray: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
  slate: 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100',
};

// 実際に使用するクラス定義
export const colorClasses = {
  red: dummyClasses.red,
  blue: dummyClasses.blue,
  green: dummyClasses.green,
  yellow: dummyClasses.yellow,
  gray: dummyClasses.gray,
  purple: dummyClasses.purple,
  slate: dummyClasses.slate,
} as const;

// Tailwindの静的解析用のダミー要素
if (process.env.NODE_ENV === 'development') {
  const dummy = document.createElement('div');
  Object.values(dummyClasses).forEach((className) => {
    dummy.className = className;
  });
}
