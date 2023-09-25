import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/framework.css";
import "normalize.css";
import "./scss/main.scss";
import "./scss/all.min.css";

createApp(App).use(store).use(router).mount("#app");
