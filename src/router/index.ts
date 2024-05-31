import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import starTool from "@/pages/nav-tools/star-tool.vue";
import myTools from "@/pages/nav-tools/my-tool.vue";
import categoryTool from "@/pages/nav-tools/category-tool.vue";

// Dynamic routing configuration
const routes: RouteRecordRaw[] = [];
// calendar routing configuration
const calendarPages = require.context(
  "@/pages/calendar-tools/",
  true,
  /\/[a-zA-Z0-9-]+\.vue$/
);
calendarPages.keys().forEach((fileName) => {
  const pagesPath = fileName.split("/").pop()?.replace(".vue", "");
  routes.push({
    path: `/${pagesPath}`,
    component: () => import(`@/pages/calendar-tools/${pagesPath}.vue`),
  });
});
// decrypt routing configuration
const decryptPages = require.context(
  "@/pages/decrypt-tools/",
  true,
  /\/[a-zA-Z0-9-]+\.vue$/
);
decryptPages.keys().forEach((fileName) => {
  const pagesPath = fileName.split("/").pop()?.replace(".vue", "");
  routes.push({
    path: `/${pagesPath}`,
    component: () => import(`@/pages/decrypt-tools/${pagesPath}.vue`),
  });
});

routes.push(
  { path: "/home/category", component: categoryTool },
  { path: "/home/star", component: starTool },
  { path: "/home/myTool", component: myTools },
  { path: "", redirect: "/home/category" }
);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
