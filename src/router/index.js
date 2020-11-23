import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/self',
    name: 'Self',
    component: () => import(/* webpackChunkName: "self" */ '../views/Self.vue'),
  },
  {
    path: '/ya-map',
    name: 'YaMap',
    component: () => import(/* webpackChunkName: "map" */ '../views/YaMap.vue'),
  },
  {
    path: '/timer',
    name: 'Timer',
    component: () => import(/* webpackChunkName: "timer" */ '../views/Timer.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/task-const/' : '/',
  routes,
});

export default router;
