/**
 * PostCSS設定ファイル
 *
 * @description
 * - Tailwind CSSの設定
 * - ベンダープレフィックスの自動付与（autoprefixer）
 */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
