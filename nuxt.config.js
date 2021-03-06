export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
<<<<<<< HEAD
=======
  styleResources: {
    stylus: [
      '~/common/css/mixins.styl',
      '~/common/css/common.styl'
    ]
  },
>>>>>>> s
  css: [
    'swiper/css/swiper.css'
  ],
  styleResources: {
    stylus: [
      '@/common/css/mixins.styl',
      '@/common/css/common.styl'
    ],
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/axios',
    { src: '@/plugins/filters.js', ssr: false },
    { src: '@/plugins/nuxt-swiper-plugin', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  axios: {
    // proxyHeaders: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
