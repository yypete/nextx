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
  name: "other-box",
  components: {
    SideBarMenu,
    ToolTable,
  },
  setup() {
    const tableData = [
    { name: "Chmod 计算器", path: "/chmod-calculator" },
    { name: "微信公众号编辑", path: "/wechat-official-account-editor" },
    { name: "文件共享", path: "/file-sharing" },
    { name: "设备图片生成器", path: "/device-image-generator" },
    { name: "文件存储管理", path: "/file-storage-management" },
    { name: "大小写转换器", path: "/case-converter" },
    { name: "倒计时", path: "/countdown-timer" },
    { name: "文本提取器", path: "/text-extractor" },
    { name: "Figlet", path: "/figlet" },
    { name: "公式计算", path: "/formula-calculation" },
    { name: "秒表", path: "/stopwatch" },
    { name: "时区转换器", path: "/timezone-converter" },
    { name: "UTM生成器", path: "/utm-generator" },
    { name: "单位转换器", path: "/unit-converter" },
    { name: "人民币金额转大写", path: "/rmb-amount-to-words" }
];

    return { tableData };
  },
};
</script>
