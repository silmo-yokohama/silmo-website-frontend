import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

/**
 * Tailwind CSS設定ファイル
 *
 * @description
 * - カスタムカラーパレット（primary, secondary）の定義
 * - フォントファミリーの設定
 * - カスタムアニメーションの定義
 * - Tailwindプラグインの設定
 */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './stories/**/*.{js,ts,jsx,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A197',
          50: '#E6F7F6',
          100: '#CCF0ED',
          200: '#99E1DC',
          300: '#66D2CA',
          400: '#33C3B9',
          500: '#00A197',
          600: '#008E85',
          700: '#007A73',
          800: '#006761',
          900: '#00544F',
          950: '#004843',
        },
        secondary: {
          DEFAULT: '#F8B62B',
          50: '#FEF6E6',
          100: '#FEEECE',
          200: '#FCD77D',
          300: '#FAC14B',
          400: '#F8B62B',
          500: '#F0A70C',
          600: '#CE8F0A',
          700: '#AB7708',
          800: '#895F07',
          900: '#764F05',
          950: '#633F04',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in',
        'fade-out': 'fade-out 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
} satisfies Config;
