export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  server: {
    port: process.env.APP_PORT
  },

  publicRuntimeConfig: {
    apiResource: process.env.API_URL_RESOURCE,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cs sagor',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-slick-carousel', ssr: true},
    {src: '~/plugins/vue-sweetalert.js', mode: 'client'},
    {src: '~/plugins/vee-validate.js', mode: 'client'},
    {src: '~/plugins/v-toaster.js', mode: 'client'},
    {src: '~/plugins/vue-lazytube.js', mode: 'client'},
    {src: '~/plugins/vue-infinite-loading.js', mode: 'client'},

    {src: '~/mixins/mixin.js'},
    {src: '~/mixins/axios.js'},
    {src: '~/mixins/can.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    ['@nuxtjs/vuetify', {
      customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
      optionsPath: '~/configs/vuetify.js',
      treeShake: true,
      defaultAssets: {
        font: false
      }
    }],
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true

    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  axios: {
    baseURL: process.env.API_URL ? process.env.API_URL : process.env.API_URL,
    timeout: 15000000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },

  auth: {
    strategies: {
      auth: {
        scheme: '~/schemes/auth',
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: {url: 'login', method: 'post'},
          logout: false,
          user: {url: 'user', method: 'get'}
        }
      }
    },
    redirect: {
      // login: '/auth/signin',
      // logout: '/auth/signin',
      // callback: '/auth/signin',
      // home: '/'
    }
  },
  router: {
    //middleware: ['auth']

    // middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate'
    ]
  }
}
