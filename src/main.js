import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/all.min.css";
import "./scss/framework.css";
import "swiper/element/css/pagination";
import "swiper/element/css/navigation";
import "swiper/element/css/scrollbar";
// import "./tail.css";
import "./scss/main.css";

createApp(App).use(store).use(router).mount("#app");
