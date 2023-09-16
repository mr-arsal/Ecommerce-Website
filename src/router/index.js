import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import LogIn from '../components/LogIn.vue'
import CategoryBox from '../components/CategoryBox.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/categories',
    name: 'CategoryBox',
    component: CategoryBox
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
