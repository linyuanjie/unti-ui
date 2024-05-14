import Vue from "vue";
import VueRouter from "vue-router";
import error404 from "../views/exception/404.vue";
import AGVmodel from "../views/AGVmodel.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/agv",
    // component: ClaimList,
  },
  {
    path: "/agv",
    name: "AGV",
    component: AGVmodel,
  },
  { path: '*', redirect: '/error404' },
  {
    path: '/404',
    name: 'error404',
    component: () => import('@/views/exception/404.vue'),
  },
];

const router = new VueRouter({
  // mode: "history",
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  // 切换路由后滚动条置顶
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
});

export default router;
