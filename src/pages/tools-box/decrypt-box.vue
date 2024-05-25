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
  name: "decrypt-box",
  components: {
    SideBarMenu,
    ToolTable,
  },
  setup() {
    const tableData = [
      { name: "JSON转Ruby模块", path: "/JSON-ruby" },
      { name: "JSON转Ruby模块", path: "/JSON-ruby" },
      { name: "JSON转YAML", path: "/JSON-YAML" },
      { name: "JSON转C#类", path: "/JSON-Csharp" },
      { name: "JSON转CSV", path: "/JSON-CSV" },
      { name: "JSON转Pike类", path: "/JSON-Pike" },
      { name: "JSON Path", path: "/JSON-Path" },
      { name: "JSON转JSON Schema", path: "/JSON-Schema" },
      { name: "提取 JSON Key", path: "/JSON-Key" },
      { name: "JSON转Scala", path: "/JSON-Scala" },
      { name: "JSON转Kotlin类", path: "/JSON-Kotlin" },
      { name: "JSON转C++结构体", path: "/JSON-Cpp" },
      { name: "JSON转IO-TS", path: "/JSON-IO-TS" },
      { name: "JSON合并器", path: "/JSON-Merger" },
      { name: "JSON比较器", path: "/JSON-Comparator" },
      { name: "JSON格式化", path: "/JSON-Formatter" },
      { name: "Base64 转 JSON", path: "/Base64-JSON" },
      { name: "JSON转Java Bean", path: "/JSON-Java-Bean" },
      { name: "JSON转Properties", path: "/JSON-Properties" },
      { name: "JSON转Python类", path: "/JSON-Python" },
      { name: "JSON转Go结构体", path: "/JSON-Go" },
      { name: "JSON转XML", path: "/JSON-XML" },
      { name: "JSON 反转义", path: "/JSON-Unescape" },
      { name: "JSON 转义", path: "/JSON-Escape" },
      { name: "JSON到Objective-C接口", path: "/JSON-Objective-C" },
      { name: "JSON转Zod Schema", path: "/JSON-Zod-Schema" },
      { name: "JSON转Elm模块", path: "/JSON-Elm" },
      { name: "JSON转Crystal类", path: "/JSON-Crystal" },
      { name: "JSON转TOML", path: "/JSON-TOML" },
      { name: "提取 JSON 值", path: "/JSON-Value-Extractor" },
      { name: "JSON转Rust结构体", path: "/JSON-Rust" },
      { name: "JSON转Dart类", path: "/JSON-Dart" },
      { name: "JSON转Swift结构体", path: "/JSON-Swift" },
      { name: "JSON查看器", path: "/JSON-Viewer" },
      { name: "JSON转Haskell模块", path: "/JSON-Haskell" },
      { name: "JSON转TypeScript接口", path: "/JSON-TypeScript" },
      { name: "JSON转Big Query模式", path: "/JSON-Big-Query" },
      { name: "JSON生成器", path: "/JSON-Generator" },
      { name: "JSON转PHP", path: "/JSON-PHP" },
    ];
    return { tableData };
  },
};
</script>
