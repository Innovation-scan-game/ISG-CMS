import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import ProductList from '../components/products/ProductList.vue';
import CreateProduct from '../components/products/CreateProduct.vue';
import EditProduct from '../components/products/EditProduct.vue';
import UserList from '../components/users/UserList.vue';
import CreateUser from '../components/users/CreateUser.vue';
import Login from '../components/Login.vue';
import EditUser from '../components/users/EditUser.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: ProductList },
    { path: '/users', component: UserList },
    { path: '/login', component: Login },
    { path: '/createproduct', component: CreateProduct },
    { path: '/editproduct/:id', component: EditProduct, props: true  },
    { path: '/createuser', component: CreateUser },
    { path: '/edituser/:id', component: EditUser, props: true  },
  ]
})

export default router
