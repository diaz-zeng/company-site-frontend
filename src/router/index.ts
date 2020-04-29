/*
 * @Date: 2020-04-23 09:05:45
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-04-29 14:58:34
 * @FilePath: \company-site-frontend\src\router\index.ts
 */
import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE,
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
