import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import CardList from '../components/cards/CardList.vue';
import CreateCard from '../components/cards/CreateCard.vue';
import EditCard from '../components/cards/EditCard.vue';
import UserList from '../components/users/UserList.vue';
import CreateUser from '../components/users/CreateUser.vue';
import EditUser from '../components/users/EditUser.vue';
import Login from '../components/Login.vue';
import { useLoginStore } from '@/stores/loginStore';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/api/cms', component: Home , meta: {requiresAuth: true}},
    { path: '/api/cms//cards', component: CardList , meta: {requiresAuth: true}},
    { path: '/api/cms/login', component: Login , name: 'Login'},
    { path: '/api/cms/createcard', component: CreateCard , meta: {requiresAuth: true}},
    { path: '/api/cms/editcard/:id', component: EditCard, props: true  , meta: {requiresAuth: true}},
    { path: '/api/cms/users', component: UserList },     
    { path: '/api/cms/createuser', component: CreateUser },
    { path: '/api/cms/edituser/:id', component: EditUser, props: true  },
    { path: '/api/cms/editcard/:id', component: EditCard, props: true  , meta: {requiresAuth: true}}

  ]
})


router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useLoginStore();

  if (authRequired && !auth.isLoggedIn) {
      auth.returnUrl = to.fullPath;
      return '/api/cms/login';
  }
});

export default router
