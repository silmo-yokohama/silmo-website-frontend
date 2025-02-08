/**
 * フォームのエラーメッセージを定義する定数
 * @remarks
 * - フォームの各フィールドのバリデーションエラー時に表示するメッセージを管理
 * - メッセージは全て日本語で統一
 */
export type FormErrorMessages = {
  /** 名前未入力時のエラーメッセージ */
  REQUIRED_NAME: string;
  /** メールアドレス未入力時のエラーメッセージ */
  REQUIRED_EMAIL: string;
  /** メールアドレス形式不正時のエラーメッセージ */
  INVALID_EMAIL: string;
  /** お問い合わせ内容未選択時のエラーメッセージ */
  REQUIRED_SUBJECT: string;
  /** メッセージ未入力時のエラーメッセージ */
  REQUIRED_MESSAGE: string;
  /** メッセージ文字数不足時のエラーメッセージ */
  MIN_LENGTH_MESSAGE: string;
};

export const FORM_ERROR_MESSAGES: FormErrorMessages = {
  REQUIRED_NAME: 'お名前を入力してください',
  REQUIRED_EMAIL: 'メールアドレスを入力してください',
  INVALID_EMAIL: '有効なメールアドレスを入力してください',
  REQUIRED_SUBJECT: 'お問い合わせ内容を選択してください',
  REQUIRED_MESSAGE: 'メッセージを入力してください',
  MIN_LENGTH_MESSAGE: 'メッセージは10文字以上で入力してください',
} as const;
