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
  name: "ai-box",
  components: {
    SideBarMenu,
    ToolTable,
  },
  setup() {
    const tableData = [
    { name: "AI文案生成器/大模型生成", path: "/ai-copywriter-big-model-generator" },
    { name: "简历生成器", path: "/resume-generator" },
    { name: "花式标语生成器", path: "/creative-slogan-generator" },
    { name: "梦境解释者", path: "/dream-interpreter" },
    { name: "语言转文字", path: "/speech-to-text" },
    { name: "谐课题生成器", path: "/pun-generator" },
    { name: "图标优化助手", path: "/icon-optimization-assistant" },
    { name: "Swagger 文档助手", path: "/swagger-document-assistant" },
    { name: "小红书文案生成器", path: "/xiaohongshu-copywriting-generator" },
    { name: "Sql 终端", path: "/sql-terminal" },
    { name: "私人教练", path: "/personal-trainer" },
    { name: "完美程序员", path: "/perfect-programmer" },
    { name: "警察侦探美食食谱设计", path: "/police-detective-food-recipe-designer" },
    { name: "文本文生成像工具", path: "/text-image-generator" },
    { name: "智能逃生生成器", path: "/smart-escape-generator" },
    { name: "写作生成器", path: "/writing-generator" },
    { name: "数据分析家", path: "/data-analyst" },
    { name: "智库", path: "/think-tank" },
    { name: "深度思考者", path: "/deep-thinker" },
    { name: "IT顾问", path: "/it-consultant" },
    { name: "DIY 专家", path: "/diy-expert" },
    { name: "社交媒体舆情者", path: "/social-media-public-opinion-analyst" },
    { name: "教育内容创作者", path: "/educational-content-creator" },
    { name: "文字百科评论家", path: "/text-encyclopedia-commentator" },
    { name: "报价生成器", path: "/quotation-generator" },
    { name: "论文写作师", path: "/paper-writing-consultant" },
    { name: "社交媒体处理", path: "/social-media-handler" },
    { name: "朗诵角色", path: "/recitation-role" },
    { name: "数学历史教师", path: "/math-history-teacher" },
    { name: "电影评论家", path: "/film-critic" },
    { name: "吉普赛音乐作家", path: "/gypsy-music-writer" },
    { name: "化妆师", path: "/makeup-artist" },
    { name: "汽车系统", path: "/car-system" },
    { name: "json schema1 转json", path: "/json-schema1-to-json" },
    { name: "js, json 插桩化", path: "/js-json-instrumentation" },
    { name: "历史学家角色", path: "/historian-role" },
    { name: "搜索引擎优化助手", path: "/seo-assistant" },
    { name: "代码审查者", path: "/code-reviewer" },
    { name: "json schema 转 json", path: "/json-schema-to-json" }
];

    return { tableData };
  },
};
</script>
