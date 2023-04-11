import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import('../views/Index.vue')
const Login = () => import('../views/Login.vue')
const Orders = () => import('../views/Orders.vue')
const Address = () => import('../views/Address.vue')
const AddAddress = () => import('../views/AddAddress.vue')
const Buy = () => import('../views/Buy.vue')
const Personal = () => import('../views/Personal.vue')
const Succeed = () => import('../views/Succeed.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: AddAddress
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/succeed',
      name: 'succeed',
      component: Succeed
    },
  ]
})

export default router
