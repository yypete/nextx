<template>
  <div class="h-full w-full ml-24">
    <!-- page-title-->
    <div class="bg-slate-100 flex items-center justify-between pb-4">
      <!-- left-title -->
      <div class="flex space-x-4">
        <div class="text-4xl text-slate-900">时:分:秒转秒工具</div>
        <i
          class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu text-2xl translate-y-2"
        ></i>
        <i class="fi fi-sr-comment text-2xl translate-y-2"></i>
      </div>
      <!-- right-title-->
      <div class="flex space-x-3 mt-3">
        <img src="../assets/logo.png" class="w-10 h-6 translate-y-1" />
        <a href="https://github.com/he3-app/tools-example/tree/main/batch-json">
          <i class="fi fi-rr-cloud-share text-2xl"></i>
        </a>
        <a href="#">
          <i class="fi fi-tr-tally-1 text-2xl pl-2"></i>
        </a>
        <a href="#">
          <i class="fi fi-brands-acrobat text-2xl"></i>
        </a>
        <a href="#">
          <i class="fi fi-brands-illustrator-draw text-2xl"></i>
        </a>
      </div>
    </div>
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
          />
        </div>
        <!-- 秒输入框 -->
        <div class="flex justify-center items-center">
          <div class="text-gray-900 text-2xl">秒：</div>
          <input
            type="text"
            placeholder="Please add the second."
            class="rounded-lg border border-gray-900 h-10 w-96"
          />
        </div>
      </div>
      <!-- page-nav -->
      <div class="ml-5 w-1/4">
        <!-- nav-head -->
        <div class="h-3/5 bg-slate-200 rounded-lg border bordered-gray-400">
          <!-- nav-head-title -->
          <div
            class="h-10 text-gray-400 text-sm border-b-2 border-slate-300 flex justify-center items-center"
          >
            <i class="fi fi-sr-document px-2"></i>
            JSON
          </div>
          <!-- nav-head-content -->
          <div class="w-full px-2 py-2 text-sm text-slate-600">
            <div class="w-full flex items-center">
              <router-link :to="routesPath[0]" class="nav-tool">Cron表达式</router-link>
            </div>
            <div class="w-full flex items-center">
              <router-link :to="routesPath[1]" class="nav-tool">现在/日期/时间戳</router-link>
            </div>
            <div class="w-full flex items-center">
              <router-link :to="routesPath[2]" class="nav-tool">时:分秒转秒工具</router-link>
            </div>
            <div class="w-full flex items-center">
              <router-link :to="routesPath[3]" class="nav-tool">时间戳转换器</router-link>
            </div>
            <div class="w-full flex items-center">
              <router-link :to="routesPath[4]" class="nav-tool">随机时间生成器</router-link>
            </div>
            <div class="w-full flex items-center">
              <router-link :to="routesPath[5]" class="nav-tool">倒计时</router-link>
            </div>
            <div class="w-full flex items-center">
              <router-link :to="routesPath[6]" class="nav-tool">秒转时:分:秒</router-link>
            </div>
            <div class="w-full flex items-center">
              <router-link :to="routesPath[7]" class="nav-tool">秒表</router-link>
            </div>
            <div class="w-full flex items-center">
              <router-link :to="routesPath[8]" class="nav-tool">时区转换器</router-link>
            </div>
            <div class="w-full flex items-center">
              <router-link :to="routesPath[9]" class="nav-tool">Mongo 对象时间</router-link>
            </div>
            <div class="w-full flex items-center">
              <router-link :to="routesPath[10]" class="nav-tool">时间差计算器</router-link>
            </div>
          </div>
        </div>
        <br />
        <!-- nav-mid-->
        <div class="h-1/5 bg-slate-200 rounded-lg border bordered-gray-400">
          <div
            class="h-10 text-gray-400 text-sm border-b-2 border-slate-300 flex justify-center items-center"
          >
            <i class="fi fi-br-umbrella"></i>
            关联工具
          </div>
          <div class="w-full px-2 py-2 text-sm text-slate-600">
            <div class="w-full flex items-center">
              <router-link
                to="/turn-time"
                class="nav-tool "
                >秒转时:分:秒</router-link
              >
            </div>
          </div>
        </div>
        <br />
        <!-- nav-bottom -->
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

<script>
import { generateRouterLink } from '../utils/generateRouterLink';

export default {
  name: "count-down",
  setup () {
  const tableData=[
      [
        "Cron表达式",
        "现在/日期/时间戳",
        "时:分秒转秒工具"],
      [
        "时间戳转换器",
        "随机时间生成器",
        "倒计时"],
      [
        "秒转时:分:秒",
        "秒表",
        "时区转换器"],
      [
        "Mongo 对象时间",
        "时间差计算器",]
    ]

  const generateLink = (item) => {
      return generateRouterLink(item); // 使用 item.value 获取 ref 的值
    };
  const routesPath = tableData.flatMap(row =>row.map(item => generateLink(item)))
  return {
    routesPath
  }
  }
}
</script>
