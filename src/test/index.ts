import { App } from "vue";
import VButton from "./component/index";

const componts = [VButton];
export default {
  install(app: App) {
    componts.map((item) => {
      app.use(item);
    });
  },
};
