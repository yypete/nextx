import * as fs from "fs";
const picDate = [
    { name: "EXIF提取器", content: "" },
    { name: "证件照编辑器", content: "" },
    { name: "图片EXIF提取器", content: "" },
    { name: "颜色提取器", content: "" },
    { name: "图片转图标", content: "" },
    {
      name: "图片分享/托管/图床",
      path: "",
    },
    { name: "图片调整大小", content: "" },
    {
      name: "设备图片生成器",
      content: "",
    },
    {
      name: "图像裁剪/翻转/旋转",
      content: "",
    },
    { name: "Mermaid 编辑器", content: "" },
    { name: "图片比较器", content: "" },
    { name: "图片压缩器", content: "" },
    { name: "图片 EXIF 编辑器", content: "" },
    { name: "图片添加水印", content: "" },
    { name: "占位图片", content: "" },
    { name: "Favicon生成器", content: "" },
    { name: "图像背景消除", content: "" },
    { name: "OCR文本识别", content: "" },
    { name: "图像格式转换", content: "" },
    { name: "PlantUML 编辑器", content: "" },
    { name: "代码转图片", content: "" },
  ];
  picDate.forEach((component) => {
      const filePath = `./src/pages/picture-tools/${component.name}.vue`;
      const fileContent = `<script>\nexport default {\n}\n</script>\n${component.content}`;
    
      fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
          console.error(`Error writing file ${filePath}: ${err}`);
        } else {
          console.log(`Generated ${filePath}`);
        }
      });
    });