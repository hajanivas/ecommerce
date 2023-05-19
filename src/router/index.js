import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import ProductList from '../components/ProductList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/list',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/details',
    name: 'ProductDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Details" */ '../components/ProductDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
