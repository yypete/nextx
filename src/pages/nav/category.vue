<template>
  <main class="flex w-screen relative h-bg bg-slate-100 justify-center">
    <div class="flex justify-between w-category">
      <div class="left-menu">
        <sidebarMenuVue @selectTools="selectTools"></sidebarMenuVue>
      </div>
      <div class="right-category">
        <ToolTable :tableData="tableData"></ToolTable>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import ToolTable from "@/components/tools-table.vue";
import sidebarMenuVue from "@/components/sidebar-menu.vue";
import { ref } from "vue";
export default {
  name: "categoryTool",
  components: {
    ToolTable,
    sidebarMenuVue,
  },
  setup() {
    const aiData = [
      {
        name: "AI文案生成器/大模型生成",
        path: "/home/extension/ai-copywriter-big-model-generator",
      },
      {
        name: "简历生成器",
        path: "/home/extension/resume-generator",
      },
      {
        name: "花式标语生成器",
        path: "/home/extension/creative-slogan-generator",
      },
      {
        name: "梦境解释者",
        path: "/home/extension/dream-interpreter",
      },
      {
        name: "语言转文字",
        path: "/home/extension/speech-to-text",
      },
      {
        name: "谐课题生成器",
        path: "/home/extension/pun-generator",
      },
      {
        name: "图标优化助手",
        path: "/home/extension/icon-optimization-assistant",
      },
      {
        name: "Swagger 文档助手",
        path: "/home/extension/swagger-document-assistant",
      },
      {
        name: "小红书文案生成器",
        path: "/home/extension/xiaohongshu-copywriting-generator",
      },
      {
        name: "Sql 终端",
        path: "/home/extension/sql-terminal",
      },
      {
        name: "私人教练",
        path: "/home/extension/personal-trainer",
      },
      {
        name: "完美程序员",
        path: "/home/extension/perfect-programmer",
      },
      {
        name: "警察侦探美食食谱设计",
        path: "/home/extension/police-detective-food-recipe-designer",
      },
      {
        name: "文本文生成像工具",
        path: "/home/extension/text-image-generator",
      },
      {
        name: "智能逃生生成器",
        path: "/home/extension/smart-escape-generator",
      },
      {
        name: "写作生成器",
        path: "/home/extension/writing-generator",
      },
      {
        name: "数据分析家",
        path: "/home/extension/data-analyst",
      },
      {
        name: "智库",
        path: "/home/extension/think-tank",
      },
      {
        name: "深度思考者",
        path: "/home/extension/deep-thinker",
      },
      {
        name: "IT顾问",
        path: "/home/extension/it-consultant",
      },
      {
        name: "DIY 专家",
        path: "/home/extension/diy-expert",
      },
      {
        name: "社交媒体舆情者",
        path: "/home/extension/social-media-public-opinion-analyst",
      },
      {
        name: "教育内容创作者",
        path: "/home/extension/educational-content-creator",
      },
      {
        name: "文字百科评论家",
        path: "/home/extension/text-encyclopedia-commentator",
      },
      {
        name: "报价生成器",
        path: "/home/extension/quotation-generator",
      },
      {
        name: "论文写作师",
        path: "/home/extension/paper-writing-consultant",
      },
      {
        name: "社交媒体处理",
        path: "/home/extension/social-media-handler",
      },
      {
        name: "朗诵角色",
        path: "/home/extension/recitation-role",
      },
      {
        name: "数学历史教师",
        path: "/home/extension/math-history-teacher",
      },
      {
        name: "电影评论家",
        path: "/home/extension/film-critic",
      },
      {
        name: "吉普赛音乐作家",
        path: "/home/extension/gypsy-music-writer",
      },
      {
        name: "化妆师",
        path: "/home/extension/makeup-artist",
      },
      {
        name: "汽车系统",
        path: "/home/extension/car-system",
      },
      {
        name: "json schema1 转json",
        path: "/home/extension/json-schema1-to-json",
      },
      {
        name: "js, json 插桩化",
        path: "/home/extension/js-json-instrumentation",
      },
      {
        name: "历史学家角色",
        path: "/home/extension/historian-role",
      },
      {
        name: "搜索引擎优化助手",
        path: "/home/extension/seo-assistant",
      },
      {
        name: "代码审查者",
        path: "/home/extension/code-reviewer",
      },
      {
        name: "",
        path: "",
      },
    ];
    const webData = [
      {
        name: "HTML符号速查表",
        path: "/home/extension/html-symbol-quick-reference",
      },
      {
        name: "文本换行去除工具",
        path: "/home/extension/text-line-break-remover",
      },
      {
        name: "私有链接转换",
        path: "/home/extension/private-link-converter",
      },
      {
        name: "SVG转JSX",
        path: "/home/extension/svg-to-jsx",
      },
      {
        name: "CSS文本阴影生成器",
        path: "/home/extension/css-text-shadow-generator",
      },
      {
        name: "CSS Grid生成器",
        path: "/home/extension/css-grid-generator",
      },
      {
        name: "HTML Text Extractor",
        path: "/home/extension/html-text-extractor",
      },
      {
        name: "搜索引擎优化助理",
        path: "/home/extension/seo-assistant",
      },
      {
        name: "Can I Use",
        path: "/home/extension/can-i-use",
      },
      {
        name: "SVG转CSS",
        path: "/home/extension/svg-to-css",
      },
      {
        name: "CssBoxShadow生成器",
        path: "/home/extension/css-box-shadow-generator",
      },
      {
        name: "CSS变换生成器",
        path: "/home/extension/css-transform-generator",
      },
      {
        name: "CSS Flex生成器",
        path: "/home/extension/css-flex-generator",
      },
      {
        name: "HTML转JSX",
        path: "/home/extension/html-to-jsx",
      },
      {
        name: "URL批量访问",
        path: "/home/extension/url-batch-access",
      },
    ];
    const textData = [
      {
        name: "中英文文案排版纠正器",
        path: "/home/extension/chinese-english-typesetting-correction",
      },
      {
        name: "AI文案生成器/大模型生成",
        path: "/home/extension/ai-copywriting-generator-large-model",
      },
      {
        name: "CSV表转换SQL",
        path: "/home/extension/csv-to-sql-converter",
      },
      {
        name: "文本换行去除工具",
        path: "/home/extension/text-line-break-remover",
      },
      {
        name: "JSON表转换HTML表格",
        path: "/home/extension/json-to-html-table-converter",
      },
      {
        name: "文本分析",
        path: "/home/extension/text-analysis",
      },
      {
        name: "随机字符串生成器",
        path: "/home/extension/random-string-generator",
      },
      {
        name: "写作标题生成器",
        path: "/home/extension/writing-title-generator",
      },
      {
        name: "CSV表转换JSON表格",
        path: "/home/extension/csv-to-json-table-converter",
      },
      {
        name: "SQL to HTML Table",
        path: "/home/extension/sql-to-html-table",
      },
      {
        name: "HTML表转换Markdown表格",
        path: "/home/extension/html-to-markdown-table",
      },
      {
        name: "中文转拼音",
        path: "/home/extension/chinese-to-pinyin",
      },
      {
        name: "JSON表转换Markdown表格",
        path: "/home/extension/json-to-markdown-table",
      },
      {
        name: "HTML Text Extractor",
        path: "/home/extension/html-text-extractor",
      },
      {
        name: "HTML表转换JSON表格",
        path: "/home/extension/html-to-json-table-converter",
      },
      {
        name: "文本换行",
        path: "/home/extension/text-line-break",
      },
      {
        name: "SQL转CSV表格",
        path: "/home/extension/sql-to-csv-table",
      },
      {
        name: "密码生成器",
        path: "/home/extension/password-generator",
      },
      {
        name: "字符串反转义",
        path: "/home/extension/string-escape-reverse",
      },
      {
        name: "Markdown表转换SQL",
        path: "/home/extension/markdown-to-sql-table",
      },
      {
        name: "表情助手",
        path: "/home/extension/emoji-assistant",
      },
      {
        name: "TSV表转换Markdown表格",
        path: "/home/extension/tsv-to-markdown-table",
      },
      {
        name: "文本比较",
        path: "/home/extension/text-comparison",
      },
      {
        name: "文本转语音",
        path: "/home/extension/text-to-speech",
      },
      {
        name: "英语单数转复数",
        path: "/home/extension/english-singular-to-plural",
      },
      {
        name: "简体中文转繁体中文",
        path: "/home/extension/simplified-chinese-to-traditional-chinese",
      },
      {
        name: "ASCII码表",
        path: "/home/extension/ascii-table",
      },
      {
        name: "CSV表转换TSV表格",
        path: "/home/extension/csv-to-tsv-table-converter",
      },
      {
        name: "CSV表转换Markdown表格",
        path: "/home/extension/csv-to-markdown-table-converter",
      },
      {
        name: "SQL转TSV表格",
        path: "/home/extension/sql-to-tsv-table",
      },
      {
        name: "SQL转Markdown表格",
        path: "/home/extension/sql-to-markdown-table",
      },
      {
        name: "SQL转JSON表格",
        path: "/home/extension/sql-to-json-table",
      },
      {
        name: "大小写转换器",
        path: "/home/extension/case-converter",
      },
      {
        name: "Markdown表转换CSV表格",
        path: "/home/extension/markdown-to-csv-table",
      },
      {
        name: "Markdown表转换HTML表格转换器",
        path: "/home/extension/markdown-to-html-table-converter",
      },
      {
        name: "Markdown表转换JSON表格",
        path: "/home/extension/markdown-to-json-table",
      },
    ];
    const yamlData = [
      {
        name: "YAML转CSV",
        path: "/home/extension/yaml-convert-csv",
      },
      {
        name: "YAML转Scala",
        path: "/home/extension/yaml-convert-scala",
      },
      {
        name: "YAML转TypeScript接口",
        path: "/home/extension/yaml-convert-typescript-interface",
      },
      {
        name: "YAML转XML",
        path: "/home/extension/yaml-convert-xml",
      },
      {
        name: "YAML转Kotlin类",
        path: "/home/extension/yaml-convert-kotlin-class",
      },
      {
        name: "YAML压缩器",
        path: "/home/extension/yaml-compressor",
      },
      {
        name: "TOML转YAML",
        path: "/home/extension/toml-convert-yaml",
      },
      {
        name: "YAML转Crystal类",
        path: "/home/extension/yaml-convert-crystal-class",
      },
      {
        name: "YAML转Elm模块",
        path: "/home/extension/yaml-convert-elm-module",
      },
      {
        name: "YAML转Pike类",
        path: "/home/extension/yaml-convert-pike-class",
      },
      {
        name: "YAML转JSON Schema",
        path: "/home/extension/yaml-convert-json-schema",
      },
      {
        name: "YAML转Haskell模块",
        path: "/home/extension/yaml-convert-haskell-module",
      },
      {
        name: "YAML到Objective-C接口",
        path: "/home/extension/yaml-to-objective-c-interface",
      },
      {
        name: "YAML转C++结构体",
        path: "/home/extension/yaml-convert-cpp-struct",
      },
      {
        name: "YAML转Dart类",
        path: "/home/extension/yaml-convert-dart-class",
      },
      {
        name: "YAML转Rust结构体",
        path: "/home/extension/yaml-convert-rust-struct",
      },
      {
        name: "YAML转Ruby模块",
        path: "/home/extension/yaml-convert-ruby-module",
      },
      {
        name: "YAML生成器",
        path: "/home/extension/yaml-generator",
      },
      {
        name: "YAML转Sarcastic",
        path: "/home/extension/yaml-convert-sarcastic",
      },
      {
        name: "YAML合并",
        path: "/home/extension/yaml-merge",
      },
      {
        name: "YAML转SQL Schema",
        path: "/home/extension/yaml-convert-sql-schema",
      },
      {
        name: "YAML转Swift结构体",
        path: "/home/extension/yaml-convert-swift-struct",
      },
      {
        name: "YAML转Python类",
        path: "/home/extension/yaml-convert-python-class",
      },
      {
        name: "YAML转Go结构体",
        path: "/home/extension/yaml-convert-go-struct",
      },
      {
        name: "YAML转JSON",
        path: "/home/extension/yaml-convert-json",
      },
      {
        name: "YAML转IO-TS",
        path: "/home/extension/yaml-convert-io-ts",
      },
      {
        name: "YAML转Big Query模式",
        path: "/home/extension/yaml-convert-big-query-mode",
      },
      {
        name: "YAML查看器",
        path: "/home/extension/yaml-viewer",
      },
      {
        name: "YAML转Zod Schema",
        path: "/home/extension/yaml-convert-zod-schema",
      },
      {
        name: "YAML转TOML",
        path: "/home/extension/yaml-convert-toml",
      },
      {
        name: "Properties转YAML",
        path: "/home/extension/properties-convert-yaml",
      },
      {
        name: "YAML转PHP",
        path: "/home/extension/yaml-convert-php",
      },
      {
        name: "YAML转Properties",
        path: "/home/extension/yaml-convert-properties",
      },
      {
        name: "YAML格式化",
        path: "/home/extension/yaml-formatter",
      },
      {
        name: "",
        path: "",
      },
      {
        name: "",
        path: "",
      },
    ];
    const calendarData = [
      { name: "Cron表达式", path: "/home/extension/cron-expression" },
      {
        name: "现在/日期/时间戳",
        path: "/home/extension/current-date-time-timestamp",
      },
      {
        name: "时:分秒转秒工具",
        path: "/home/extension/hms-to-seconds-converter",
      },
      { name: "时间戳转换器", path: "/home/extension/timestamp-converter" },
      { name: "随机时间生成器", path: "/home/extension/random-time-generator" },
      { name: "倒计时", path: "/home/extension/countdown-timer" },
      { name: "秒转时:分:秒", path: "/home/extension/seconds-to-hms" },
      { name: "秒表", path: "/home/extension/stopwatch" },
      { name: "时区转换器", path: "/home/extension/timezone-converter" },
      { name: "Mongo 对象时间", path: "/home/extension/mongo-object-time" },
      {
        name: "时间差计算器",
        path: "/home/extension/time-difference-calculator",
      },
      {
        name: "UTC时间转时间戳",
        path: "/home/extension/utc-time-to-timestamp",
      },
    ];
    const colorData = [
      { name: "颜色生成器", path: "/home/extension/color-generator" },
      { name: "颜色提取器", path: "/home/extension/color-extractor" },
      { name: "颜色选择器", path: "/home/extension/color-picker" },
      { name: "颜色转换器", path: "/home/extension/color-converter" },
      {
        name: "颜色对比检查器",
        path: "/home/extension/color-contrast-checker",
      },
      { name: " ", path: "" },
    ];
    const decryptData = [
      { name: "Ripemd160哈希", path: "/home/extension/ripemd160-hash" },
      { name: "MD2哈希", path: "/home/extension/md2-hash" },
      { name: "MD6_384哈希", path: "/home/extension/md6-384-hash" },
      { name: "SHA3_384哈希", path: "/home/extension/sha3-384-hash" },
      { name: "Keccak512哈希", path: "/home/extension/keccak512-hash" },
      { name: "CRC81Wire哈希", path: "/home/extension/crc81wire-hash" },
      { name: "CRC32哈希", path: "/home/extension/crc32-hash" },
      { name: "CRC-8/MAXIM哈希", path: "/home/extension/crc-8-maxim-hash" },
      { name: "CRCI哈希", path: "/home/extension/crc1-hash" },
      { name: "CRC16CCITT哈希", path: "/home/extension/crc16ccitt-hash" },
      { name: "MySQL5哈希", path: "/home/extension/mysql5-hash" },
      { name: "CRC24哈希", path: "/home/extension/crc24-hash" },
      { name: "AES解密", path: "/home/extension/aes-decrypt" },
      { name: "SHAI哈希", path: "/home/extension/shai-hash" },
      {
        name: "HMAC-Whirlpool哈希",
        path: "/home/extension/hmac-whirlpool-hash",
      },
      { name: "HMAC-Snefru哈希", path: "/home/extension/hmac-snefru-hash" },
      { name: "Rabbit解密", path: "/home/extension/rabbit-decrypt" },
      { name: "Rabbit加密", path: "/home/extension/rabbit-encrypt" },
      { name: "SM3哈希", path: "/home/extension/sm3-hash" },
      { name: "NTLM哈希", path: "/home/extension/ntlm-hash" },
      { name: "SHA3_512哈希", path: "/home/extension/sha3-512-hash" },
      { name: "Keccak256哈希", path: "/home/extension/keccak256-hash" },
      { name: "PGP验证", path: "/home/extension/pgp-verify" },
      { name: "哈希/散列工具", path: "/home/extension/hash-hashing-tool" },
      { name: "CRC16哈希", path: "/home/extension/crc16-hash" },
      { name: "SHAO哈希", path: "/home/extension/shao-hash" },
      { name: "SHA384哈希", path: "/home/extension/sha384-hash" },
      { name: "Whirlpool哈希", path: "/home/extension/whirlpool-hash" },
      { name: "SHA512哈希", path: "/home/extension/sha512-hash" },
      { name: "MD6_512哈希", path: "/home/extension/md6-512-hash" },
      { name: "Snefru Hash", path: "/home/extension/snefru-hash" },
      { name: "MD4哈希", path: "/home/extension/md4-hash" },
      { name: "HMAC-HAS160哈希", path: "/home/extension/hmac-has160-hash" },
      { name: "MD6_224哈希", path: "/home/extension/md6-224-hash" },
      { name: "Ripemd256哈希", path: "/home/extension/ripemd256-hash" },
      { name: "Ripemd128哈希", path: "/home/extension/ripemd128-hash" },
      { name: "CRC8哈希", path: "/home/extension/crc8-hash" },
      { name: "HMAC-MD2哈希", path: "/home/extension/hmac-md2-hash" },
      { name: "Adler32哈希", path: "/home/extension/adler32-hash" },
      { name: "SM4解密", path: "/home/extension/sm4-decrypt" },
      { name: "检查文件校验和", path: "/home/extension/check-file-checksum" },
      { name: "Ripemd320哈希", path: "/home/extension/ripemd320-hash" },
    ];
    const internetData = [
      {
        name: "HTTP状态码速查表",
        path: "/home/extension/http-status-code-cheat-sheet",
      },
      { name: "HTTP请求发送器", path: "/home/extension/http-request-sender" },
      { name: "DNS查询", path: "/home/extension/dns-lookup" },
      { name: "IP格式化", path: "/home/extension/ip-formatting" },
      { name: "查询IP地址", path: "/home/extension/ip-address-lookup" },
      { name: "路由跟踪器", path: "/home/extension/traceroute" },
      { name: "Whois", path: "/home/extension/whois" },
      { name: "我的IP信息", path: "/home/extension/my-ip-information" },
      { name: "Ping", path: "/home/extension/ping" },
      { name: "域名映射", path: "/home/extension/domain-mapping" },
      { name: "短链生成器", path: "/home/extension/short-url-generator" },
      { name: "CIDR 计算器", path: "/home/extension/cidr-calculator" },
      {
        name: "Websocket测试工具",
        path: "/home/extension/websocket-testing-tool",
      },
      { name: "Request Inspector", path: "/home/extension/request-inspector" },
      { name: "URL批量访问", path: "/home/extension/url-batch-access" },
      { name: "端口管理器", path: "/home/extension/port-manager" },
      { name: "端口速查表", path: "/home/extension/port-cheat-sheet" },
      { name: "Hosts 编辑器", path: "/home/extension/hosts-editor" },
    ];
    const jsonData = [
      { name: "JSON转Ruby模块", path: "/home/extension/json-to-ruby-module" },
      { name: "JSON转YAML", path: "/home/extension/json-to-yaml" },
      { name: "JSON转C#类", path: "/home/extension/json-to-csharp-class" },
      { name: "JSON转CSV", path: "/home/extension/json-to-csv" },
      { name: "JSON转Pike类", path: "/home/extension/json-to-pike-class" },
      { name: "JSON Path", path: "/home/extension/json-path" },
      {
        name: "JSON转JSON Schema",
        path: "/home/extension/json-to-json-schema",
      },
      { name: "提取 JSON Key", path: "/home/extension/extract-json-key" },
      { name: "JSON转Scala", path: "/home/extension/json-to-scala" },
      { name: "JSON转Kotlin类", path: "/home/extension/json-to-kotlin-class" },
      { name: "JSON转C++结构体", path: "/home/extension/json-to-cpp-struct" },
      { name: "JSON转IO-TS", path: "/home/extension/json-to-io-ts" },
      { name: "JSON合并器", path: "/home/extension/json-merger" },
      { name: "JSON比较器", path: "/home/extension/json-comparator" },
      { name: "JSON格式化", path: "/home/extension/json-formatter" },
      { name: "Base64转JSON", path: "/home/extension/base64-to-json" },
      { name: "JsoN转Java Bean", path: "/home/extension/json-to-java-bean" },
      { name: "JSON转Properties", path: "/home/extension/json-to-properties" },
      { name: "JSoN转Python类", path: "/home/extension/json-to-python-class" },
      { name: "JSON转Go结构体", path: "/home/extension/json-to-go-struct" },
      { name: "JSON转XML", path: "/home/extension/json-to-xml" },
      { name: "JSON 反转义", path: "/home/extension/json-unescape" },
      { name: "JSON 转义", path: "/home/extension/json-escape" },
      {
        name: "JSON到Objective-C接口",
        path: "/home/extension/json-to-objective-c-interface",
      },
      { name: "JSoN转Zod Schema", path: "/home/extension/json-to-zod-schema" },
      { name: "JSON转EIm模块", path: "/home/extension/json-to-eim-module" },
      {
        name: "JSON转Crystal类",
        path: "/home/extension/json-to-crystal-class",
      },
      { name: "JSON转TOML", path: "/home/extension/json-to-toml" },
      { name: "提取JSON值", path: "/home/extension/extract-json-value" },
      { name: "JSON转RUst结构体", path: "/home/extension/json-to-rust-struct" },
      { name: "JSON转Dart类", path: "/home/extension/json-to-dart-class" },
      {
        name: "JSON转Swift结构体",
        path: "/home/extension/json-to-swift-struct",
      },
      { name: "JSON查看器", path: "/home/extension/json-viewer" },
      {
        name: "JSON转Haskell模块",
        path: "/home/extension/json-to-haskell-module",
      },
      {
        name: "JSON转TypeScript接口",
        path: "/home/extension/json-to-typescript-interface",
      },
      {
        name: "JSON转Big Query模式",
        path: "/home/extension/json-to-bigquery-schema",
      },
      { name: "JSON生成器", path: "/home/extension/json-generator" },
      { name: "JSON转PHP", path: "/home/extension/json-to-php" },
      { name: "JSON转SQL模式", path: "/home/extension/json-to-sql-schema" },
      { name: "属性转JSON", path: "/home/extension/attribute-to-json" },
      { name: "JsON转Base64", path: "/home/extension/json-to-base64" },
      { name: "", path: "" },
    ];
    const mathData = [
      {
        name: "复合年增长率计算器",
        path: "/home/extension/compound-annual-growth-rate-calculator",
      },
      { name: "IRR(ROI)计算器", path: "/home/extension/irr-roi-calculator" },
      {
        name: "杠杆比率计算器",
        path: "/home/extension/leverage-ratio-calculator",
      },
      {
        name: "复利计算器",
        path: "/home/extension/compound-interest-calculator",
      },
      {
        name: "折扣系数计算器",
        path: "/home/extension/discount-factor-calculator",
      },
      {
        name: "Future Value Calculator",
        path: "/home/extension/future-value-calculator",
      },
      {
        name: "阿拉伯数字转罗马数字",
        path: "/home/extension/arabic-to-roman-numeral",
      },
      { name: "位运算计算器", path: "/home/extension/bitwise-calculator" },
      { name: "XIRR(ROI)计算器", path: "/home/extension/xirr-roi-calculator" },
      { name: "汇率计算器", path: "/home/extension/exchange-rate-calculator" },
      { name: "进制转换器", path: "/home/extension/base-converter" },
      {
        name: "浮点数进制转换",
        path: "/home/extension/floating-point-base-conversion",
      },
      { name: "贷款计算器", path: "/home/extension/loan-calculator" },
      { name: "公式计算", path: "/home/extension/formula-calculation" },
      { name: "单位转换器", path: "/home/extension/unit-converter" },
      {
        name: "最小公倍数计算器",
        path: "/home/extension/least-common-multiple-calculator",
      },
      { name: "列出所有因子", path: "/home/extension/list-all-factors" },
      {
        name: "最大公约数计算器",
        path: "/home/extension/greatest-common-divisor-calculator",
      },
      { name: "因数分解", path: "/home/extension/factorization" },
      {
        name: "列出所有质因数",
        path: "/home/extension/list-all-prime-factors",
      },
      { name: "摊销计算器", path: "/home/extension/amortization-calculator" },
    ];
    const mediaData = [
      { name: "调节音频音量", path: "/home/extension/adjust-audio-volume" },
      { name: "视频尺寸调整器", path: "/home/extension/video-resize" },
      { name: "视频压缩", path: "/home/extension/video-compression" },
      { name: "合并音频", path: "/home/extension/merge-audio" },
      { name: "GIF 转视频", path: "/home/extension/gif-to-video" },
      { name: "视频倒放", path: "/home/extension/reverse-video" },
      { name: "视频转GIF", path: "/home/extension/video-to-gif" },
      { name: "视频旋转", path: "/home/extension/video-rotation" },
      { name: "视频音量调整", path: "/home/extension/adjust-video-volume" },
      { name: "音频添加到视频", path: "/home/extension/add-audio-to-video" },
      { name: "音频截取", path: "/home/extension/trim-audio" },
      { name: "调节音频速度", path: "/home/extension/adjust-audio-speed" },
      { name: "静音视频", path: "/home/extension/mute-video" },
      { name: "音频转换器", path: "/home/extension/audio-converter" },
      { name: "视频速度调节", path: "/home/extension/adjust-video-speed" },
      { name: "翻转视频", path: "/home/extension/flip-video" },
      { name: "音频反转", path: "/home/extension/reverse-audio" },
      { name: "循环视频", path: "/home/extension/loop-video" },
      { name: "视频格式转换", path: "/home/extension/video-format-conversion" },
      {
        name: "提取视频中音频",
        path: "/home/extension/extract-audio-from-video",
      },
      { name: " ", path: "" },
    ];
    const otherData = [
      { name: "Chmod 计算器", path: "/home/extension/chmod-calculator" },
      {
        name: "微信公众号编辑",
        path: "/home/extension/wechat-official-account-editor",
      },
      { name: "文件共享", path: "/home/extension/file-sharing" },
      {
        name: "设备图片生成器",
        path: "/home/extension/device-image-generator",
      },
      { name: "文件存储管理", path: "/home/extension/file-storage-management" },
      { name: "大小写转换器", path: "/home/extension/case-converter" },
      { name: "倒计时", path: "/home/extension/countdown-timer" },
      { name: "文本提取器", path: "/home/extension/text-extractor" },
      { name: "Figlet", path: "/home/extension/figlet" },
      { name: "公式计算", path: "/home/extension/formula-calculation" },
      { name: "秒表", path: "/home/extension/stopwatch" },
      { name: "时区转换器", path: "/home/extension/timezone-converter" },
      { name: "UTM生成器", path: "/home/extension/utm-generator" },
      { name: "单位转换器", path: "/home/extension/unit-converter" },
      { name: "人民币金额转大写", path: "/home/extension/rmb-amount-to-words" },
    ];
    const picData = [
      { name: "EXIF提取器", path: "/home/extension/exif-extractor" },
      { name: "证件照编辑器", path: "/home/extension/passport-photo-editor" },
      { name: "图片EXIF提取器", path: "/home/extension/image-exif-extractor" },
      { name: "颜色提取器", path: "/home/extension/color-extractor" },
      { name: "图片转图标", path: "/home/extension/image-to-icon" },
      {
        name: "图片分享/托管/图床",
        path: "/home/extension/image-sharing-hosting",
      },
      { name: "图片调整大小", path: "/home/extension/image-resize" },
      {
        name: "设备图片生成器",
        path: "/home/extension/device-image-generator",
      },
      {
        name: "图像裁剪/翻转/旋转",
        path: "/home/extension/image-crop-flip-rotate",
      },
      { name: "Mermaid 编辑器", path: "/home/extension/mermaid-editor" },
      { name: "图片比较器", path: "/home/extension/image-comparator" },
      { name: "图片压缩器", path: "/home/extension/image-compressor" },
      { name: "图片 EXIF 编辑器", path: "/home/extension/image-exif-editor" },
      { name: "图片添加水印", path: "/home/extension/image-watermarking" },
      { name: "占位图片", path: "/home/extension/placeholder-image" },
      { name: "Favicon生成器", path: "/home/extension/favicon-generator" },
      { name: "图像背景消除", path: "/home/extension/background-removal" },
      { name: "OCR文本识别", path: "/home/extension/ocr-text-recognition" },
      { name: "图像格式转换", path: "/home/extension/image-format-conversion" },
      { name: "PlantUML 编辑器", path: "/home/extension/plantuml-editor" },
      { name: "代码转图片", path: "/home/extension/code-to-image" },
    ];
    const programData = [
      { name: "UTF32编码", path: "/home/extension/utf32-encoding" },
      { name: "ASCII转十六进制", path: "/home/extension/ascii-to-hexadecimal" },
      { name: "二维码扫描器", path: "/home/extension/qr-code-scanner" },
      { name: "Base85解码", path: "/home/extension/base85-decoding" },
      { name: "Base62编码", path: "/home/extension/base62-encoding" },
      { name: "Base91编码", path: "/home/extension/base91-encoding" },
      { name: "Unicode解码", path: "/home/extension/unicode-decoding" },
      { name: "Base64 解码", path: "/home/extension/base64-decoding" },
      { name: "Base85编码", path: "/home/extension/base85-encoding" },
      { name: "Base58解码", path: "/home/extension/base58-decoding" },
      { name: "GZip 解码", path: "/home/extension/gzip-decoding" },
      { name: "GZip编码", path: "/home/extension/gzip-encoding" },
      {
        name: "IDN (Punycode) 域名解码",
        path: "/home/extension/idn-punycode-domain-decoding",
      },
      {
        name: "文字二维码生成器",
        path: "/home/extension/text-qr-code-generator",
      },
      { name: "Base62解码", path: "/home/extension/base62-decoding" },
      { name: "十六进制转ASCII", path: "/home/extension/hexadecimal-to-ascii" },
      { name: "Base58编码", path: "/home/extension/base58-encoding" },
      { name: "莫尔斯电码解码", path: "/home/extension/morse-code-decoding" },
      {
        name: "IDN (Punycode) 域名编码",
        path: "/home/extension/idn-punycode-domain-encoding",
      },
      { name: "条形码生成器", path: "/home/extension/barcode-generator" },
      { name: "Base91解码", path: "/home/extension/base91-decoding" },
      { name: "条形码扫描", path: "/home/extension/barcode-scanner" },
      { name: "UTF32解码", path: "/home/extension/utf32-decoding" },
      { name: "URL解码", path: "/home/extension/url-decoding" },
      { name: "URL编码", path: "/home/extension/url-encoding" },
      {
        name: "SMS二维码生成器",
        path: "/home/extension/sms-qr-code-generator",
      },
      { name: "Base64 编码", path: "/home/extension/base64-encoding" },
      {
        name: "Base64 图像/文件编码",
        path: "/home/extension/base64-image-file-encoding",
      },
      {
        name: "Base64 图像/文件解码",
        path: "/home/extension/base64-image-file-decoding",
      },
      { name: "UTF7 解码", path: "/home/extension/utf7-decoding" },
      { name: "UTF8编码", path: "/home/extension/utf8-encoding" },
      { name: "UTF16编码", path: "/home/extension/utf16-encoding" },
      { name: "UTF7编码", path: "/home/extension/utf7-encoding" },
      { name: "UTF8解码", path: "/home/extension/utf8-decoding" },
      { name: "UTF16解码", path: "/home/extension/utf16-decoding" },
      { name: "Unicode编码", path: "/home/extension/unicode-encoding" },
    ];
    const tableData = ref([
      { name: "JSON转Ruby模块", path: "/home/extension/json-to-ruby-module" },
      { name: "JSON转YAML", path: "/home/extension/json-to-yaml" },
      { name: "JSON转C#类", path: "/home/extension/json-to-csharp-class" },
      { name: "JSON转CSV", path: "/home/extension/json-to-csv" },
      { name: "JSON转Pike类", path: "/home/extension/json-to-pike-class" },
      { name: "JSON Path", path: "/home/extension/json-path" },
      {
        name: "JSON转JSON Schema",
        path: "/home/extension/json-to-json-schema",
      },
      { name: "提取 JSON Key", path: "/home/extension/extract-json-key" },
      { name: "JSON转Scala", path: "/home/extension/json-to-scala" },
      { name: "JSON转Kotlin类", path: "/home/extension/json-to-kotlin-class" },
      { name: "JSON转C++结构体", path: "/home/extension/json-to-cpp-struct" },
      { name: "JSON转IO-TS", path: "/home/extension/json-to-io-ts" },
      { name: "JSON合并器", path: "/home/extension/json-merger" },
      { name: "JSON比较器", path: "/home/extension/json-comparator" },
      { name: "JSON格式化", path: "/home/extension/json-formatter" },
      { name: "Base64转JSON", path: "/home/extension/base64-to-json" },
      { name: "JsoN转Java Bean", path: "/home/extension/json-to-java-bean" },
      { name: "JSON转Properties", path: "/home/extension/json-to-properties" },
      { name: "JSoN转Python类", path: "/home/extension/json-to-python-class" },
      { name: "JSON转Go结构体", path: "/home/extension/json-to-go-struct" },
      { name: "JSON转XML", path: "/home/extension/json-to-xml" },
      { name: "JSON 反转义", path: "/home/extension/json-unescape" },
      { name: "JSON 转义", path: "/home/extension/json-escape" },
      {
        name: "JSON到Objective-C接口",
        path: "/home/extension/json-to-objective-c-interface",
      },
      { name: "JSoN转Zod Schema", path: "/home/extension/json-to-zod-schema" },
      { name: "JSON转EIm模块", path: "/home/extension/json-to-eim-module" },
      {
        name: "JSON转Crystal类",
        path: "/home/extension/json-to-crystal-class",
      },
      { name: "JSON转TOML", path: "/home/extension/json-to-toml" },
      { name: "提取JSON值", path: "/home/extension/extract-json-value" },
      { name: "JSON转RUst结构体", path: "/home/extension/json-to-rust-struct" },
      { name: "JSON转Dart类", path: "/home/extension/json-to-dart-class" },
      {
        name: "JSON转Swift结构体",
        path: "/home/extension/json-to-swift-struct",
      },
      { name: "JSON查看器", path: "/home/extension/json-viewer" },
      {
        name: "JSON转Haskell模块",
        path: "/home/extension/json-to-haskell-module",
      },
      {
        name: "JSON转TypeScript接口",
        path: "/home/extension/json-to-typescript-interface",
      },
      {
        name: "JSON转Big Query模式",
        path: "/home/extension/json-to-bigquery-schema",
      },
      { name: "JSON生成器", path: "/home/extension/json-generator" },
      { name: "JSON转PHP", path: "/home/extension/json-to-php" },
      { name: "JSON转SQL模式", path: "/home/extension/json-to-sql-schema" },
      { name: "属性转JSON", path: "/home/extension/attribute-to-json" },
      { name: "JsON转Base64", path: "/home/extension/json-to-base64" },
      { name: "", path: "" },
    ]);
    function selectTools(toolName: string) {
      switch (toolName) {
        case "文本":
          tableData.value = textData;
          break;
        case "YAML":
          tableData.value = yamlData;
          break;
        case "AI工具":
          tableData.value = aiData;
          break;
        case "日期":
          tableData.value = calendarData;
          break;
        case "颜色":
          tableData.value = colorData;
          break;
        case "解密":
          tableData.value = decryptData;
          break;
        case "网络":
          tableData.value = internetData;
          break;
        case "JSON":
          tableData.value = jsonData;
          break;
        case "数学":
          tableData.value = mathData;
          break;
        case "媒体":
          tableData.value = mediaData;
          break;
        case "其他":
          tableData.value = otherData;
          break;
        case "图片":
          tableData.value = picData;
          break;
        case "编码":
          tableData.value = programData;
          break;
        case "网页":
          tableData.value = webData;
          break;
      }
    }
    return { tableData, webData, selectTools };
  },
};
</script>
