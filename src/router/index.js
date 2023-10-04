import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LibraryIntroView from "../views/LibraryIntroView.vue";
import LivresView from "../views/LivresView.vue";
import ItemView from "../views/ItemView.vue";
import LoginView from "@/views/Accounts/LoginView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Login",
    name: "login-page",
    component: LoginView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
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
  {
    path: "/Acceuil/:nom/:type/:itemId",
    name: "item-page",
    component: ItemView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
