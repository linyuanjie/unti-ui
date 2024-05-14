import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "font-awesome/css/font-awesome.min.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import Antd from "ant-design-vue"; //增加
import "ant-design-vue/dist/antd.css";
import * as echarts from "echarts";
import axios from "axios";
import "./router/permission"; // permission control
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios; //设置全局变量axios
Vue.use(ElementUI, {
  locale,
});
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
