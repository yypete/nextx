<template>
  <div class="w-full flex justify-center items-center bg-slate-100 h-screen">
    <div class="h-screen bg-slate-100 w-full">
      <div class="flex justify-between h-[80%]">
        <!-- sidebar-menu -->
        <SideBarMenu />
        <ToolTable :tableData="tableData"></ToolTable>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import SideBarMenu from "@/components/SideBarMenu.vue";
import ToolTable from "@/components/ToolTable.vue";
export default {
  name: "web-box",
  components: {
    SideBarMenu,
    ToolTable,
  },
  setup() {
    const tableData = [
    { name: "HTML符号速查表", path: "/html-symbol-quick-reference" },
    { name: "文本换行去除工具", path: "/text-line-break-remover" },
    { name: "私有链接转换", path: "/private-link-converter" },
    { name: "SVG转JSX", path: "/svg-to-jsx" },
    { name: "CSS文本阴影生成器", path: "/css-text-shadow-generator" },
    { name: "CSS Grid生成器", path: "/css-grid-generator" },
    { name: "HTML Text Extractor", path: "/html-text-extractor" },
    { name: "搜索引擎优化助理", path: "/seo-assistant" },
    { name: "Can I Use", path: "/can-i-use" },
    { name: "SVG转CSS", path: "/svg-to-css" },
    { name: "CssBoxShadow生成器", path: "/css-box-shadow-generator" },
    { name: "CSS变换生成器", path: "/css-transform-generator" },
    { name: "CSS Flex生成器", path: "/css-flex-generator" },
    { name: "HTML转JSX", path: "/html-to-jsx" },
    { name: "URL批量访问", path: "/url-batch-access" },
];

    return { tableData };
  },
};
</script>
