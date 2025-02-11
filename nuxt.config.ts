import path from 'path';
const apiBase = process.env.NUXT_PUBLIC_API_BASE as string;
const apiEndpoint = `${apiBase}${process.env.NUXT_PUBLIC_API_NAMESPACE as string}`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME,
      companyName: process.env.NUXT_PUBLIC_COMPANY_NAME,
      apiBase,
      apiEndpoint,
    },
  },
  // plugins: [vue()],
  devtools: { enabled: process.env.NUXT_ENV === 'development' },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts', '@nuxtjs/storybook', '@nuxt/image'],
  googleFonts: {
    families: {
      Inter: true,
      'JetBrains Mono': true,
      Oswald: {
        wght: [600],
      },
      'Zen Kaku Gothic New': true,
    },
  },
  tailwindcss: {
    cssPath: '~/assets/scss/main.scss',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    config: {},
    viewer: true,
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      title: process.env.NUXT_PUBLIC_APP_NAME,
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'format-detection', content: 'telephone=no' }],
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
  },
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  storybook: {
    enabled: process.env.NUXT_STORYBOOK === 'true',
  },
  image: {
    domains: ['https://images.unsplash.com/', apiBase],
  },
});
