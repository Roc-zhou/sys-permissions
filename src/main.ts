import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "rz-ui";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App).use(router).use(ElementPlus);
router.isReady().then(() => app.mount("#app"));
