import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
// import Home from './views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import Persona from '@/views/Persona.vue';
import { personas } from '@/data/personas';
import store from '@/store';
import IPersona from './types/IPersona';

Vue.use(Router);

const personaRoutes: RouteConfig[] = personas.map((persona: IPersona): RouteConfig => ({
  path: `${persona.slug}`,
  name: persona.slug,
  component: Persona,
  beforeEnter(to, from, next): void {
    store.dispatch('app/hideFilters');
    store.dispatch('persona/setBySlug', persona.slug);
    next();
  },
}));

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  //   beforeEnter(to, any, next): void {
  //     console.log(routes);
  //     // alert(routes.toString());
  //     next();
  //   },
  // },
  ...personaRoutes,
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  // },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
