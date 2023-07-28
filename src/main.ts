import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//整合SVG图标
import "virtual:svg-icons-register";
import "virtual:windi.css";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount("#app");
