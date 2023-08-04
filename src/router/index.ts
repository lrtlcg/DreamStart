//1.导入
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/view/Home.vue";
//2.定义路由
const routes = [{ path: "/", component: Home }];
//3.创建路由实例，并抛出
export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
