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


const tableData = [
  { name: "Cron表达式", path: "/cron-expression" },
  { name: "现在/日期/时间戳", path: "/current-date-time-timestamp" },
  { name: "时:分秒转秒工具", path: "/hms-to-seconds-converter" },
  { name: "时间戳转换器", path: "/timestamp-converter" },
  { name: "随机时间生成器", path: "/random-time-generator" },
  { name: "倒计时", path: "/countdown-timer" },
  { name: "秒转时:分:秒", path: "/seconds-to-hms" },
  { name: "秒表", path: "/stopwatch" },
  { name: "时区转换器", path: "/timezone-converter" },
  { name: "Mongo 对象时间", path: "/mongo-object-time" },
  { name: "时间差计算器", path: "/time-difference-calculator" },
  { name: "UTC时间转时间戳", path: "/utc-time-to-timestamp" }
];















const route: RouteRecordRaw[] = [
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
