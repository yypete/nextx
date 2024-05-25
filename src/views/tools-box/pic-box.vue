<template>
  <div class="w-full flex justify-center items-center bg-slate-100 h-screen">
    <div class="h-screen bg-slate-100 w-full">
      <div class="flex justify-between h-[80%]">
        <ToolTable :tableData="tableData"></ToolTable>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import ToolTable from "@/components/ToolTable.vue";
export default {
  name: "pic-box",
  components: {
    ToolTable,
  },
  setup() {
    const tableData = [
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
    { name: "代码转图片", path: "/code-to-image" }
];

    return { tableData };
  },
};
</script>
