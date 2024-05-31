<template>
  <header class="header-container bg-slate-100 relative w-full">
    <!-- 顶部搜索栏 -->
    <nav
      class="search-nav flex items-center justify-center px-3 py-4 h-24 relative space-x-6 bg-white"
    >
      <!-- logo图标 -->
      <a href="/">
        <img
          src="@/assets/logo.png"
          alt="logo"
          class="logo-icon h-12 w-18 absolute -translate-x-16 -translate-y-6"
        />
      </a>
      <!-- 输入框 -->
      <input
        type="text"
        class="search-input bg-slate-200 w-[45%] h-14 rounded-lg border border-gray-200 placeholder:text-gray-400 text-lg"
        placeholder="          输入关键字或自然语音进行搜索..."
      />
      <!-- 放大镜 -->
      <i
        class="search-icon fi fi-br-search absolute right-3/4 bottom-7 text-2xl text-gray-500"
      ></i>
      <!-- 快捷键提示 -->
      <div
        class="shortcut-hint text-slate-400 absolute left-[60%] translate-x-20"
      >
        Ctrl+K
      </div>
      <!-- 下载App按钮 -->
      <a href="https://he3app.com/">
        <button
          class="download-app-btn bg-slate-200 rounded-xl h-14 w-32 text-slate-800 translate-x-20 text-lg"
        >
          下载App
        </button>
      </a>
      <!-- 用户头像 -->
      <a href="" class="user-avatar translate-x-24">
        <img src="@/assets/head.png" class="w-14 h-14 rounded-full" />
        <!-- 免费标志 -->
        <img
          src="@/assets/free.png"
          class="free-badge w-10 h-6 absolute top-10 translate-x-3"
        />
      </a>
    </nav>
    <!-- 顶部导航栏 -->
    <nav
      class="top-nav flex items-center px-3 py-4 h-20 w-full bg-slate-100 justify-between relative"
    >
      <!-- 左侧导航部分 -->
      <div
        class="left-nav flex items-center px-3 py-4 space-x-10 absolute left-[25%] -translate-x-12"
      >
        <!-- 分类按钮 -->
        <router-link to="/home/category">
          <button
            @click="setActiveButton('tool-box')"
            @mouseover="showHoverCategory = true"
            @mouseleave="showHoverCategory = false"
            :class="{
              'active-button rounded-lg border bordered-gray-400 bg-slate-200':
                activeButton === 'tool-box',
            }"
            class="category-btn"
          >
            <div><img src="@/assets/cube.png" class="nav-icon" /></div>
            <div class="text-lg">分类</div>
            <i class="fi fi-rr-angle-small-down translate-y-0.5"></i>
          </button>
        </router-link>
        <hoverCategory
          v-show="showHoverCategory"
          class="absolute top-14 right-68 z-50"
          @mouseover="showHoverCategory = true"
          @mouseleave="showHoverCategory = false"
          :showHoverCategory="showHoverCategory"
        ></hoverCategory>
        <!-- 收藏按钮 -->
        <router-link to="/home/star">
          <button
            @click="setActiveButton('collect-tools')"
            :class="{
              'active-button rounded-lg border bordered-gray-400 bg-slate-200':
                activeButton === 'collect-tools',
            }"
            class="favorite-btn text-slate-800 w-28 h-14 flex items-center px-1 space-x-2 hover:text-gray-400 pl-2"
          >
            <div><img src="@/assets/star.png" class="nav-icon" /></div>
            <div class="text-lg">收藏</div>
            <i class="fi fi-rr-angle-small-down translate-y-0.5"></i>
          </button>
        </router-link>
        <!-- 我的工具按钮 -->
        <router-link to="/home/myTool">
          <button
            @click="setActiveButton('my-tools')"
            :class="{
              'active-button rounded-lg border bordered-gray-400 bg-slate-200':
                activeButton === 'my-tools',
            }"
            class="category-btn"
          >
            <div><img src="@/assets/file.png" class="nav-icon" /></div>
            <div class="text-lg">我的工具</div>
          </button>
        </router-link>
      </div>
      <!-- 右侧导航部分 -->
      <div
        class="right-nav flex items-center px-3 py-4 space-x-6 absolute right-[20%] -translate-x-20"
      >
        <!-- 创建工具按钮 -->
        <router-link to="/create-tools">
          <button
            @click="setActiveButton('create-tools')"
            :class="{
              'active-button rounded-lg border bordered-gray-400 bg-slate-200 ':
                activeButton === 'create-tools',
            }"
            class="category-btn"
          >
            <div><img src="@/assets/star.png" class="nav-icon" /></div>
            <div class="text-lg">创建工具</div>
          </button>
        </router-link>
      </div>
    </nav>
  </header>
</template>
<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";
import { useActiveButton } from "@/utils/activeButton";
import hoverCategory from "./hover-category.vue";

export default defineComponent({
  name: "HeaderNav",
  components: {
    hoverCategory,
  },
  setup() {
    const { activeButton, setActiveButton } = useActiveButton();
    const showHoverCategory = ref(false);
    return {
      activeButton,
      setActiveButton,
      showHoverCategory,
    };
  },
});
</script>
<!-- hover-category.vue -->
<style scoped>
.hover-category-class {
  position: absolute;
  z-index: 1000; /* 确保这个值高于其他可能覆盖的z-index值 */
  /* 其他样式 */
}
</style>
