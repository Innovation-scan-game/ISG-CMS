import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import CardList from '../components/cards/CardList.vue';
import CreateCard from '../components/cards/CreateCard.vue';
import EditCard from '../components/cards/EditCard.vue';
import UserList from '../components/users/UserList.vue';
import CreateUser from '../components/users/CreateUser.vue';
import EditUser from '../components/users/EditUser.vue';
import Login from '../components/Login.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home , meta: {requiresAuth: true}},
    { path: '/cards', component: CardList , meta: {requiresAuth: true}},
    { path: '/login', component: Login , name: 'Login'},
    { path: '/createcard', component: CreateCard , meta: {requiresAuth: true}},
    { path: '/editcard/:id', component: EditCard, props: true  , meta: {requiresAuth: true}},
    { path: '/users', component: UserList },     
    { path: '/createuser', component: CreateUser },
    { path: '/edituser/:id', component: EditUser, props: true  },
  ]
})

export default router
