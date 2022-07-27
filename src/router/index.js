import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../views/UserList.vue'
import UserDetails from '../views/UserDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/:userId',
    name: 'userdetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/UserDetails.vue')
    component: UserDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
