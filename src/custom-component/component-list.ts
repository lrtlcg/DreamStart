// 公共样式
export const commonStyle = {
  rotate: 0, //旋转
  opacity: 1, //透明度
};
//公共属性
export const commonAttr = {
  animations: [], //动画
  events: {}, //事件
  groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
  isLock: false, // 是否锁定组件
  collapseName: "style", // 编辑组件时记录当前使用的是哪个折叠面板，再次回来时恢复上次打开的折叠面板，优化用户体验
  linkage: {
    duration: 0, // 过渡持续时间
    data: [
      // 组件联动
      {
        id: "", // 联动的组件 id
        label: "", // 联动的组件名称
        event: "", // 监听事件
        style: [{ key: "", value: "" }], // 监听的事件触发时，需要改变的属性
      },
    ],
  },
};
// 编辑器左侧组件列表
const list = [
  {
    component: "VText",
    label: "文字",
    propValue: "双击编辑文字",
    icon: "wenben",
    request: {
      method: "GET",
      data: [],
      url: "",
      series: false, // 是否定时发送请求
      time: 1000, // 定时更新时间
      paramType: "", // string object array
      requestCount: 0, // 请求次数限制，0 为无限
    },
    style: {
      width: 200,
      height: 28,
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
    },
  },
  {
    component: "VButton",
    label: "按钮",
    propValue: "按钮",
    icon: "el",
    style: {
      width: 200,
      height: 28,
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
    },
  },
];

//扩展公共项
for (let i = 0, len = list.length; i < len; i++) {
  const item = list[i];
  item.style = { ...commonStyle, ...item.style };
  list[i] = { ...commonAttr, ...item };
}

//导出内容
export default list;
