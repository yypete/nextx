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
  name: "JSON-box",
  components: {
    SideBarMenu,
    ToolTable,
  },
  setup() {
    const tableData = [
      { name: "JSoN转Ruby模块", path: "/json-to-ruby-module" },
      { name: "JSON转YAML", path: "/json-to-yaml" },
      { name: "JSON转C#类", path: "/json-to-csharp-class" },
      { name: "JSON转CSV", path: "/json-to-csv" },
      { name: "JSON转Pike类", path: "/json-to-pike-class" },
      { name: "JSON Path", path: "/json-path" },
      { name: "JSON转JSON Schema", path: "/json-to-json-schema" },
      { name: "提取 JSON Key", path: "/extract-json-key" },
      { name: "JSON转Scala", path: "/json-to-scala" },
      { name: "JSON转Kotlin类", path: "/json-to-kotlin-class" },
      { name: "JSON转C++结构体", path: "/json-to-cpp-struct" },
      { name: "JSON转IO-TS", path: "/json-to-io-ts" },
      { name: "JSON合并器", path: "/json-merger" },
      { name: "JSON比较器", path: "/json-comparator" },
      { name: "JSON格式化", path: "/json-formatter" },
      { name: "Base64转JSON", path: "/base64-to-json" },
      { name: "JsoN转Java Bean", path: "/json-to-java-bean" },
      { name: "JSON转Properties", path: "/json-to-properties" },
      { name: "JSoN转Python类", path: "/json-to-python-class" },
      { name: "JSON转Go结构体", path: "/json-to-go-struct" },
      { name: "JSON转XML", path: "/json-to-xml" },
      { name: "JSON 反转义", path: "/json-unescape" },
      { name: "JSON 转义", path: "/json-escape" },
      { name: "JSON到Objective-C接口", path: "/json-to-objective-c-interface" },
      { name: "JSoN转Zod Schema", path: "/json-to-zod-schema" },
      { name: "JSON转EIm模块", path: "/json-to-eim-module" },
      { name: "JSON转Crystal类", path: "/json-to-crystal-class" },
      { name: "JSON转TOML", path: "/json-to-toml" },
      { name: "提取JSON值", path: "/extract-json-value" },
      { name: "JSON转RUst结构体", path: "/json-to-rust-struct" },
      { name: "JSON转Dart类", path: "/json-to-dart-class" },
      { name: "JSON转Swift结构体", path: "/json-to-swift-struct" },
      { name: "JSON查看器", path: "/json-viewer" },
      { name: "JSON转Haskell模块", path: "/json-to-haskell-module" },
      { name: "JSON转TypeScript接口", path: "/json-to-typescript-interface" },
      { name: "JSON转Big Query模式", path: "/json-to-bigquery-schema" },
      { name: "JSON生成器", path: "/json-generator" },
      { name: "JSON转PHP", path: "/json-to-php" },
      { name: "JSON转SQL模式", path: "/json-to-sql-schema" },
      { name: "属性转JSON", path: "/attribute-to-json" },
      { name: "JsON转Base64", path: "/json-to-base64" },
      { name: "SQL Schema 转JSON", path: "/sql-schema-to-json" },
    ];
    return { tableData };
  },
};
</script>
