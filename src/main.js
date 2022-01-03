import Vue from 'vue'
import App from './App.vue'
import { i18n } from './i18n'
import router from './router'
import { Trans } from './plugins/Translation'
import store from './store'
import vuetify from './plugins/vuetify';



Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app');
