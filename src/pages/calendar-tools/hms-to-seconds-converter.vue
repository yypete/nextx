<template>
  <div class="h-full w-full ml-24">
    <SecondaryPageTitleVue :headTitle="headTitle"></SecondaryPageTitleVue>
    <!-- page-content -->
    <div class="flex justify-between h-full w-full">
      <!-- page-tool -->
      <div class="h-full bg-white rounded-lg border bordered-gray-400 w-full">
        <!-- 时分秒输入框 -->
        <div class="flex justify-center items-center h-56">
          <div class="text-gray-900 text-2xl">耗时：</div>
          <input
            type="text"
            placeholder="Please add the time."
            class="rounded-lg border border-gray-900 h-10 w-96"
            @input="handleTimeInput()"
            v-model="timeInput"
          />
        </div>
        <!-- 秒输入框 -->
        <div class="flex justify-center items-center">
          <div class="text-gray-900 text-2xl">秒：</div>
          <input
            type="text"
            placeholder="Please add the second."
            class="rounded-lg border border-gray-900 h-10 w-96"
            v-model="secondInput"
          />
        </div>
      </div>
      <!-- page-nav -->
      <div class="ml-5 w-1/4">
        <!-- SideBarMenu -->
        <SecondarySideBarMenu
          :sideBarData="sideBarData"
          :titleData="titleData"
        ></SecondarySideBarMenu>
        <br />
        <!-- introduction -->
        <div class="h-[15%] bg-slate-200 rounded-lg border bordered-gray-400">
          <!-- top -->
          <div
            class="h-10 text-gray-400 text-sm border-b-2 border-slate-300 flex justify-center items-center"
          >
            <i class="fi fi-sr-rocket-lunch"></i>
            1.0.5
          </div>
          <!-- mid -->
          <div class="w-full px-2 py-2 text-sm text-slate-600">
            <div class="w-full">
              <router-link to="#" class="h-8 w-full"
                >时:分:秒转秒”工具是一款将时间格式从“时:分:秒”转换为“秒”格。</router-link
              >
            </div>
            <br />
            <div class="w-full">
              <router-link to="#" class="w-full h-8"
                >发布时间： 2023年6月2日</router-link
              >
            </div>
            <div class="w-full">
              <router-link to="#" class="h-8 w-full"
                >链接:https://t.he3app.com/0f55</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import SecondarySideBarMenu from "@/components/SecondarySideBarMenu.vue";
import { defineComponent } from "vue";
import SecondaryPageTitleVue from "@/components/SecondaryPageTitle.vue";

export default defineComponent({
  name: "TurnSecond",
  components: {
    SecondarySideBarMenu,
    SecondaryPageTitleVue,
  },
  data() {
    return {
      timeInput: "",
      secondInput: "",
    };
  },
  methods: {
    handleTimeInput(): void {
      const timeStr: string = this.timeInput;
      const timeRegex = /^(\d{1,2}):(\d{1,2}):(\d{1,2})$/;
      if (!timeRegex.test(timeStr)) {
        return;
      }
      const [hours, minutes, seconds]: number[] = timeStr
        .split(":")
        .map(Number);
      const totalSeconds: number = hours * 3600 + minutes * 60 + seconds;
      this.secondInput = totalSeconds.toString();
    },
  },
  setup() {
    const sideBarData = [
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
      { name: "UTC时间转时间戳", path: "/utc-time-to-timestamp" },
    ];
    const titleData = "JSON";
    const headTitle='时:分秒转秒工具'
    return { sideBarData, titleData, headTitle};
  },
});
</script>
<style></style>
