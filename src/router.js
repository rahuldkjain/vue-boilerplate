import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Product from './components/Product.vue';
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'




Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/list',
      name: 'ProductList',
      component: ProductList,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
