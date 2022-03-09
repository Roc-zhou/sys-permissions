import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import getRoutesList from "./asyncRoutes";
const Layout = () => import("@/layout/layout.vue");

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    meta: {
      title: "首页",
      hidden: true,
    },
    children: [
      {
        path: "",
        name: "Home",
        meta: {
          title: "首页",
          hidden: true,
        },
        component: () => import("@/views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
    meta: {
      title: "other",
      hidden: true,
    },
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404",
      hidden: true,
    },
    component: () => import("@/views/404View.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "login",
      hidden: true,
    },
    component: () => import("@/views/LoginView.vue"),
  },
];

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: "/sys",
    component: Layout,
    meta: {
      title: "系统管理",
      hidden: false,
    },
    children: [
      {
        path: "/sys/user-management",
        name: "userManagement",
        component: () => import("@/views/UserManagementView.vue"),
        meta: {
          title: "用户管理",
          hidden: false,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.concat(asyncRoutes),
});

let routeFlag = false;
router.beforeEach((to, from, next) => {
  if (routeFlag) return next();
  getRoutesList().then((r) => {
    routeFlag = true;
    router.options.routes = router.options.routes.concat(r);
    next({ path: to.path });
  });
});

export default router;
