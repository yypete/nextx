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
  name: "text-box",
  components: {
    SideBarMenu,
    ToolTable,
  },
  setup() {
    const tableData = [
    { name: "中英文文案排版纠正器", path: "/chinese-english-typesetting-correction" },
    { name: "AI文案生成器/大模型生成", path: "/ai-copywriting-generator-large-model" },
    { name: "CSV表转换SQL", path: "/csv-to-sql-converter" },
    { name: "文本换行去除工具", path: "/text-line-break-remover" },
    { name: "JSON表转换HTML表格", path: "/json-to-html-table-converter" },
    { name: "文本分析", path: "/text-analysis" },
    { name: "随机字符串生成器", path: "/random-string-generator" },
    { name: "写作标题生成器", path: "/writing-title-generator" },
    { name: "CSV表转换JSON表格", path: "/csv-to-json-table-converter" },
    { name: "SQL to HTML Table", path: "/sql-to-html-table" },
    { name: "HTML表转换Markdown表格", path: "/html-to-markdown-table" },
    { name: "中文转拼音", path: "/chinese-to-pinyin" },
    { name: "JSON表转换Markdown表格", path: "/json-to-markdown-table" },
    { name: "HTML Text Extractor", path: "/html-text-extractor" },
    { name: "HTML表转换JSON表格", path: "/html-to-json-table-converter" },
    { name: "文本换行", path: "/text-line-break" },
    { name: "SQL转CSV表格", path: "/sql-to-csv-table" },
    { name: "密码生成器", path: "/password-generator" },
    { name: "字符串反转义", path: "/string-escape-reverse" },
    { name: "Markdown表转换SQL", path: "/markdown-to-sql-table" },
    { name: "表情助手", path: "/emoji-assistant" },
    { name: "TSV表转换Markdown表格", path: "/tsv-to-markdown-table" },
    { name: "文本比较", path: "/text-comparison" },
    { name: "文本转语音", path: "/text-to-speech" },
    { name: "英语单数转复数", path: "/english-singular-to-plural" },
    { name: "简体中文转繁体中文", path: "/simplified-chinese-to-traditional-chinese" },
    { name: "ASCII码表", path: "/ascii-table" },
    { name: "CSV表转换TSV表格", path: "/csv-to-tsv-table-converter" },
    { name: "CSV表转换Markdown表格", path: "/csv-to-markdown-table-converter" },
    { name: "SQL转TSV表格", path: "/sql-to-tsv-table" },
    { name: "SQL转Markdown表格", path: "/sql-to-markdown-table" },
    { name: "SQL转JSON表格", path: "/sql-to-json-table" },
    { name: "大小写转换器", path: "/case-converter" },
    { name: "Markdown表转换CSV表格", path: "/markdown-to-csv-table" },
    { name: "Markdown表转换HTML表格转换器", path: "/markdown-to-html-table-converter" },
    { name: "Markdown表转换JSON表格", path: "/markdown-to-json-table" },
];

    return { tableData };
  },
};
</script>
