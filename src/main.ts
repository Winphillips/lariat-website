import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupAnalytics } from "@/services/analytics";
import { setupSeo } from "@/services/seo";
import './assets/main.css';
import "@fortawesome/fontawesome-free/css/all.css";

setupAnalytics(router);
setupSeo(router);

const app = createApp(App);
app.use(router);
app.mount("#app");
