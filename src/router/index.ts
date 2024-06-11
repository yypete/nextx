import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import starTool from "@/pages/nav/star.vue";
import myTools from "@/pages/nav/my-tool.vue";
import categoryTool from "@/pages/nav/category.vue";

// Dynamic routing configuration
const routes: RouteRecordRaw[] = [];
// calendar routing configuration
const calendarPages = require.context(
  "@/pages/calendar/",
  true,
  /\/[a-zA-Z0-9-]+\.vue$/
);
calendarPages.keys().forEach((fileName) => {
  const pagesPath = fileName.split("/").pop()?.replace(".vue", "");
  routes.push({
    path: `/home/extension/${pagesPath}`,
    component: () => import(`@/pages/calendar/${pagesPath}.vue`),
  });
});
// decrypt routing configuration
const decryptPages = require.context(
  "@/pages/decrypt/",
  true,
  /\/[a-zA-Z0-9-]+\.vue$/
);
decryptPages.keys().forEach((fileName) => {
  const pagesPath = fileName.split("/").pop()?.replace(".vue", "");
  routes.push({
    path: `/home/extension/${pagesPath}`,
    component: () => import(`@/pages/decrypt/${pagesPath}.vue`),
  });
});

// pic routing configuration
const picPages = require.context(
  "@/pages/picture-tools/",
  true,
  /\/[a-zA-Z0-9-]+\.vue$/
);
picPages.keys().forEach((fileName) => {
  const pagesPath = fileName.split("/").pop()?.replace(".vue", "");
  routes.push({
    path: `/home/extension/${pagesPath}`,
    component: () => import(`@/pages/picture-tools/${pagesPath}.vue`),
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
