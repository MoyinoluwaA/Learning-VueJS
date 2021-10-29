import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard'),
    children: [
      {
        path: 'dashboard-home',
        name: 'dashboard-home',
        component: () => import('../views/Dashboard/Home.vue')
      },
      {
        path: 'user-dashboard',
        name: 'user-dashboard',
        component: () => import('../views/Dashboard/UserDashboard.vue'),
        children: [
          {
            path: ':id',
            name: 'single-user',
            component: () => import ('../views/Dashboard/SingleUser.vue')
          }
        ]
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
