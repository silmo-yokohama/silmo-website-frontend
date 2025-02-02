// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NUXT_ENV === 'development' },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts'],
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
    cssPath: '~/assets/css/tailwind.css',
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
});
