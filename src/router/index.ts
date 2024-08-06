import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系 path->component
  routes: [
    {
      path: "/",
      //   component: () => import("../views/layout.vue"),
      redirect: "/layout", // 导航守卫
    },
    {
      path: "/login",
      component: () => import("../views/login/login.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/not-found/not-found.vue"),
    },
  ],
});

export default router;
