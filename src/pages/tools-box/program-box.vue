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
  name: "program-box",
  components: {
    SideBarMenu,
    ToolTable,
  },
  setup() {
    const  tableData = [
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
    { name: "IDN (Punycode) 域名解码", path: "/idn-punycode-domain-decoding" },
    { name: "文字二维码生成器", path: "/text-qr-code-generator" },
    { name: "Base62解码", path: "/base62-decoding" },
    { name: "十六进制转ASCII", path: "/hexadecimal-to-ascii" },
    { name: "Base58编码", path: "/base58-encoding" },
    { name: "莫尔斯电码解码", path: "/morse-code-decoding" },
    { name: "IDN (Punycode) 域名编码", path: "/idn-punycode-domain-encoding" },
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
    { name: "Unicode编码", path: "/unicode-encoding" }
];

    return { tableData };
  },
};
</script>
