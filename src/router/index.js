import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/HomeView",
    name: "登入",
    component: () => import("../views/HomeView.vue"),
  },
  {
<<<<<<< HEAD
    path: "/",
    name: "首頁",
    component: () => import("../views/IndexView.vue"),
  },
  {
    path: "/searchYearInfo",
=======
    path: "/SearchYearInfo",
>>>>>>> 832f3e128d8fd03b6ed91a63015caab3fd3911ea
    name: "ESG資料申報",
    component: () => import("../views/SearchYearInfo.vue"),
  },
  {
    path: "/ApplyEsgInfo",
    name: "110年度ESG揭露",
    component: () => import("../views/ApplyEsgInfo.vue"),
  },
  {
<<<<<<< HEAD
    path: "/EditEsgInfo",
    name: "109年度ESG揭露",
    component: () => import("../views/EditEsgInfo.vue"),
=======
    path: "/EsgDownload",
    name: "ESG資訊下載",
    component: () => import("../views/EsgDownload.vue"),
>>>>>>> 832f3e128d8fd03b6ed91a63015caab3fd3911ea
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;