import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: resolve => require(['../views/Home.vue'], resolve)
    },
    {
      path: "/about",
      name: "about",
      component: resolve => require(['../views/About.vue'], resolve)
    }
  ]
});
