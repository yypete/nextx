import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import jsonBox from "@/views/sidebar-menu/json-box.vue";
import decryptBox from "@/views/sidebar-menu/decrypt-box.vue";
const route: RouteRecordRaw[] = [
  {path:'/json-box', component:jsonBox},
  {path:'/decrypt-box', component:decryptBox}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: route,
});

export default router;
