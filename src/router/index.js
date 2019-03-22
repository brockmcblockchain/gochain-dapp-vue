import Vue from 'vue'
import Router from 'vue-router'
import CounterDapp from '@/components/counter-dapp'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'counter-dapp',
    component: CounterDapp
  }]
})
