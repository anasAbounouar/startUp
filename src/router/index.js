import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import LibraryIntroView from "../views/LibraryIntroView.vue";
// import LivresView from "../views/LivresView.vue";
// import ItemView from "../views/ItemView.vue";
// import LoginView from "@/views/Accounts/LoginView.vue";
// import CartView from "@/views/Accounts/CartView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Login",
    name: "login-page",
    component: () => import("@/views/Accounts/LoginView.vue"),
  },
  {
    path: "/Cart",
    name: "cart-page",
    component: () => import("@/views/Accounts/CartView.vue"),
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
    component: () => import("../views/LibraryIntroView.vue"),
  },
  {
    path: "/Acceuil/:nom/:type",
    name: "livres-page",
    component: () => import("../views/LivresView.vue"),
  },
  {
    path: "/Acceuil/:nom/:type/:itemId",
    name: "item-page",
    component: () => import("../views/ItemView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    // If the route has a hash, scroll to the hash
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "auto",
      };
    }
    // Otherwise, scroll to the top of the page
    return { top: 0, behavior: "auto" };
  },
});

export default router;
