<template>
  <div class="bg-white rounded-lg px-3 w-[80%]">
    <table class="table w-full my-4">
      <tr
        class="w-full flex text-center space-x-1 items-center py-2"
        v-for="(item, itemIndex) in chunksData"
        :key="itemIndex"
      >
        <td class="w-1/3 h-14">
          <router-link :to="item[0].path">
            <a href="#" class="item-box">
              <div class="text-slate-600 text-md pl-2">{{ item[0].name }}</div>
              <div class="flex items-center space-x-1 pr-2">
                <i class="fi fi-rr-star"></i>
                <i class="fi fi-rr-menu-dots"></i>
              </div>
            </a>
          </router-link>
        </td>
        <td class="w-1/3 h-14">
          <router-link :to="item[1].path">
            <a href="#" class="item-box">
              <div class="text-slate-600 text-md pl-2">{{ item[1].name }}</div>
              <div class="flex items-center space-x-1 pr-2">
                <i class="fi fi-rr-star"></i>
                <i class="fi fi-rr-menu-dots"></i>
              </div>
            </a>
          </router-link>
        </td>
        <td class="w-1/3 h-14">
          <router-link :to="item[2].path">
            <a href="#" class="item-box">
              <div class="text-slate-600 text-md pl-2">{{ item[2].name }}</div>
              <div class="flex items-center space-x-1 pr-2">
                <i class="fi fi-rr-star"></i>
                <i class="fi fi-rr-menu-dots"></i>
              </div>
            </a>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

interface TableType {
  name: string;
  path: string;
}

export default defineComponent({
  name: "ToolTable",
  props: {
    tableData: {
      type: Array as PropType<TableType[]>,
      required: true,
    },
  },
  computed: {
    // 将 tableData 切割成每组三个项
    chunksData(): TableType[][] {
      const tdSize = 3;
      const chunks: TableType[][] = [];
      for (let i = 0; i < this.tableData.length; i += tdSize) {
        chunks.push(this.tableData.slice(i, i + tdSize));
      }
      return chunks;
    },
  },
});
</script>
<style></style>
