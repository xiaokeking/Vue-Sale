// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import Index from './pages/Index'
import VueResource from 'vue-resource'
import Detail from './pages/Detail'
import OrderList from './pages/OrderList'
import Analysis from './pages/detail/analysis'
import Count from './pages/detail/count'
import Forecast from './pages/detail/forecast'
import Publish from './pages/detail/publish'


Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueResource);
Vue.use(VueRouter);
let router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/', component : Index},
    {path:'/orderlist', component : OrderList},
    {path:'/detail', component : Detail,redirect:'/detail/analysis',
       children:[
         {path : 'count',component : Count},
         {path : 'publish',component : Publish},
         {path : 'forecast',component : Forecast},
         {path : 'analysis',component : Analysis}
      ]
    }
  ]
});
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
