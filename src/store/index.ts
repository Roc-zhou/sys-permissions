import { createStore } from "vuex";
import permissionModule from "./permission/index";

// 新建store 实例
export const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    permissionModule,
  },
});
