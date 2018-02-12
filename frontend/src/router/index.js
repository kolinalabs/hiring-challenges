import Vue from 'vue'
import VueRouter from 'vue-router'

import Metric from '@/components/Metric'
import NotFound from '@/components/NotFound'
import User from '@/components/User'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/metrics',
      name: 'Métricas',
      component: Metric
    },
    {
      path: '/users',
      name: 'Usuários',
      component: User
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
