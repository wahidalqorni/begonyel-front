import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage'
import ListProduct from '../views/ListProduct'
import ProductDetail from '../views/ProductDetail'
import Keranjang from '../views/Keranjang'
import Succes from '../views/Succes'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/List-Product',
    name: 'ListProduct',
    component: ListProduct
  },
  {
    path: '/Keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
  {
    path: '/Product-Detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/Succes',
    name: 'Succes',
    component: Succes
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
