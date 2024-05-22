import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// nav-section
import collectTools from "../views/nav-section/collect-tools.vue";
import createTools from "../views/nav-section/create-tools.vue";
//vmc
// sidebar
import jsonBox from "../views/sidebar-menu/json-box.vue";
import JSONBoxPage from "../views/sidebar-menu/json-box.vue";
import yamlBox from "../views/sidebar-menu/yaml-box.vue";
import aiBox from "../views/sidebar-menu/ai-box.vue";
import textBox from "../views/sidebar-menu/text-box.vue";
import picBox from "../views/sidebar-menu/picture-box.vue";
import colorBox from "../views/sidebar-menu/color-box.vue";
import decryptBox from "../views/sidebar-menu/decrypt-box.vue";
import internetBox from "../views/sidebar-menu/internet-box.vue";
import webBox from "../views/sidebar-menu/web-box.vue";
import mathBox from "../views/sidebar-menu/math-box.vue";
import mediaBox from "../views/sidebar-menu/media-box.vue";
import calendarBox from "../views/sidebar-menu/calendar-box.vue";
import otherBox from "../views/sidebar-menu/other-box.vue";
import programBox from "../views/sidebar-menu/program-box.vue";

// calendar-files
import turnSecond from "../views/calendarfiles-tools/turn-second.vue";
import cornExpression from "../views/calendarfiles-tools/corn-expression.vue";
import countDown from "../views/calendarfiles-tools/count-down.vue";
import eventChange from "../views/calendarfiles-tools/event-change.vue";
import jetLag from "../views/calendarfiles-tools/jet-lag.vue";
import mongoTime from "../views/calendarfiles-tools/mongo-time.vue";
import nowData from "../views/calendarfiles-tools/now-data.vue";
import randomTime from "../views/calendarfiles-tools/random-time.vue";
import stopWatch from "../views/calendarfiles-tools/stop-watch.vue";
import timeConversation from "../views/calendarfiles-tools/time-conversation.vue";
import turnTime from "../views/calendarfiles-tools/turn-time.vue";
import utcConversation from "../views/calendarfiles-tools/utc-conversation.vue";
// decrypt-tools
import md2Hash from "@/views/decrypt-tools/md2-hash.vue";
import md6384hash from "@/views/decrypt-tools/md6-384hash.vue";
import ripemd160 from "@/views/decrypt-tools/ripemd-160.vue";
// Path Array Rendering
import {generateRouterLink} from '../utils/generateRouterLink'

const routeRecords: RouteRecordRaw[] = [
  { path: "/json-box", name: "json-box", component: jsonBox },
  {path: '/utils/json', name: 'UtilsJSON', component: jsonBox},
  { path: "/yaml-box", name: "yaml-box", component: yamlBox },
  { path: "/ai-box", name: "ai-box", component: aiBox },
  { path: "/text-box", name: "text-box", component: textBox },
  { path: "/pic-box", name: "pic-box", component: picBox },
  { path: "/color-box", name: "color-box", component: colorBox },
  { path: "/program-box", name: "program-box", component: programBox },
  { path: "/decrypt-box", name: "decrypt-box", component: decryptBox },
  { path: "/internet-box", name: "internet-box", component: internetBox },
  { path: "/web-box", name: "web-box", component: webBox },
  { path: "/math-box", name: "math-box", component: mathBox },
  { path: "/media-box", name: "media-box", component: mediaBox },
  { path: "/calendar-box", name: "calendar-box", component: calendarBox },
  { path: "/other-box", name: "other-box", component: otherBox },
];




const tableData = [
  ["Cron表达式", "现在/日期/时间戳", "时:分秒转秒工具"],
  ["时间戳转换器", "随机时间生成器", "倒计时"],
  ["秒转时:分:秒", "秒表", "时区转换器"],
  ["Mongo 对象时间", "时间差计算器", "UTC时间转时间戳",  "Ripemd160哈希", "MD2哈希", "MD6_384哈希"]
];
const componentNames = [
  cornExpression,nowData,turnSecond,  timeConversation,randomTime,countDown, 
  turnTime,stopWatch, eventChange,mongoTime,jetLag,utcConversation,ripemd160,md2Hash,md6384hash
];
const pathRecordes = tableData.flatMap(row => row.map(item => generateRouterLink(item)));

for (let i = 0; i < componentNames.length; i++) {
  routeRecords.push({ path:pathRecordes[i], component:componentNames[i] });
}


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:routeRecords,
});

export default router;
