import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//整合SVG图标
import "virtual:svg-icons-register";
import "virtual:windi.css";

import ccomponent from "@/custom-component/index"; // 注册自定义组件
// import test from "@/test/index";
import store from "@/store/index"; //组件数据库
import "@/assets/iconfont/iconfont.css";
import "@/styles/animate.scss";
import "@/styles/reset.css";
import "@/styles/global.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { router } from "@/router";
const app = createApp(App);

app.use(ElementPlus, { size: "small" });
app.use(router);
app.use(ccomponent);
// app.use(test);
app.use(store);
app.mount("#app");
