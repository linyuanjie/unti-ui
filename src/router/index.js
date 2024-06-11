import Vue from "vue";
import VueRouter from "vue-router";
import error404 from "../views/exception/404.vue";
import AGVmodel from "../views/AGVmodel.vue";
import AGVReport from "../views/AGVReport.vue";
import AGVTasks from "../views/AGVTasks.vue";
import AGVOutIn from "../views/AGVOutIn.vue";
import AGVFillUp from "../views/AGVFillUp.vue";
import AGVEnergy from "../views/AGVEnergy.vue";
import Report1 from "../views/Report1.vue";
import Report2 from "../views/Report2.vue";
import Report3 from "../views/Report3.vue";
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
  {
    path: "/Report1",
    name: "Report1",
    component: Report1,
  },
  {
    path: "/Report2",
    name: "Report2",
    component: Report2,
  },
  {
    path: "/Report3",
    name: "Report3",
    component: Report3,
  },
  {
    path: "/AGVReport",
    name: "AGVReport",
    component: AGVReport,
  },
  {
    path: "/AGVTasks",
    name: "AGVTasks",
    component: AGVTasks,
  },
  {
    path: "/AGVOutIn",
    name: "AGVOutIn",
    component: AGVOutIn,
  },
  {
    path: "/AGVFillUp",
    name: "AGVFillUp",
    component: AGVFillUp,
  },
  {
    path: "/AGVEnergy",
    name: "AGVEnergy",
    component: AGVEnergy,
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
