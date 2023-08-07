import { App } from "vue";
// import TvText from "@/test/component/VText/Attr.vue";
import VButton from "@/test/component/VButton/Attr.vue";

export default {
  install(app: App) {
    app.component("VButton", VButton);
  },
};
