import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import CardList from '../components/cards/CardList.vue';
import CreateCard from '../components/cards/CreateCard.vue';
import EditCard from '../components/cards/EditCard.vue';
import Login from '../components/Login.vue';
import { useLoginStore } from '@/stores/loginStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home , meta: {requiresAuth: true}},
    { path: '/cards', component: CardList , meta: {requiresAuth: true}},
    { path: '/login', component: Login , name: 'Login'},
    { path: '/createcard', component: CreateCard , meta: {requiresAuth: true}},
    { path: '/editcard/:id', component: EditCard, props: true  , meta: {requiresAuth: true}}
  ]
})


router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useLoginStore();

  if (authRequired && !auth.isLoggedIn) {
      auth.returnUrl = to.fullPath;
      return '/login';
  }
});

export default router
