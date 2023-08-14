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
    path: "/SearchYearInfo",
    name: "ESG資料申報",
    component: () => import("../views/SearchYearInfo.vue"),
  },
  {
    path: "/EsgDownload",
    name: "ESG資訊下載",
    component: () => import("../views/EsgDownload.vue"),
  },
  {
    path: "/ApplyEsgInfo",
    name: "年度ESG揭露",
    component: () => import("../views/EditEsgInfo.vue"),
  },
  {
    path: "/EditEsgInfo",
    name: "年度ESG揭露 ",
    component: () => import("../views/EditEsgInfo.vue"),
  },
  {
    path: "/ExchangeIndicators",
    name: "證交所核心指標設定",
    component: () => import("../views/EditEsgInfo.vue"),
  },
  {
    path: "/InternationalIndicators",
    name: "國際準則指標設定",
    component: () => import("../views/EditEsgInfo.vue"),
  },
  {
    path: "/EsgMatrix",
    name: "ESG資訊矩陣設定",
    component: () => import("../views/EditEsgInfo.vue"),
  },
  {
    path: "/EsgDownload",
    name: "ESG資訊下載",
    component: () => import("../views/EsgDownload.vue"),
  },
  {
    path: "/XbrlDownload",
    name: "XBRL下載",
    component: () => import("../views/XbrlDownload.vue"),
  },
  {
    path: "/EsgTemplate",
    name: "永續報告書套表",
    component: () => import("../views/EsgTemplate.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;