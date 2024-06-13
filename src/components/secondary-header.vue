<template>
  <div
    class="page-title bg-slate-100 flex items-center justify-between w-head relative pt-10"
  >
    <div class="left-title flex space-x-4 absolute left-20 pb-12">
      <div class="text-4xl text-slate-900">{{ headTitle }}</div>
      <div class="translate-y-2 star" @click="toggleImage">
        <img
          v-if="!isStar2Visible"
          src="@/assets/star2.png"
          class="w-6 h-6 hover-spin"
        />
        <img
          v-if="isStar2Visible"
          src="@/assets/star3.png"
          class="w-6 h-6 hover-spin"
        />
      </div>
      <i
        class="fi fi-sr-comment text-2xl absolute left-[90%] top-[10%] pl-6 cursor-pointer"
      ></i>
    </div>
    <div
      class="right-title flex space-x-3 mt-3 absolute right-0 -translate-x-20 pb-12"
    >
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SecondaryPageTitle",
  props: {
    headTitle: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isStar2Visible = ref(false);

    const toggleImage = () => {
      isStar2Visible.value = !isStar2Visible.value;
    };

    return {
      isStar2Visible,
      toggleImage,
    };
  },
});
</script>

<style scoped>
.star {
  position: relative;
}

.hover-spin:hover {
  transform: rotate(360deg);
  transition: transform 0.8s ease;
}

.star img {
  cursor: pointer;
}
</style>
