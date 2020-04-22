import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  //针对GitHub Pages可能无法兼容history模式的调整，正式部署时需要改回来
  // mode:"history",
  mode: process.env.NODE_ENV === "production" ? "hash" : "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to: Route, from: Route, next: Function): any => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
