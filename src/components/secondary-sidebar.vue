<template>
  <aside class="h-3/5  rounded-lg border bordered-gray-400 aside-nav">
    <!-- secondary-nav-head-title -->
    <div
      class="h-10 text-gray-400 text-sm border-b-2 border-slate-300 flex justify-center items-center"
    >
      <i class="fi fi-sr-document px-2"></i>
      {{ titleData }}
    </div>
    <!-- secondary-nav-head-content -->
    <div
      class="w-full px-2 py-2 text-sm text-slate-600"
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
.aside-nav{
  background-color: #E3EBF2;
}

</style>