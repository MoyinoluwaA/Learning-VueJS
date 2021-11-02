import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddBook from '../views/AddBook.vue'
import BookDetails from '../views/BookDetails.vue'
import RecycleBin from '../views/RecycleBin.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/book-details/:id',
    name: 'BookDetails',
    component: BookDetails
  },
  {
    path: '/recycle-bin',
    name: 'RecycleBin',
    component: RecycleBin
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router