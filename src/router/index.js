import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
const Detail = () => import('@/views/detail/Detail')

Vue.use(VueRouter)

// 防止多次点击相同路由控制台报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      showTab: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showTab: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      showTab: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showTab: true
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      showTab: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
