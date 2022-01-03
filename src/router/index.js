import Vue from 'vue';
import VueRouter from 'vue-router';
import { Trans } from '@/plugins/Translation';

function load(component) {
  // '@' is aliased to src/components
  return () => import(`@/views/${component}.vue`);
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/:locale/',
    component: {
      template: '<router-view></router-view>',
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'Home',
        component: load('Home'),
      },
      {
        path: '/:locale/upload',
        name: 'Upload Page',
        component: load('UploadPage'),
      },
      {
        path: '/:locale/theme',
        name: 'Theme Page',
        component: load('ChangeTheme'),
      },
      {
        path: '/:locale/svg',
        name: 'SVG Icons',
        component: load('SVGIcons'),
      },
      {
        path: '/:locale/image',
        name: 'SVG Icons',
        component: load('Image'),
      },
      {
        path: '/:locale/fullscreen',
        name: 'fullscreen',
        component: load('Fullscreen'),
      },
    ],
  },
  {
    path: '*',
    redirect() {
      return Trans.defaultLocale;
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
