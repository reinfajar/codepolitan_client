import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Dashboard from '../views/dashboard'
import Form from '../views/form'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'MoneyTory'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard of MoneyTory',
      requiresAuth: true
    }
  },
  {
    path: '/new',
    name: 'New',
    component: Form,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !localStorage.token) {
    next('/')
  } else {
    next()
  }
})

export default router
