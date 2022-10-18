export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico" 
      },
      { rel: "stylesheet",
        href: "/css/bootstrap.min.css" 
      },
      { rel: "stylesheet",
        href: "/css/style.css" 
      }
  ],
  script: [
    {
      src: '/js/bootstrap.bundle.min.js',
      type: 'text/javascript'
    },
    {
      src: '/js/main.js',
      type: 'text/javascript'
    }
  ]
  },
  

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/static/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
  ],

  
  

  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        dir: 'ltr'
      },
      {
        code: 'ar',
        file: 'ar.json',
        dir: 'rtl'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en',
      defaultDirection: 'ltr',
    }
  },

  plugins: [                                                                  
    '~/plugins/i18n.js',                                                  
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // buildModules: ['@nuxtjs/color-mode'],


};