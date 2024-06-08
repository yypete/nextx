"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var picDate = [
  {
    name: "exif-extractor",
    content: "",
  },
  {
    name: "passport-photo-editor",
    content: "",
  },
  {
    name: "image-exif-extractor",
    content: "",
  },
  {
    name: "color-extractor",
    content: "",
  },
  {
    name: "image-to-icon",
    content: "",
  },
  {
    name: "image-sharing-hosting",
    content: "",
  },
  {
    name: "image-resize",
    content: "",
  },
  {
    name: "device-image-generator",
    content: "",
  },
  {
    name: "image-crop-flip-rotate",
    content: "",
  },
  {
    name: "mermaid-editor",
    content: "",
  },
  {
    name: "image-comparator",
    content: "",
  },
  {
    name: "image-compressor",
    content: "",
  },
  {
    name: "image-exif-editor",
    content: "",
  },
  {
    name: "image-watermarking",
    content: "",
  },
  {
    name: "placeholder-image",
    content: "",
  },
  {
    name: "favicon-generator",
    content: "",
  },
  {
    name: "background-removal",
    content: "",
  },
  {
    name: "ocr-text-recognition",
    content: "",
  },
  {
    name: "image-format-conversion",
    content: "",
  },
  {
    name: "plantuml-editor",
    content: "",
  },
  {
    name: "code-to-image",
    content: "",
  },
];
picDate.forEach(function (component) {
  var filePath = "./src/pages/picture-tools/".concat(component.name, ".vue");
  var fileContent = "<script>\nexport default {\n}\n</script>\n".concat(
    component.content
  );
  fs.writeFile(filePath, fileContent, function (err) {
    if (err) {
      console.error("Error writing file ".concat(filePath, ": ").concat(err));
    } else {
      console.log("Generated ".concat(filePath));
    }
  });
});
