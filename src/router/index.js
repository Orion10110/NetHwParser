import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Hardware from '@/components/Hardware'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hardware/c/:c/p/:p/s/:s',
      name: 'Hardware',
      component: Hardware
    }
  ]
})
