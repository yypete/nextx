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
  name: "calendar-box",
  components: {
    ToolTable,
  },
  setup() {
    const tableData = [
    { name: "Cron表达式", path: "/cron-expression" },
    { name: "现在/日期/时间戳", path: "/current-date-time-timestamp" },
    { name: "时:分秒转秒工具", path: "/hms-to-seconds-converter" },
    { name: "时间戳转换器", path: "/timestamp-converter" },
    { name: "随机时间生成器", path: "/random-time-generator" },
    { name: "倒计时", path: "/countdown-timer" },
    { name: "秒转时:分:秒", path: "/seconds-to-hms" },
    { name: "秒表", path: "/stopwatch" },
    { name: "时区转换器", path: "/timezone-converter" },
    { name: "Mongo 对象时间", path: "/mongo-object-time" },
    { name: "时间差计算器", path: "/time-difference-calculator" },
    { name: "UTC时间转时间戳", path: "/utc-time-to-timestamp" }
];
    return { tableData };
  },
};
</script>
