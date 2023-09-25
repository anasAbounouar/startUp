import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/all.min.css";
import "./scss/framework.css";
import "./scss/main.css";

createApp(App).use(store).use(router).mount("#app");
