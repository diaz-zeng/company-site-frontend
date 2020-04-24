import { RouteConfig } from "vue-router";
const Container = () =>
  import(/* webpackChunkName: "Index" */ "../views/Container.vue");
const NotFound = () =>
  import(/* webpackChunkName: "Index" */ "../views/NotFound.vue");
const Index = () =>
  import(/* webpackChunkName: "Index" */ "../views/Index.vue");
const About = () =>
  import(/* webpackChunkName: "About" */ "../views/About.vue");
const CustomSoftware = () =>
  import(/* webpackChunkName: "Service" */ "../views/CustomSoftware.vue");
const SoftwareOutsourcing = () =>
  import(/* webpackChunkName: "Service" */ "../views/SoftwareOutsourcing.vue");
const SoftwareTest = () =>
  import(/* webpackChunkName: "Service" */ "../views/SoftwareTest.vue");
const Rpa = () =>
  import(/* webpackChunkName: "Solutions" */ "../views/Rpa.vue");
const Internet = () =>
  import(/* webpackChunkName: "Solutions" */ "../views/Internet.vue");
const Cooperation = () =>
  import(/* webpackChunkName: "Cooperation" */ "../views/Cooperation.vue");
const Join = () => import(/* webpackChunkName: "Join" */ "../views/Join.vue");
const Sys = () =>
  import(/* webpackChunkName: "Solutions" */ "../views/Sys.vue");
const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Container,
    children: [
      {
        path: "",
        name: "index",
        component: Index,
        meta: {
          title: "数和信息技术(上海)有限公司"
        }
      },
      {
        path: "about",
        name: "about",
        component: About,
        meta: {
          title: "关于我们"
        }
      },
      {
        path: "service/custom_software",
        name: "customSoftware",
        component: CustomSoftware,
        meta: {
          title: "定制软件开发"
        }
      },
      {
        path: "service/software_outsourcing",
        name: "softwareOutsourcing",
        component: SoftwareOutsourcing,
        meta: {
          title: "全球软件外包"
        }
      },
      {
        path: "service/software_test",
        name: "softwareTest",
        component: SoftwareTest,
        meta: {
          title: "软件测试及第三方认证测试"
        }
      },
      {
        path: "solutions/rpa",
        name: "rpa",
        component: Rpa,
        meta: {
          title: "RPA业务流程自动化"
        }
      },
      {
        path: "solutions/internet",
        name: "internet",
        component: Internet,
        meta: {
          title: "工控设备物联网"
        }
      },
      {
        path: "service/cooperation",
        name: "cooperation",
        component: Cooperation,
        meta: {
          title: "联系我们"
        }
      },
      {
        path: "service/join",
        name: "join",
        component: Join,
        meta: {
          title: "加入我们"
        }
      },
      {
        path: "solutions/sys",
        name: "sys",
        component: Sys,
        meta: {
          title: "流程行业系统集成"
        }
      }
    ]
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
    meta: {
      title: "Sorry! Page Not Found!"
    }
  }
];

export default routes;
