import { createApp } from "vue";
import App from "./App.vue";

// 引用vue-router
import router from "./router";

// 引入pinia
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");
