/* eslint-disable @typescript-eslint/no-explicit-any */
import { $get } from "@/utils/axios";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [];

const dealRoutes = (routes: any): RouteRecordRaw[] => {
  for (const x of routes) {
    x.meta = {
      title: x.name,
      icon: "",
      hidden: false,
    };
    if (x.childs && x.childs.length !== 0) {
      x.redirect = x.childs[0].path;
      x.childs = dealRoutes(x.childs);
      x.children = x.childs;
      delete x.childs;
    }
  }
  return routes;
};

const getRoutesList = () => {
  return $get(`xxxx`)
    .then((res: any): Array<RouteRecordRaw> => {
      if (res.error_code === 0) {
        const data = res.data;
        return filterAsyncRouter(dealRoutes(data));
      } else {
        return routes;
      }
    })
    .catch(() => {
      return routes;
    });
};

const filterAsyncRouter = (routes: Array<RouteRecordRaw>) => {
  for (const item of routes) {
    if (item.component) {
      // item.component = layoutObj[item.component];
      item.component = () => import(`${item.component}`);
    }
    if (item.children && item.children.length) {
      item.children = filterAsyncRouter(item.children);
    }
  }
  return routes;
};

export default getRoutesList;
