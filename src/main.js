import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import Restaurants from "./components/Restaurants.vue";
import RestaurantDetail from "./components/RestaurantDetail.vue";
import HelloWorld from "./components/HelloWorld.vue";

// configs...
Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.use(VueRouter)

// config du router :
const router = new VueRouter({
  routes:[
    { 
      path: '/', 
      component: HelloWorld, 
      props:{
        msg:" site des restaurants"
      } 
    },
    { 
      path: '/restaurants', 
      component: Restaurants 
    },
    { 
      path: '/restaurant/:id', 
      component: RestaurantDetail 
    },
  ],
  mode:'history'
});

new Vue({
  router,
  render: h => h(App), // si router pas de rendu de composant
}).$mount('#app')
