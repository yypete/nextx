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
  name: "color-box",
  components: {
    SideBarMenu,
    ToolTable,
  },
  setup() {
    const tableData = [
    { name: "颜色生成器", path: "/color-generator" },
    { name: "颜色提取器", path: "/color-extractor" },
    { name: "颜色选择器", path: "/color-picker" },
    { name: "颜色转换器", path: "/color-converter" },
    { name: "颜色对比检查器", path: "/color-contrast-checker" },
    { name: " ", path: "" },
];
    return { tableData };
  },
};
</script>
