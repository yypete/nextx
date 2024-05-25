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
  name: "math-box",
  components: {
    ToolTable,
  },
  setup() {
    const tableData = [
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

    return { tableData };
  },
};
</script>
