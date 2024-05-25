<template>
  <div class="w-full flex justify-center items-center bg-slate-100 h-screen">
    <div class="h-screen bg-slate-100 w-full">
      <div class="flex justify-between h-[80%]">
        <!-- sidebar-menu -->
        <SideBarMenu />
        <div class="bg-white h-full rounded-lg px-3 w-[80%]">
          <table
            class="table w-full my-4"
            v-for="(row, rowIndex) in tableData"
            :key="rowIndex"
          >
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link
                  :to="generateRouterLink(row[0])"
                  class="table-link"
                >
                  <a href="#" class="item-box">
                    <div class="text-slate-600 text-md pl-2">{{ row[0] }}</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i class="fi fi-rr-star"></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link
                  :to="generateRouterLink(row[1])"
                  class="table-link"
                >
                  <a href="#" class="item-box">
                    <div class="text-slate-600 text-md pl-2">{{ row[1] }}</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i class="fi fi-rr-star"></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link
                  :to="generateRouterLink(row[2])"
                  class="table-link"
                >
                  <a href="#" class="item-box">
                    <div class="text-slate-600 text-md pl-2">{{ row[2] }}</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i class="fi fi-rr-star"></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import SideBarMenu from "@/components/SideBarMenu.vue";
export default {
  name: "json-box",
  components: {
    SideBarMenu,
  },
  setup() {
    const tableData = [
      ["JSON转Ruby模块", "JSON转YAML", "JSON转C#类"],
      ["JSON转CSV", "JSON转Pike类", "JSON Path"],
      ["JSON转JSON Schema", "提取 JSON Key", "JSON转Scala"],
      ["JSON转Kotlin类", "JSON转C++结构体", "JSON转IO-TS"],
      ["JSON合并器", "JSON比较器", "JSON格式化"],
      ["Base64 转 JSON", "JSON转Java Bean", "JSON转Properties"],
      ["JSON转Python类", "JSON转Go结构体", "JSON转XML"],
      ["JSON 反转义", "JSON 转义", "JSON到Objective-C接口"],
      ["JSON转Zod Schema", "JSON转Elm模块", "JSON转Crystal类"],
      ["JSON转TOML", "提取 JSON 值", "JSON转Rust结构体"],
      ["JSON转Dart类", "JSON转Swift结构体", "JSON查看器"],
      ["JSON转Haskell模块", "JSON转TypeScript接口", "JSON转Big Query模式"],
      ["JSON生成器", "JSON转PHP", "JSON转SQL模式"],
    ];

    return { tableData};
  },
};
</script>
