# 開発環境設定ガイド

## 目次

- [Prettier](#prettier)
- [ESLint](#eslint)
- [Tailwind CSS](#tailwind-css)
- [Vitest](#vitest)
- [TypeScript](#typescript)
- [Storybook](#storybook)
- [VSCode設定](#vscode設定)
- [その他の設定](#その他の設定)

## Prettier

### インストール

```bash
npm install --save-dev prettier prettier-plugin-vue
```

### 基本設定 (.prettierrc)

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 160,
  "trailingComma": "es5",
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "lf",
  "vueIndentScriptAndStyle": true,
  "singleAttributePerLine": false,
  "plugins": ["prettier-plugin-vue"]
}
```

### 除外設定 (.prettierignore)

```plaintext
.nuxt
.nitro
.cache
dist
node_modules
*.log
```

## ESLint

### インストール

```bash
npm install --save-dev eslint @nuxtjs/eslint-config-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-vue
```

### 基本設定 (.eslintrc.json)

```json
{
  "root": true,
  "extends": ["@nuxtjs/eslint-config-typescript", "plugin:vue/vue3-recommended", "prettier"],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/require-default-prop": "off",
    "vue/no-v-html": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-debugger": "warn"
  }
}
```

### 除外設定 (.eslintignore)

```plaintext
node_modules
.nuxt
dist
.nitro
.cache
*.log
```

## Tailwind CSS

### インストール

```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
```

### 基本設定 (tailwind.config.ts)

```typescript
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

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
          // ... カラーバリエーション
        },
        secondary: {
          DEFAULT: '#F8B62B',
          // ... カラーバリエーション
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in',
        'fade-out': 'fade-out 0.5s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
} satisfies Config;
```

### PostCSS設定 (postcss.config.js)

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### グローバルCSS (assets/css/main.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply antialiased;
  }
  body {
    @apply bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100;
  }
}

@layer components {
  .container {
    @apply mx-auto px-4 sm:px-6 lg:px-8;
  }
}
```

## Vitest

### インストール

```bash
npm install -D vitest happy-dom @vitejs/plugin-vue
```

### 基本設定 (vitest.config.ts)

```typescript
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/**',
        'dist/**',
        '.nuxt/**',
        '.output/**',
        'coverage/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/composables/**',
        '**/types/**',
        'test/**',
      ],
    },
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
```

## Storybook

### インストール

```bash
npm install -D @storybook/vue3 @storybook-vue/nuxt @storybook/addon-essentials @storybook/addon-links @storybook/addon-interactions @storybook/addon-themes @storybook/addon-a11y @storybook/addon-styling
```

### 基本設定 (.storybook/main.ts)

```typescript
import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
};

export default config;
```

### プレビュー設定 (.storybook/preview.ts)

```typescript
import type { Preview } from '@storybook-vue/nuxt';
import '../assets/css/main.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
      },
    },
  },
};

export default preview;
```

## VSCode設定

### 推奨拡張機能 (.vscode/extensions.json)

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "Vue.volar",
    "Vue.vscode-typescript-vue-plugin",
    "formulahendry.auto-rename-tag",
    "formulahendry.auto-close-tag",
    "christian-kohler.path-intellisense",
    "streetsidesoftware.code-spell-checker",
    "bradlc.vscode-tailwindcss",
    "csstools.postcss",
    "eamodio.gitlens",
    "mhutchie.git-graph",
    "usernamehw.errorlens",
    "oderwat.indent-rainbow",
    "aaron-bond.better-comments",
    "mechatroner.rainbow-csv",
    "mikestead.dotenv",
    "redhat.vscode-yaml",
    "vitest.explorer",
    "vitest.vitest-explorer"
  ]
}
```

### ワークスペース設定 (.vscode/settings.json)

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "css.validate": false,
  "editor.linkedEditing": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "files.eol": "\n",
  "prettier.requireConfig": true,
  "prettier.configPath": ".prettierrc",
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue"],
  "tailwindCSS.includeLanguages": {
    "vue": "html",
    "vue-html": "html"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "files.exclude": {
    "**/.git": true,
    "**/dist": true
  },
  "cSpell.customDictionaries": {
    "words": {
      "name": "words",
      "path": "${workspaceRoot}/.cspell/words.txt",
      "description": "Words used in this project",
      "addWords": true
    },
    "custom": true,
    "internal-terms": false
  }
}
```

## その他の設定

### スペルチェック設定 (.cspell/cspell.cjs)

```javascript
module.exports = {
  $schema: 'https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json',
  version: '0.2',
  dictionaries: ['words'],
  dictionaryDefinitions: [
    {
      name: 'words',
      path: './.cspell/words.txt',
      addWords: true,
    },
  ],
  ignorePaths: ['./words.txt'],
};
```

### Nuxt設定 (nuxt.config.ts)

```typescript
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    config: {},
    viewer: true,
  },
});
```
