import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "@/App.vue";
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
//  nav-tools
import collectTools from "@/pages/nav-tools/collect-tools.vue";
import myTools from "@/pages/nav-tools/my-tools.vue";
// decrypt-tools
import md2Hash from "@/pages/decrypt-tools/md2-hash.vue";
import md6384hash from "@/pages/decrypt-tools/md6-384hash.vue";
import ripemd160 from "@/pages/decrypt-tools/ripemd-160.vue";

import SideBarMenu from "@/components/SideBarMenu.vue";

const route: RouteRecordRaw[] = [
  { path: "/collect-tools", component: collectTools },
  { path: "/my-tools", component: myTools },
  {path: "/ripemd160-hash", component: ripemd160},
  {
    path: "/side-bar",
    component: SideBarMenu,
    children: [
      { path: "json-box", component: jsonBox },
      { path: "calendar-box", component: calendarBox },
      { path: "color-box", component: colorBox },
      { path: "decrypt-box", component: decryptBox,},
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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: route,
});

export default router;
