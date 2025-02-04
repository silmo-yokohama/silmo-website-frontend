import { tagColors } from '../constants/tags';

/**
 * タグのクラス名の型定義
 * @description
 * コンポーネントで使用可能なタグのクラス名の型を定義します
 */
export type TagClassName = (typeof tagColors)[keyof typeof tagColors];
