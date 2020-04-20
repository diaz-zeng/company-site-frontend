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
  import(/* webpackChunkName: "Solutions/" */ "../views/Rpa.vue");
const Internet = () =>
  import(/* webpackChunkName: "Solutions/" */ "../views/Internet.vue");
const Cooperation = () =>
  import(/* webpackChunkName: "Cooperation/" */ "../views/Cooperation.vue");
const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Container,
    children: [
      {
        path: "",
        name: "index",
        component: Index
      },
      {
        path: "about",
        name: "about",
        component: About
      },
      {
        path: "service/custom_software",
        name: "customSoftware",
        component: CustomSoftware
      },
      {
        path: "service/software_outsourcing",
        name: "softwareOutsourcing",
        component: SoftwareOutsourcing
      },
      {
        path: "service/software_test",
        name: "softwareTest",
        component: SoftwareTest
      },
      {
        path: "solutions/rpa",
        name: "rpa",
        component: Rpa
      },
      {
        path: "solutions/internet",
        name: "internet",
        component: Internet
      },
      {
        path: "cooperation",
        name: "cooperation",
        component: Cooperation
      }
    ]
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
