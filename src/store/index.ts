import { createStore } from "vuex";
import Vue from "vue";
const store = createStore({
  state: {
    editMode: "edit", //编辑器模式 edit preview
    canvasStyleData: {
      //页面全局数据
      width: 1200,
      height: 740,
      scale: 1000,
      color: "#000",
      opacity: 1,
      background: "#fff",
      fontSize: 14,
    },
    isInEdiotr: false, // 是否在编辑器，用于判断复制、粘贴组件时是否生效，如果在编辑器外，则无视这些操作
    componentData: [] as any[], //画布组件数据
    curComponent: null as any,
    curComponentIndex: null,
    //点击画布时是否点中组件，主要用于取消选中组件用
    //如果没点中组件，并且在画布空白处弹起鼠标，则取消当前组件的选中状态
    isClickCompenent: false,
  },
  mutations: {
    aceSetCanvasData(state, value) {
      state.canvasStyleData = value;
    },
    aceSetcurComponent(state, value) {
      for (let i = 0; i < state.componentData.length; i++) {
        if (state.componentData[i].id === value.id) {
          state.componentData.splice(i, 1);
        }
      }
      state.componentData.push(value);
      state.curComponent = value;
    },
    setClickComponentStatus(state, status) {
      state.isClickCompenent = status;
    },
    setEditMode(state, mode) {
      state.editMode = mode;
    },

    setInEditorStatus(state, status) {
      state.isInEdiotr = status;
    },

    setCanvasStyle(state, style) {
      state.canvasStyleData = style;
    },

    setCurComponent(state, { component, index }) {
      state.curComponent = component;
      state.curComponentIndex = index;
    },
    setShapeStyle({ curComponent }, { top, left, width, height, rotate }) {
      if (top !== undefined && curComponent !== null)
        curComponent.style.top = Math.round(top);
      if (left !== undefined && curComponent !== null)
        curComponent.style.left = Math.round(left);
      if (width && curComponent !== null)
        curComponent.style.width = Math.round(width);
      if (height && curComponent !== null)
        curComponent.style.height = Math.round(height);
      if (rotate && curComponent !== null)
        curComponent.style.rotate = Math.round(rotate);
    },
    setShapeSingleStyle({ curComponent }, { key, value }) {
      curComponent.style[key] = value;
    },

    setComponentData(state, componentData = []) {
      //   Vue.set(state, "componentData", componentData);
      state["componentData"] = componentData;
    },
  },
});

export default store;
