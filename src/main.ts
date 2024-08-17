import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import UIkit from "uikit";
import icons from "uikit/dist/js/uikit-icons";

import Vue3Toasity, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(Vue3Toasity, {
  autoClose: 1000,
  hideProgressBar: true,
  newestOnTop: true,
  position: toast.POSITION.BOTTOM_RIGHT,
  theme: "colored",
});

UIkit.use(icons);
app.use(createPinia());
app.use(router);

app.mount("#app");
