import Vue from 'vue'
import App from './App'
import router from './router'

import Table from '@/components/collection/Table'

Vue.component('Table', Table)

new Vue({
  el: '#app',
  router,
  components: {
    App,
    Table
  },
  template: '<App/>',
  render: h => h(App)
})
