<template>
  <main class="flex justify-center">
    <div class="h-imageToIcon w-head relative bg-slate-100">
      <SecondaryPageTitleVue
        :headTitle="headTitle"
        class="absolute justify-between"
      ></SecondaryPageTitleVue>
      <div class="page-content flex h-full relative py-4">
        <div
          class="left-tool w-imageToIcon h-full bg-white border border-gray-200 rounded-3xl absolute left-10"
        >
          <imageSelectSize />
        </div>
        <div class="right-menu ml-5 w-60 absolute right-32">
          <!-- SideBarMenu -->
          <SecondarySideBarMenu
            :sideBarData="sideBarData"
            :titleData="titleData"
          ></SecondarySideBarMenu>
          <br />
          <!-- introduction -->
          <div class="h-[15%] rounded-lg border bordered-gray-400 side-nav">
            <!-- top -->
            <div
              class="h-10 text-gray-400 text-sm border-b-2 border-slate-300 flex justify-center items-center"
            >
              <i class="fi fi-sr-rocket-lunch"></i>
              1.0.5
            </div>
            <!-- mid -->
            <div class="w-full px-2 py-2 text-sm text-slate-600">
              <div class="w-full">
                <router-link to="#" class="h-8 w-full"
                  >图像转换为图标工具是一种将图像转换为图标的工具。</router-link
                >
              </div>
              <br />
              <div class="w-full">
                <router-link to="#" class="w-full h-8"
                  >发布时间： 2023年9月28日</router-link
                >
              </div>
              <div class="w-full">
                <router-link to="#" class="h-8 w-full"
                  >链接:https://t.he3app.com/dcfd</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import SecondarySideBarMenu from "@/components/secondary-sidebar.vue";
import { defineComponent } from "vue";
import SecondaryPageTitleVue from "@/components/secondary-header.vue";
import imageSelectSize from "@/components/image-select-size.vue";
import { sideBarData } from "@/config";

export default defineComponent({
  name: "imageToIcon",
  components: {
    SecondarySideBarMenu,
    SecondaryPageTitleVue,
    imageSelectSize,
  },
  setup() {
    const sideData = sideBarData;
    const titleData = "图片";
    const headTitle = "图片转图标";
    return {
      sideBarData,
      sideData,
      titleData,
      headTitle,
      imageSelectSize,
    };
  },
});
</script>
