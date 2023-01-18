import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import CardList from '../components/cards/CardList.vue';
import CreateCard from '../components/cards/CreateCard.vue';
import EditCard from '../components/cards/EditCard.vue';
import Login from '../components/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Login },
    { path: '/cards', component: CardList },
    { path: '/login', component: Login },
    { path: '/createcard', component: CreateCard },
    { path: '/editcard/:id', component: EditCard, props: true  }
  ]
})

export default router
