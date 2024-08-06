import "normalize.css"; // 样式重置 取代reset
import "@/assets/css/index.less"; // 全局样式

import { createApp } from "vue";
import App from "./App.vue";

import pinia from "./store"; // 全局使用pinia
import router from "./router"; // 全局使用router

// 节省空间，采用按需导入
// 1. npm install -D unplugin-vue-components unplugin-auto-import
// 2. 在vite.config.ts中配置AutoImport,Components插件
createApp(App).use(pinia).use(router).mount("#app");
