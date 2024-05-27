<template>
  <!-- page-title-->
  <header class="bg-slate-100 flex items-center justify-between pb-4">
    <!-- left-title -->
    <div class="flex space-x-4">
      <div class="text-4xl text-slate-900">{{headTitle}}</div>
      <i
        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu text-2xl translate-y-2"
      ></i>
      <i class="fi fi-sr-comment text-2xl translate-y-2"></i>
    </div>
    <!-- right-title-->
    <div class="flex space-x-3 mt-3">
      <img src="@/assets/logo.png" class="w-10 h-6 translate-y-1" />
      <a href="https://github.com/he3-app/tools-example/tree/main/batch-json">
        <i class="fi fi-rr-cloud-share text-2xl"></i>
      </a>
      <a href="#">
        <i class="fi fi-tr-tally-1 text-2xl pl-2"></i>
      </a>
      <a href="#">
        <i class="fi fi-brands-acrobat text-2xl"></i>
      </a>
      <a href="#">
        <i class="fi fi-brands-illustrator-draw text-2xl"></i>
      </a>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SecondaryPageTitle",
  props: {
    headTitle:{
      type: String,
    }
  },
});
</script>
