import { getHighlighter } from 'shiki';

export default {
  head: {
    title: 'Josué Ayala | Blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@joscode' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/main.css'],

  plugins: [
    '@/plugins/firebase.client.ts',
    '@/plugins/filters.ts',
    '@/plugins/dayjs.ts',
    '@/plugins/v-click-outside.client.ts',
    '@/plugins/v-sanitize.client.ts',
  ],

  components: {
    global: true,
    dirs: [
      '@/components/ui',
      '@/components/ui/typography',
      '@/components/ui/dropdown',
      '@/components/blog',
      '@/components/blog/using-lottie-files-with-nuxtjs',
      '@/components/layout',
    ],
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@nuxtjs/svg',
    '@nuxtjs/google-fonts',
  ],

  modules: ['@nuxtjs/axios', '@nuxt/content'],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  googleFonts: {
    display: 'swap',
    preload: true,
    download: true,
    overwriting: false,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'JetBrains Mono': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  content: {
    markdown: {
      async highlighter() {
        const highlighter = await getHighlighter({
          theme: 'dracula',
        });
        return (code, lang) => highlighter.codeToHtml(code, lang);
      },
    },
  },
};
