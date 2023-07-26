import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/HomeView",
    name: "登入",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/",
    name: "首頁",
    component: () => import("../views/IndexView.vue"),
  },
  {
    path: "/searchYearInfo",
    name: "ESG資料申報",
    component: () => import("../views/SearchYearInfo.vue"),
  },
  {
    path: "/ApplyEsgInfo",
    name: "110年度ESG揭露",
    component: () => import("../views/ApplyEsgInfo.vue"),
  },
  {
    path: "/EditEsgInfo",
    name: "109年度ESG揭露",
    component: () => import("../views/EditEsgInfo.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;