<template>
  <div
    class="page-title bg-slate-100 flex items-center justify-between w-full relative pt-10"
  >
    <div class="left-title flex space-x-4 absolute left-20 pb-12">
      <div class="text-4xl text-slate-900">{{ headTitle }}</div>
      <i
        class="fi fi-rr-star hover:rotate-270 transition-transform transform-gpu text-2xl absolute left-[70%] top-[10%] pl-12 cursor-pointer"
      ></i>
      <i
        class="fi fi-sr-comment text-2xl absolute left-[90%] top-[10%] pl-10 cursor-pointer"
      ></i>
    </div>
    <div class="right-title flex space-x-3 mt-3 absolute right-10 pb-12">
      <div class="flex items-center relative justify-center">
        <img
          src="@/assets/logo.png"
          class="w-10 h-6 cursor-pointer -translate-x-56 translate-y-3.5"
        />
        <a href="https://github.com/he3-app/tools-example/tree/main/batch-json">
          <i class="fi fi-rr-cloud-share text-2xl absolute right-48"></i>
        </a>
        <a href="#">
          <i
            class="fi fi-tr-tally-1 text-2xl text-gray-600 absolute right-36"
          ></i>
        </a>
        <a href="#">
          <i class="fi fi-brands-acrobat text-2xl absolute right-32"></i>
        </a>
        <a href="#">
          <i
            class="fi fi-brands-illustrator-draw text-2xl absolute right-24"
          ></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SecondaryPageTitle",
  props: {
    headTitle: {
      type: String,
    },
  },
});
</script>
<style>
@import url("https://cdn-uicons.flaticon.com/2.4.0/uicons-thin-rounded/css/uicons-thin-rounded.css");
</style>
