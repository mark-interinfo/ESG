import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/TestView",
    name: "首頁",
    component: () => import("../views/TestView.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;