import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//整合SVG图标
import "virtual:svg-icons-register";
import "virtual:windi.css";
import { createPinia } from "pinia";

import "@/assets/iconfont/iconfont.css";
import "@/styles/animate.scss";
import "@/styles/reset.css";
import "@/styles/global.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { router } from "@/router";
const app = createApp(App);
app.use(createPinia());
app.use(ElementPlus, { size: "small" });
app.use(router);
app.mount("#app");
