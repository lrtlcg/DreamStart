import { App, defineAsyncComponent } from "vue";
const modules = import.meta.glob("./*/*.vue"); //vite  中使用 glob进行动态的引入
const components = ["VText", "VButton"];
export default {
  install(app: App) {
    components.forEach((key) => {
      let componentUrl = `./${key}/Component.vue`; //定义组件
      let attrUrl = `./${key}/Attr.vue`;
      if (modules[componentUrl] !== undefined) {
        app.component(key, defineAsyncComponent(modules[componentUrl] as any)); //匹配
      }
      if (modules[attrUrl] !== undefined) {
        // console.log("***************" + modules[attrUrl]);
        app.component(key + "Attr", modules[attrUrl]);
      }
    });
  },
};
