import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";

const app = createApp(App); 
app.use(router);
app.mount("#app");

const requirePages = require.context("./pages", true, /\/[a-zA-Z-]+\.vue$/);
const pagesNames:string[]=[]
requirePages.keys().forEach((fileName) => {
const pagesConfig = requirePages(fileName);
const pagesName = fileName
    .split("/")
    .slice(-1)[0]
    .replace(/\.\w+$/, "")
    .replace(/-(\w)/g, (match, p1) => p1.toUpperCase());
    app.component(pagesName, pagesConfig.default || pagesConfig);
    pagesNames.push(pagesName)
});
console.log(pagesNames);
