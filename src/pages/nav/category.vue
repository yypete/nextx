<template>
  <main class="flex w-screen relative h-bg bg-slate-100 justify-center">
    <div class="flex justify-between w-category">
      <div class="left-menu">
        <sidebarMenuVue @selectTools="selectTools"></sidebarMenuVue>
      </div>
      <div class="right-category">
        <ToolTable :tableData="tableData"></ToolTable>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import ToolTable from "@/components/tools-table.vue";
import sidebarMenuVue from "@/components/sidebar-menu.vue";
import { ref } from "vue";
import data from '@/config'
export default {
  name: "categoryTool",
  components: {
    ToolTable,
    sidebarMenuVue,
  },
  setup() {
    const aiData = data.aiData
    const webData = data.webData
    const textData = data.textData
    const yamlData = data.yamlData
    const calendarData = data.calendarData
    const colorData = data.colorData
    const decryptData =data.decryptData
    const internetData = data.internetData
    const jsonData = data.jsonData
    const mathData = data.mathData
    const mediaData = data.mediaData
    const otherData = data.otherData
    const picData = data.picData
    const programData = data.programData
    const tableData = ref(data.jsonData);
    function selectTools(toolName: string) {
      switch (toolName) {
        case "文本":
          tableData.value = textData;
          break;
        case "YAML":
          tableData.value = yamlData;
          break;
        case "AI工具":
          tableData.value = aiData;
          break;
        case "日期":
          tableData.value = calendarData;
          break;
        case "颜色":
          tableData.value = colorData;
          break;
        case "解密":
          tableData.value = decryptData;
          break;
        case "网络":
          tableData.value = internetData;
          break;
        case "JSON":
          tableData.value = jsonData;
          break;
        case "数学":
          tableData.value = mathData;
          break;
        case "媒体":
          tableData.value = mediaData;
          break;
        case "其他":
          tableData.value = otherData;
          break;
        case "图片":
          tableData.value = picData;
          break;
        case "编码":
          tableData.value = programData;
          break;
        case "网页":
          tableData.value = webData;
          break;
      }
    }
    return { tableData, webData, selectTools };
  },
};
</script>
