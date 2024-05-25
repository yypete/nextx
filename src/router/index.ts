import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import tools-box
import jsonBox from "@/pages/tools-box/json-box.vue";
import calendarBox from "@/pages/tools-box/calendar-box.vue";
import colorBox from "@/pages/tools-box/color-box.vue";
import decryptBox from "@/pages/tools-box/decrypt-box.vue";
import internetBox from "@/pages/tools-box/internet-box.vue";
import mathBox from "@/pages/tools-box/math-box.vue";
import mediaBox from "@/pages/tools-box/media-box.vue";
import otherBox from "@/pages/tools-box/other-box.vue";
import picBox from "@/pages/tools-box/pic-box.vue";
import programBox from "@/pages/tools-box/program-box.vue";
import textBox from "@/pages/tools-box/text-box.vue";
import webBox from "@/pages/tools-box/web-box.vue";
import yamlBox from "@/pages/tools-box/yaml-box.vue";
import aiBox from "@/pages/tools-box/ai-box.vue";
import myTools from "@/pages/nav-tools/my-tools.vue";

// import nav-tools
import collectTools from "@/pages/nav-tools/collect-tools.vue";

const route: RouteRecordRaw[] = [
  { path: "/json-box", component: jsonBox },
  { path: "/calendar-box", component: calendarBox },
  { path: "/color-box", component: colorBox },
  { path: "/decrypt-box", component: decryptBox },
  { path: "/internet-box", component: internetBox },
  { path: "/math-box", component: mathBox },
  { path: "/media-box", component: mediaBox },
  { path: "/other-box", component: otherBox },
  { path: "/pic-box", component: picBox },
  { path: "/program-box", component: programBox },
  { path: "/text-box", component: textBox },
  { path: "/web-box", component: webBox },
  { path: "/yaml-box", component: yamlBox },
  { path: "/ai-box", component: aiBox },
  { path: "/collect-tools", component: collectTools },
  { path: "/my-tools", component: myTools },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: route,
});

export default router;
