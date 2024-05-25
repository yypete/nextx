<template>
  <div class="w-full flex justify-center items-center bg-slate-100 h-screen">
    <div class="h-screen bg-slate-100 w-full">
      <div class="flex justify-between h-[80%]">
        <ToolTable :tableData="tableData"></ToolTable>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import ToolTable from "@/components/ToolTable.vue";
export default {
  name: "media-box",
  components: {
    ToolTable,
  },
  setup() {
    const tableData = [
      { name: "调节音频音量", path: "/adjust-audio-volume" },
      { name: "视频尺寸调整器", path: "/video-resize" },
      { name: "视频压缩", path: "/video-compression" },
      { name: "合并音频", path: "/merge-audio" },
      { name: "GIF 转视频", path: "/gif-to-video" },
      { name: "视频倒放", path: "/reverse-video" },
      { name: "视频转GIF", path: "/video-to-gif" },
      { name: "视频旋转", path: "/video-rotation" },
      { name: "视频音量调整", path: "/adjust-video-volume" },
      { name: "音频添加到视频", path: "/add-audio-to-video" },
      { name: "音频截取", path: "/trim-audio" },
      { name: "调节音频速度", path: "/adjust-audio-speed" },
      { name: "静音视频", path: "/mute-video" },
      { name: "音频转换器", path: "/audio-converter" },
      { name: "视频速度调节", path: "/adjust-video-speed" },
      { name: "翻转视频", path: "/flip-video" },
      { name: "音频反转", path: "/reverse-audio" },
      { name: "循环视频", path: "/loop-video" },
      { name: "视频格式转换", path: "/video-format-conversion" },
      { name: "提取视频中音频", path: "/extract-audio-from-video" },
      { name: " ", path: "" },
    ];
    return { tableData };
  },
};
</script>
