import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SideBarMenu from "@/components/SideBarMenu.vue";

//   Nested tools-box
import jsonBox from "@/views/tools-box/json-box.vue";
import calendarBox from "@/views/tools-box/calendar-box.vue";
import colorBox from "@/views/tools-box/color-box.vue";
import decryptBox from "@/views/tools-box/decrypt-box.vue";
import internetBox from "@/views/tools-box/internet-box.vue";
import mathBox from "@/views/tools-box/math-box.vue";
import mediaBox from "@/views/tools-box/media-box.vue";
import otherBox from "@/views/tools-box/other-box.vue";
import picBox from "@/views/tools-box/pic-box.vue";
import programBox from "@/views/tools-box/program-box.vue";
import textBox from "@/views/tools-box/text-box.vue";
import webBox from "@/views/tools-box/web-box.vue";
import yamlBox from "@/views/tools-box/yaml-box.vue";
import aiBox from "@/views/tools-box/ai-box.vue";


const routes: RouteRecordRaw[] = [];
const calendarPages = require.context("@/pages/calendar-tools/", true, /\/[a-zA-Z0-9-]+\.vue$/);
calendarPages.keys().forEach((fileName) => {
  const pagesPath = fileName.split("/").pop()?.replace(".vue", "");
  routes.push({
    path: `/${pagesPath}`,
    component: () => import(`@/pages/calendar-tools/${pagesPath}.vue`),
  });
});
const decryptPages = require.context("@/pages/decrypt-tools/", true, /\/[a-zA-Z0-9-]+\.vue$/);
decryptPages.keys().forEach((fileName) => {
  const pagesPath = fileName.split("/").pop()?.replace(".vue", "");
  routes.push({
    path: `/${pagesPath}`,
    component: () => import(`@/pages/decrypt-tools/${pagesPath}.vue`),
  });
});

console.log(routes)

routes.push({
  path: "/side-bar",
  component: SideBarMenu,
  children: [
    { path: "json-box", component: jsonBox },
    { path: "calendar-box", component: calendarBox },
    { path: "color-box", component: colorBox },
    { path: "decrypt-box", component: decryptBox },
    { path: "internet-box", component: internetBox },
    { path: "math-box", component: mathBox },
    { path: "media-box", component: mediaBox },
    { path: "other-box", component: otherBox },
    { path: "pic-box", component: picBox },
    { path: "program-box", component: programBox },
    { path: "text-box", component: textBox },
    { path: "web-box", component: webBox },
    { path: "yaml-box", component: yamlBox },
    { path: "ai-box", component: aiBox },
  ],
});
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
