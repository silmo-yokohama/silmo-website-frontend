/**
 * フォーム要素の基本プロパティを定義するインターフェース
 * すべてのフォーム要素コンポーネントの共通プロパティとして使用する
 *
 * @interface BaseFormProps
 */
export interface BaseFormProps {
  /** フォーム要素を一意に識別するID */
  id: string;
  /** 入力欄に表示する補助テキスト */
  placeholder?: string;
  /** 入力必須の場合true */
  required?: boolean;
  /** バリデーションエラー時のメッセージ */
  error?: string;
}

/**
 * フォーム要素のラベルコンポーネントのプロパティを定義するインターフェース
 *
 * @interface BaseLabelProps
 */
export interface BaseLabelProps {
  /** ラベルに表示するテキスト */
  text: string;
  /** 関連付けるフォーム要素のID */
  htmlFor: string;
  /** 必須項目を示すマークを表示する場合true */
  required?: boolean;
}

/**
 * お問い合わせフォームのデータ構造を定義するインターフェース
 *
 * @interface ContactForm
 */
export interface ContactForm {
  /** 問い合わせ者の氏名 */
  name: string;
  /** 問い合わせ者のメールアドレス */
  email: string;
  /** 問い合わせの件名 */
  subject: string;
  /** 問い合わせの本文 */
  message: string;
  /** スパム防止用のハニーポットフィールド */
  honeypot: string;
  /** フォーム送信時のタイムスタンプ（UNIX時間） */
  timestamp: number;
}
