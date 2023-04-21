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
      meta: { auth: false}
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      meta: { auth: false}
    },
    {
      path: '/address',
      name: 'address',
      component: Address,
      meta: { auth: false}
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: AddAddress,
      meta: { auth: false}
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy,
      meta: { auth: false}
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
      meta: { auth: false}
    },
    {
      path: '/succeed',
      name: 'succeed',
      component: Succeed,
      meta: { auth: false}
    },
  ]
})

router.beforeEach((
  to,from,next)=>{
    if(to.meta.auth) {
      next('/login')
    }
    else{
      next()
    }
  }
  )
export default router
