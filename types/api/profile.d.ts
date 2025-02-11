/**
 * プロフィールAPI関連の型定義
 * @description プロフィール情報取得APIのレスポンス型を定義します
 */

/**
 * 趣味情報の型定義
 */
export interface Hobby {
  hobby: string;
}

/**
 * 事業内容の型定義
 */
export interface BusinessContent {
  businessContent: string;
}

/**
 * 経歴情報の型定義
 */
export interface History {
  company: string;
  position: string;
  fromDate: string;
  toDate: string;
  description: string;
}

/**
 * スキル詳細情報の型定義
 */
export interface SkillDetail {
  id: number;
  name: string;
  slug: string;
  level: string;
}

/**
 * スキルカテゴリの型定義
 */
export interface Skill {
  id: number;
  name: string;
  slug: string;
  children: SkillDetail[];
}

/**
 * プロフィール情報の型定義
 */
export interface ProfileData {
  companyName: string;
  silmoDescription: string;
  hobbies: Hobby[];
  businessContents: BusinessContent[];
  histories: History[];
  skills: Skill[];
}

/**
 * 正常系レスポンスの型定義
 */
export interface SuccessResponse {
  data: ProfileData;
  statusCode: 200 | 201;
}

/**
 * エラー系レスポンスの型定義
 */
export interface ErrorResponse {
  error: string;
  statusCode: 500 | 404 | 403 | 401 | 400;
}

/**
 * APIレスポンス全体の型定義
 */
export type ProfileApiResponse = SuccessResponse | ErrorResponse;
