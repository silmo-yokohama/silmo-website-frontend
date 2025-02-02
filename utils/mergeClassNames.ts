/**
 * Tailwindクラス名をマージするユーティリティ関数
 * @param classes - マージするクラス名（文字列、オブジェクト、配列、falsy値など）
 * @returns マージされたクラス名の文字列
 * @example
 * mergeClassNames('px-4', 'py-2', condition && 'bg-blue-500')
 * mergeClassNames({ 'bg-blue-500': isActive, 'text-white': true })
 */
import clsx from 'clsx';

export const mergeClassNames = (...classes: Parameters<typeof clsx>) => clsx(...classes);
