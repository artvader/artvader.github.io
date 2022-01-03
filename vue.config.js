const config = {
  runtimeCompiler: true,
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/' + process.env.CI_PROJECT_NAME + '/'
      : '/',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'ru',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '@/styles/01_atoms/_common.scss';`,
      },
      sass: {
        prependData: `@import '@/styles/01_atoms/_04vuetify-variables.sass'`,
      },
    },
  },
  transpileDependencies: ['vuetify'],
};

module.exports = config;
