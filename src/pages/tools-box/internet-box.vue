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
  name: "internet-box",
  components: {
    SideBarMenu,
    ToolTable,
  },
  setup() {
    const tableData = [
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

    return { tableData };
  },
};
</script>
