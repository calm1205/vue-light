import { createApp } from "vue"
import "@calm1205/vue-lib/style.css"
import "./style.css"
import App from "./App.vue"
import { createPinia } from "pinia"

createApp(App).use(createPinia()).mount("#app")
