<template>
  <aside class="h-3/5 rounded-lg border bordered-gray-400 aside-nav">
    <!-- secondary-nav-head-title -->
    <div
      class="h-10 text-gray-400 text-sm border-b-2 border-slate-300 flex items-center pl-4"
    >
      <i class="fi fi-sr-document px-2 pt-1"></i>
      {{ titleData }}
    </div>
    <!-- secondary-nav-head-content -->
    <div
      class="w-full  text-sm text-slate-700"
      v-for="(item, index) in sideBarData"
      :key="index"
    >
      <div class="w-full flex items-center">
        <router-link :to="item.path" class="nav-tool">{{
          item.name
        }}</router-link>
      </div>
    </div>
  </aside>
  <br />
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

interface SideBarType {
  name: string;
  path: string;
}

export default defineComponent({
  name: "SecondarySideBarMenu",
  props: {
    sideBarData: {
      type: Array as PropType<SideBarType[]>,
      required: true,
    },
    titleData: {
      type: String,
    },
  },
});
</script>
<style scoped>
.aside-nav {
  background-color: #e3ebf2;
}
</style>
