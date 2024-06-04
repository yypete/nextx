<template>
  <main class="flex">
    <div
      class="w-48 h-96 bg-white border border-gray-200 overflow-y-scroll shadow-2xl text-gray-600"
    >
      <!-- 工具类别按钮 -->
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="hover-btn"
        @mouseover="selectTools(category, true)"
      >
        {{ category }}
      </div>
    </div>
    <div
      class="w-96 h-96 bg-white border border-gray-200 overflow-y-scroll shadow-2xl text-gray-600"
      @mouseleave="fadeItem(false)"
      v-show="isHovered"
    >
      <div class="border-b-2 border-b-gray-200 pl-10 text-md py-1">
        {{ titleData }}
      </div>
      <div class="w-full">
        <div class="flex flex-wrap">
          <div
            v-for="(item, itemIndex) in tableData"
            :key="itemIndex"
            class="w-full md:w-1/2 p-3 box-border text-sm text-gray-400"
          >
            <router-link :to="item.path">
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { ref } from "vue";

export default {
  name: "hoverCategory",
  components: {},
  props: {
    showHoverCategory: Boolean,
  },
  setup() {
    const isHovered = ref(false);
    const categories = [
      "JSON",
      "YAML",
      "AI工具",
      "文本",
      "图片",
      "颜色",
      "编码",
      "解密",
      "网络",
      "网页",
      "数学",
      "媒体",
      "日期",
      "其他",
    ] as const;
    const aiData = [
      {
        name: "AI文案生成器/大模型生成",
        path: "/ai-copywriter-big-model-generator",
      },
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
      {
        name: "警察侦探美食食谱设计",
        path: "/police-detective-food-recipe-designer",
      },
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
      { name: "", path: "" },
    ];
    const webData = [
      { name: "HTML符号速查表", path: "/html-symbol-quick-reference" },
      { name: "文本换行去除工具", path: "/text-line-break-remover" },
      { name: "私有链接转换", path: "/private-link-converter" },
      { name: "SVG转JSX", path: "/svg-to-jsx" },
      { name: "CSS文本阴影生成器", path: "/css-text-shadow-generator" },
      { name: "CSS Grid生成器", path: "/css-grid-generator" },
      { name: "HTML Text Extractor", path: "/html-text-extractor" },
      { name: "搜索引擎优化助理", path: "/seo-assistant" },
      { name: "Can I Use", path: "/can-i-use" },
      { name: "SVG转CSS", path: "/svg-to-css" },
      { name: "CssBoxShadow生成器", path: "/css-box-shadow-generator" },
      { name: "CSS变换生成器", path: "/css-transform-generator" },
      { name: "CSS Flex生成器", path: "/css-flex-generator" },
      { name: "HTML转JSX", path: "/html-to-jsx" },
      { name: "URL批量访问", path: "/url-batch-access" },
    ];
    const textData = [
      {
        name: "中英文文案排版纠正器",
        path: "/chinese-english-typesetting-correction",
      },
      {
        name: "AI文案生成器/大模型生成",
        path: "/ai-copywriting-generator-large-model",
      },
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
      {
        name: "简体中文转繁体中文",
        path: "/simplified-chinese-to-traditional-chinese",
      },
      { name: "ASCII码表", path: "/ascii-table" },
      { name: "CSV表转换TSV表格", path: "/csv-to-tsv-table-converter" },
      {
        name: "CSV表转换Markdown表格",
        path: "/csv-to-markdown-table-converter",
      },
      { name: "SQL转TSV表格", path: "/sql-to-tsv-table" },
      { name: "SQL转Markdown表格", path: "/sql-to-markdown-table" },
      { name: "SQL转JSON表格", path: "/sql-to-json-table" },
      { name: "大小写转换器", path: "/case-converter" },
      { name: "Markdown表转换CSV表格", path: "/markdown-to-csv-table" },
      {
        name: "Markdown表转换HTML表格转换器",
        path: "/markdown-to-html-table-converter",
      },
      { name: "Markdown表转换JSON表格", path: "/markdown-to-json-table" },
    ];
    const yamlData = [
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
      { name: "", path: "" },
      { name: "", path: "" },
    ];
    const calendarData = [
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
    const colorData = [
      { name: "颜色生成器", path: "/color-generator" },
      { name: "颜色提取器", path: "/color-extractor" },
      { name: "颜色选择器", path: "/color-picker" },
      { name: "颜色转换器", path: "/color-converter" },
      { name: "颜色对比检查器", path: "/color-contrast-checker" },
      { name: " ", path: "" },
    ];
    const decryptData = [
      { name: "Ripemd160哈希", path: "/ripemd160-hash" },
      { name: "MD2哈希", path: "/md2-hash" },
      { name: "MD6_384哈希", path: "/md6-384-hash" },
      { name: "SHA3_384哈希", path: "/sha3-384-hash" },
      { name: "Keccak512哈希", path: "/keccak512-hash" },
      { name: "CRC81Wire哈希", path: "/crc81wire-hash" },
      { name: "CRC32哈希", path: "/crc32-hash" },
      { name: "CRC-8/MAXIM哈希", path: "/crc-8-maxim-hash" },
      { name: "CRCI哈希", path: "/crc1-hash" },
      { name: "CRC16CCITT哈希", path: "/crc16ccitt-hash" },
      { name: "MySQL5哈希", path: "/mysql5-hash" },
      { name: "CRC24哈希", path: "/crc24-hash" },
      { name: "AES解密", path: "/aes-decrypt" },
      { name: "SHAI哈希", path: "/shai-hash" },
      { name: "HMAC-Whirlpool哈希", path: "/hmac-whirlpool-hash" },
      { name: "HMAC-Snefru哈希", path: "/hmac-snefru-hash" },
      { name: "Rabbit解密", path: "/rabbit-decrypt" },
      { name: "Rabbit加密", path: "/rabbit-encrypt" },
      { name: "SM3哈希", path: "/sm3-hash" },
      { name: "NTLM哈希", path: "/ntlm-hash" },
      { name: "SHA3_512哈希", path: "/sha3-512-hash" },
      { name: "Keccak256哈希", path: "/keccak256-hash" },
      { name: "PGP验证", path: "/pgp-verify" },
      { name: "哈希/散列工具", path: "/hash-hashing-tool" },
      { name: "CRC16哈希", path: "/crc16-hash" },
      { name: "SHAO哈希", path: "/shao-hash" },
      { name: "SHA384哈希", path: "/sha384-hash" },
      { name: "Whirlpool哈希", path: "/whirlpool-hash" },
      { name: "SHA512哈希", path: "/sha512-hash" },
      { name: "MD6_512哈希", path: "/md6-512-hash" },
      { name: "Snefru Hash", path: "/snefru-hash" },
      { name: "MD4哈希", path: "/md4-hash" },
      { name: "HMAC-HAS160哈希", path: "/hmac-has160-hash" },
      { name: "MD6_224哈希", path: "/md6-224-hash" },
      { name: "Ripemd256哈希", path: "/ripemd256-hash" },
      { name: "Ripemd128哈希", path: "/ripemd128-hash" },
      { name: "CRC8哈希", path: "/crc8-hash" },
      { name: "HMAC-MD2哈希", path: "/hmac-md2-hash" },
      { name: "Adler32哈希", path: "/adler32-hash" },
      { name: "SM4解密", path: "/sm4-decrypt" },
      { name: "检查文件校验和", path: "/check-file-checksum" },
      { name: "Ripemd320哈希", path: "/ripemd320-hash" },
    ];
    const internetData = [
      { name: "HTTP状态码速查表", path: "/http-status-code-cheat-sheet" },
      { name: "HTTP请求发送器", path: "/http-request-sender" },
      { name: "DNS查询", path: "/dns-lookup" },
      { name: "IP格式化", path: "/ip-formatting" },
      { name: "查询IP地址", path: "/ip-address-lookup" },
      { name: "路由跟踪器", path: "/traceroute" },
      { name: "Whois", path: "/whois" },
      { name: "我的IP信息", path: "/my-ip-information" },
      { name: "Ping", path: "/ping" },
      { name: "域名映射", path: "/domain-mapping" },
      { name: "短链生成器", path: "/short-url-generator" },
      { name: "CIDR 计算器", path: "/cidr-calculator" },
      { name: "Websocket测试工具", path: "/websocket-testing-tool" },
      { name: "Request Inspector", path: "/request-inspector" },
      { name: "URL批量访问", path: "/url-batch-access" },
      { name: "端口管理器", path: "/port-manager" },
      { name: "端口速查表", path: "/port-cheat-sheet" },
      { name: "Hosts 编辑器", path: "/hosts-editor" },
    ];
    const jsonData = [
      { name: "JSON转Ruby模块", path: "/json-to-ruby-module" },
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
      { name: "", path: "" },
    ];
    const mathData = [
      {
        name: "复合年增长率计算器",
        path: "/compound-annual-growth-rate-calculator",
      },
      { name: "IRR(ROI)计算器", path: "/irr-roi-calculator" },
      { name: "杠杆比率计算器", path: "/leverage-ratio-calculator" },
      { name: "复利计算器", path: "/compound-interest-calculator" },
      { name: "折扣系数计算器", path: "/discount-factor-calculator" },
      { name: "Future Value Calculator", path: "/future-value-calculator" },
      { name: "阿拉伯数字转罗马数字", path: "/arabic-to-roman-numeral" },
      { name: "位运算计算器", path: "/bitwise-calculator" },
      { name: "XIRR(ROI)计算器", path: "/xirr-roi-calculator" },
      { name: "汇率计算器", path: "/exchange-rate-calculator" },
      { name: "进制转换器", path: "/base-converter" },
      { name: "浮点数进制转换", path: "/floating-point-base-conversion" },
      { name: "贷款计算器", path: "/loan-calculator" },
      { name: "公式计算", path: "/formula-calculation" },
      { name: "单位转换器", path: "/unit-converter" },
      { name: "最小公倍数计算器", path: "/least-common-multiple-calculator" },
      { name: "列出所有因子", path: "/list-all-factors" },
      { name: "最大公约数计算器", path: "/greatest-common-divisor-calculator" },
      { name: "因数分解", path: "/factorization" },
      { name: "列出所有质因数", path: "/list-all-prime-factors" },
      { name: "摊销计算器", path: "/amortization-calculator" },
    ];
    const mediaData = [
      { name: "调节音频音量", path: "/adjust-audio-volume" },
      { name: "视频尺寸调整器", path: "/video-resize" },
      { name: "视频压缩", path: "/video-compression" },
      { name: "合并音频", path: "/merge-audio" },
      { name: "GIF 转视频", path: "/gif-to-video" },
      { name: "视频倒放", path: "/reverse-video" },
      { name: "视频转GIF", path: "/video-to-gif" },
      { name: "视频旋转", path: "/video-rotation" },
      { name: "视频音量调整", path: "/adjust-video-volume" },
      { name: "音频添加到视频", path: "/add-audio-to-video" },
      { name: "音频截取", path: "/trim-audio" },
      { name: "调节音频速度", path: "/adjust-audio-speed" },
      { name: "静音视频", path: "/mute-video" },
      { name: "音频转换器", path: "/audio-converter" },
      { name: "视频速度调节", path: "/adjust-video-speed" },
      { name: "翻转视频", path: "/flip-video" },
      { name: "音频反转", path: "/reverse-audio" },
      { name: "循环视频", path: "/loop-video" },
      { name: "视频格式转换", path: "/video-format-conversion" },
      { name: "提取视频中音频", path: "/extract-audio-from-video" },
      { name: " ", path: "" },
    ];
    const otherData = [
      { name: "Chmod 计算器", path: "/chmod-calculator" },
      { name: "微信公众号编辑", path: "/wechat-official-account-editor" },
      { name: "文件共享", path: "/file-sharing" },
      { name: "设备图片生成器", path: "/device-image-generator" },
      { name: "文件存储管理", path: "/file-storage-management" },
      { name: "大小写转换器", path: "/case-converter" },
      { name: "倒计时", path: "/countdown-timer" },
      { name: "文本提取器", path: "/text-extractor" },
      { name: "Figlet", path: "/figlet" },
      { name: "公式计算", path: "/formula-calculation" },
      { name: "秒表", path: "/stopwatch" },
      { name: "时区转换器", path: "/timezone-converter" },
      { name: "UTM生成器", path: "/utm-generator" },
      { name: "单位转换器", path: "/unit-converter" },
      { name: "人民币金额转大写", path: "/rmb-amount-to-words" },
    ];
    const picData = [
      { name: "EXIF提取器", path: "/exif-extractor" },
      { name: "证件照编辑器", path: "/passport-photo-editor" },
      { name: "图片EXIF提取器", path: "/image-exif-extractor" },
      { name: "颜色提取器", path: "/color-extractor" },
      { name: "图片转图标", path: "/image-to-icon" },
      { name: "图片分享/托管/图床", path: "/image-sharing-hosting" },
      { name: "图片调整大小", path: "/image-resize" },
      { name: "设备图片生成器", path: "/device-image-generator" },
      { name: "图像裁剪/翻转/旋转", path: "/image-crop-flip-rotate" },
      { name: "Mermaid 编辑器", path: "/mermaid-editor" },
      { name: "图片比较器", path: "/image-comparator" },
      { name: "图片压缩器", path: "/image-compressor" },
      { name: "图片 EXIF 编辑器", path: "/image-exif-editor" },
      { name: "图片添加水印", path: "/image-watermarking" },
      { name: "占位图片", path: "/placeholder-image" },
      { name: "Favicon生成器", path: "/favicon-generator" },
      { name: "图像背景消除", path: "/background-removal" },
      { name: "OCR文本识别", path: "/ocr-text-recognition" },
      { name: "图像格式转换", path: "/image-format-conversion" },
      { name: "PlantUML 编辑器", path: "/plantuml-editor" },
      { name: "代码转图片", path: "/code-to-image" },
    ];
    const programData = [
      { name: "UTF32编码", path: "/utf32-encoding" },
      { name: "ASCII转十六进制", path: "/ascii-to-hexadecimal" },
      { name: "二维码扫描器", path: "/qr-code-scanner" },
      { name: "Base85解码", path: "/base85-decoding" },
      { name: "Base62编码", path: "/base62-encoding" },
      { name: "Base91编码", path: "/base91-encoding" },
      { name: "Unicode解码", path: "/unicode-decoding" },
      { name: "Base64 解码", path: "/base64-decoding" },
      { name: "Base85编码", path: "/base85-encoding" },
      { name: "Base58解码", path: "/base58-decoding" },
      { name: "GZip 解码", path: "/gzip-decoding" },
      { name: "GZip编码", path: "/gzip-encoding" },
      {
        name: "IDN (Punycode) 域名解码",
        path: "/idn-punycode-domain-decoding",
      },
      { name: "文字二维码生成器", path: "/text-qr-code-generator" },
      { name: "Base62解码", path: "/base62-decoding" },
      { name: "十六进制转ASCII", path: "/hexadecimal-to-ascii" },
      { name: "Base58编码", path: "/base58-encoding" },
      { name: "莫尔斯电码解码", path: "/morse-code-decoding" },
      {
        name: "IDN (Punycode) 域名编码",
        path: "/idn-punycode-domain-encoding",
      },
      { name: "条形码生成器", path: "/barcode-generator" },
      { name: "Base91解码", path: "/base91-decoding" },
      { name: "条形码扫描", path: "/barcode-scanner" },
      { name: "UTF32解码", path: "/utf32-decoding" },
      { name: "URL解码", path: "/url-decoding" },
      { name: "URL编码", path: "/url-encoding" },
      { name: "SMS二维码生成器", path: "/sms-qr-code-generator" },
      { name: "Base64 编码", path: "/base64-encoding" },
      { name: "Base64 图像/文件编码", path: "/base64-image-file-encoding" },
      { name: "Base64 图像/文件解码", path: "/base64-image-file-decoding" },
      { name: "UTF7 解码", path: "/utf7-decoding" },
      { name: "UTF8编码", path: "/utf8-encoding" },
      { name: "UTF16编码", path: "/utf16-encoding" },
      { name: "UTF7编码", path: "/utf7-encoding" },
      { name: "UTF8解码", path: "/utf8-decoding" },
      { name: "UTF16解码", path: "/utf16-decoding" },
      { name: "Unicode编码", path: "/unicode-encoding" },
    ];
    const dataMap = {
      文本: textData,
      YAML: yamlData,
      AI工具: aiData,
      日期: calendarData,
      颜色: colorData,
      解密: decryptData,
      网络: internetData,
      JSON: jsonData,
      数学: mathData,
      媒体: mediaData,
      其他: otherData,
      图片: picData,
      编码: programData,
      网页: webData,
    };
    const tableData = ref(jsonData);
    const titleData = ref<string>("");
    function selectTools(toolName: keyof typeof dataMap, isEnter = true) {
      const data = dataMap[toolName];
      if (isEnter) {
        isHovered.value = true;
      } else {
        isHovered.value = false;
      }
      tableData.value = data || [];
      titleData.value = toolName;
    }
    function fadeItem(isEnter=true){
      if (isEnter) {
        isHovered.value = true;
      } else {
        isHovered.value = false;
      }
    }
    return {
      tableData,
      webData,
      selectTools,
      categories,
      dataMap,
      titleData,
      isHovered,
      fadeItem
    };
  },
};
</script>
<style scoped>
div::-webkit-scrollbar {
  display: none;
}
</style>
