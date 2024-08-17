import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import product from "@/modules/Product/router";
import dashboard from "@/modules/Dashboard/router";

const routes: Array<RouteRecordRaw> = [
  // {
  //     path: "/",
  //     redirect: () => {
  //         if (isUserLoggedIn()) {
  //             return {name: "help"};
  //         }
  //         return {name: "login"};
  //     },
  // },

  ...product,
  ...dashboard,
  {
    path: "/",
    name: "home",
    component: () => import("@/modules/Home/views/Home.vue"),
    meta: {
      loginNotRequired: true,
      layout: "MainLayout",
    },
  },

  // {
  //     path: "/login",
  //     name: "login",
  //     component: () => import("@/views/Login.vue"),
  //     meta: {
  //         loginNotRequired: true,
  //         layout: "LoginLayout",
  //     },
  // },

  // {
  //     path: "/error-404",
  //     name: "error-404",
  //     component: () => import("@/views/error/Error404.vue"),
  //     meta: {
  //         loginNotRequired: true,
  //         layout: "EmptyLayout",
  //     },
  // },
  // {
  //     path: "/:pathMatch(.*)*",
  //     redirect: "error-404",
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
