import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LibraryIntroView from "../views/LibraryIntroView.vue";
import LivresView from "../views/LivresView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Acceuil/:nom",
    name: "library-intro",
    component: LibraryIntroView,
  },
  {
    path: "/Acceuil/:nom/:type",
    name: "livres-page",
    component: LivresView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
