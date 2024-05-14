import router from "./index.js";

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next("/404");
  } else {
    next();
  }
});
