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
  name: "yaml-box",
  components: {
    SideBarMenu,
    ToolTable,
  },
  setup() {
    const tableData = [
      { name: "YAML转CSV", path: "/yaml-convert-csv" },
      { name: "YAML转Scala", path: "/yaml-convert-scala" },
      {
        name: "YAML转TypeScript接口",
        path: "/yaml-convert-typescript-interface",
      },
      { name: "YAML转XML", path: "/yaml-convert-xml" },
      { name: "YAML转Kotlin类", path: "/yaml-convert-kotlin-class" },
      { name: "YAML压缩器", path: "/yaml-compressor" },
      { name: "TOML转YAML", path: "/toml-convert-yaml" },
      { name: "YAML转Crystal类", path: "/yaml-convert-crystal-class" },
      { name: "YAML转Elm模块", path: "/yaml-convert-elm-module" },
      { name: "YAML转Pike类", path: "/yaml-convert-pike-class" },
      { name: "YAML转JSON Schema", path: "/yaml-convert-json-schema" },
      { name: "YAML转Haskell模块", path: "/yaml-convert-haskell-module" },
      { name: "YAML到Objective-C接口", path: "/yaml-to-objective-c-interface" },
      { name: "YAML转C++结构体", path: "/yaml-convert-cpp-struct" },
      { name: "YAML转Dart类", path: "/yaml-convert-dart-class" },
      { name: "YAML转Rust结构体", path: "/yaml-convert-rust-struct" },
      { name: "YAML转Ruby模块", path: "/yaml-convert-ruby-module" },
      { name: "YAML生成器", path: "/yaml-generator" },
      { name: "YAML转Sarcastic", path: "/yaml-convert-sarcastic" },
      { name: "YAML合并", path: "/yaml-merge" },
      { name: "YAML转SQL Schema", path: "/yaml-convert-sql-schema" },
      { name: "YAML转Swift结构体", path: "/yaml-convert-swift-struct" },
      { name: "YAML转Python类", path: "/yaml-convert-python-class" },
      { name: "YAML转Go结构体", path: "/yaml-convert-go-struct" },
      { name: "YAML转JSON", path: "/yaml-convert-json" },
      { name: "YAML转IO-TS", path: "/yaml-convert-io-ts" },
      { name: "YAML转Big Query模式", path: "/yaml-convert-big-query-mode" },
      { name: "YAML查看器", path: "/yaml-viewer" },
      { name: "YAML转Zod Schema", path: "/yaml-convert-zod-schema" },
      { name: "YAML转TOML", path: "/yaml-convert-toml" },
      { name: "Properties转YAML", path: "/properties-convert-yaml" },
      { name: "YAML转PHP", path: "/yaml-convert-php" },
      { name: "YAML转Properties", path: "/yaml-convert-properties" },
      { name: "YAML格式化", path: "/yaml-formatter" },
      { name: "YAML比较", path: "/yaml-compare" },
      { name: "YAML转Java Bean", path: "/yaml-convert-java-bean" },
    ];

    return { tableData };
  },
};
</script>
