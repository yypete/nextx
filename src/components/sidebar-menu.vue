<template>
  <div class="sidebar-menu bg-white w-44 py-2 px-2 rounded-lg">
    <button
      v-for="tool in tools"
      :key="tool.value"
      @click="handleSelect(tool.value) " 
      class="flex items-center justify-between relative py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg w-36 h-12"
      :class="[
        'flex items-center justify-between relative py-3 w-36 h-12',
        tool.value === selectedTool ? 'bg-slate-200 rounded-lg' : 'hover:bg-slate-200 hover:rounded-lg'
      ]"
    >
      <i :class="tool.icon" class="absolute top-3.5 left-4 text-sm"></i>
      <span class="menu-text translate-x-10 text-sm">{{ tool.label }}</span>
      <i class="arrow-icon fi fi-ss-angle-small-right absolute left-28"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SidebarMenu",
  setup(_, { emit }) {
    const tools = ref([
      { label: "JSON", value: "JSON", icon: "fi fi-rr-file" },
      { label: "YAML", value: "YAML", icon: "fi fi-rr-file" },
      { label: "AI工具", value: "AI工具", icon: "fi fi-rs-microchip-ai" },
      { label: "文本", value: "文本", icon: "fi fi-rr-text" },
      { label: "图片", value: "图片", icon: "fi fi-br-picture" },
      { label: "颜色", value: "颜色", icon: "fi fi-rr-palette" },
      { label: "编码", value: "编码", icon: "fi fi-rr-site" },
      { label: "解密", value: "解密", icon: "fi fi-rr-display-code" },
      { label: "网络", value: "网络", icon: "fi fi-rr-site" },
      { label: "网页", value: "网页", icon: "fi fi-sr-window-alt" },
      { label: "数学", value: "数学", icon: "fi fi-rr-chart-pie-alt" },
      { label: "媒体", value: "媒体", icon: "fi fi-br-tv-retro" },
      { label: "日期", value: "日期", icon: "fi fi-rs-calendar-clock" },
      { label: "其他", value: "其他", icon: "fi fi-rr-bulb" },
    ]);
    const selectedTool = ref<string | null>(null);
    function handleSelect(toolName: string) {
      selectedTool.value = toolName;
      emit("select-tools", toolName);
    }
    return { handleSelect, tools,selectedTool };
  },

});
</script>
