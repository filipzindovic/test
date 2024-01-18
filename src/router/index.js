import Vue from "vue";
import VueRouter from "vue-router";
import PopularView from "../views/PopularView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "popular",
    component: PopularView,
  },
  {
    path: "/top-rated",
    name: "top-rated",
    component: () => import("../views/TopRatedView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
