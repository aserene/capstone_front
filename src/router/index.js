import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowView from '../views/ShowView.vue'
import NewView from '../views/NewView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/view/:id',
    name: 'view',
    component: ShowView
  },
  {
    path: '/new',
    name: 'new',
    component: NewView
  }
]

const router = new VueRouter({
  routes
})

export default router
