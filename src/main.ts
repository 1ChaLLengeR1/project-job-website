//setup to TailwindCSS
import "./assets/tailwind.css";
import pl from "@/lang/pl.json";

//setup to Vue.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n({
  locale: "pl",
  fallbackLocale: "pl",
  messages: {
    pl,
  },
});

app.use(router);
app.use(pinia);
app.use(i18n);

app.mount("#app");
