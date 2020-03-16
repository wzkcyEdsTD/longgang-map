import Vue from 'vue'
import Router from 'vue-router'
import lgCim from '../components/lg_cim/lgCim.vue'

// import lgCim from '../components/lg_cim/components/leftDiv'
// import lgCim from '../components/lg_cim/components/rightDiv'
// import lgCim from '../components/lg_cim/components/lgmap'





Vue.use(Router)

export default new Router({
    mode: "hash",
    routes:
      [
        {
          path: "/",
          name: "lgCim",
          component: lgCim
          // path: "/",
          // name: "Mobile",
          // component: Mobile
        }
      ]
  });