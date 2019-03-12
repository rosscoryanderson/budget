import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Budget from './views/Budget.vue'
//import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Budget
    },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: Signup
    // },
    // {
    //   path: '/budget',
    //   name: 'budget',
    //   component: Budget,
    // },
    {
      path: '*', redirect: '/'
    }
  ]
})


export default router