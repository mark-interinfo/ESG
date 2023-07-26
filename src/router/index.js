import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/HomeView",
    name: "首頁",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/SearchYearInfo",
    name: "ESG資料申報",
    component: () => import("../views/SearchYearInfo.vue"),
  },
  {
    path: "/ApplyEsgInfo",
    name: "ESG揭露",
    component: () => import("../views/ApplyEsgInfo.vue"),
  },
  {
    path: "/EsgDownload",
    name: "ESG資訊下載",
    component: () => import("../views/EsgDownload.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;