/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import dark from './vuetify/dark.js';
import light from './vuetify/light.js';
import VueFullscreen from 'vue-fullscreen';

Vue.use(Vuetify);
Vue.use(VueFullscreen);

const MY_ICONS = {
  complete: 'betfont icon-188-close',
}

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light,
      dark
    },
  },
  icons: {
    values: MY_ICONS,
  },
});
