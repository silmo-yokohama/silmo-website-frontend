/**
 * メール件名の選択肢を定義する型
 * @property value - 件名の識別子
 * @property label - 画面表示用の件名
 */
export interface MailSubject {
  value: string;
  label: string;
}

/**
 * お問い合わせフォームで使用する件名の選択肢一覧
 * 各項目はvalue(識別子)とlabel(表示名)のペアで構成
 */
export const mailSubjects: MailSubject[] = [
  { value: 'general', label: '一般的なお問い合わせ' },
  { value: 'project', label: 'プロジェクトのご相談' },
  { value: 'quote', label: 'お見積りのご依頼' },
  { value: 'bug', label: '不具合のご報告' },
  { value: 'other', label: 'その他' },
];
