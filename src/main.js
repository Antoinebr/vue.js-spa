import Vue from 'vue'
import VueRouter from 'vue-router';
import VueHead from 'vue-head'

// templates 
import App from './App.vue'
import productList from './productlist.vue'
import product from './product.vue'
import aboutUs from './about-us.vue'
import search from './search.vue'

// uses
Vue.use(VueHead)
Vue.use(VueRouter);

const routes = [
   {
    path : '/',
    component : productList,
    //redirect : '/products'
  },
  {
    path : '/products',
    component : productList,
  },
  {
    path : '/products/:id',
    component : product
  },
  {
    path : '/about-us',
    component : aboutUs
  },
  {
    path : '/search',
    component : search
  }
];

const router = new VueRouter({mode: 'history',routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
