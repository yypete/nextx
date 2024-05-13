import { createRouter, createWebHistory } from 'vue-router'
import Collect from './views/nav/collect.vue'
import Class from './views/nav/class.vue'

const routes = [
{ path: '/Collect', component: Collect  },
{ path: '/Class', component: Class }
]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router
