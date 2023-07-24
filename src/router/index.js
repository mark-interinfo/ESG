import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/HomeView",
    name: "首頁",
    component: () => import("../views/HomeView.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;