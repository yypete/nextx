<template>
  <header class="header-container bg-slate-100 relative">
    <!-- 顶部搜索栏 -->
    <nav
      class="search-nav flex items-center justify-center px-3 py-4 h-20 relative space-x-6 bg-white"
    >
      <!-- logo图标 -->
      <a href="/">
        <img src="@/assets/logo.png" alt="logo" class="logo-icon h-10" />
      </a>
      <!-- 输入框 -->
      <input
        type="text"
        class="search-input bg-slate-200 w-2/5 h-12 rounded-lg border border-gray-200"
        placeholder="         输入关键字或自然语音进行搜索..."
      />
      <!-- 放大镜 -->
      <i
        class="search-icon fi fi-br-search absolute left-1/3 -translate-x-40 translate-y-1 text-2xl"
      ></i>
      <!-- 快捷键提示 -->
      <div
        class="shortcut-hint text-slate-400 absolute right-1/3 -translate-x-10"
      >
        Ctrl+K
      </div>
      <!-- 下载App按钮 -->
      <a href="https://he3app.com/">
        <button
          class="download-app-btn bg-slate-200 rounded-xl h-12 w-28 text-slate-800 translate-x-20"
        >
          下载App
        </button>
      </a>
      <!-- 用户头像 -->
      <a href="" class="user-avatar translate-x-20">
        <img src="@/assets/head.png" class="w-14 h-14 rounded-full" />
        <!-- 免费标志 -->
        <img
          src="@/assets/free.png"
          class="free-badge w-8 h-4 absolute top-12 translate-x-3"
        />
      </a>
    </nav>
    <!-- 顶部导航栏 -->
    <div class="w-full h-20 bg-slate-100">
      <nav
        class="top-nav flex items-center px-3 py-4 h-20 w-2/3 absolute left-96 justify-between"
      >
        <!-- 左侧导航部分 -->
        <div
          class="left-nav flex items-center px-3 py-4 space-x-6 translate-x-80"
        >
          <!-- 分类按钮 -->
          <router-link to="/side-bar">
            <button
              @click="setActiveButton('tool-box')"
              :class="{
                'active-button rounded-lg border bordered-gray-400 bg-slate-200':
                  activeButton === 'tool-box',
              }"
              class="category-btn"
            >
              <div><img src="@/assets/cube.png" class="nav-icon" /></div>
              <div>分类</div>
              <i class="fi fi-rr-angle-small-down translate-y-0.5"></i>
            </button>
          </router-link>
          <!-- 收藏按钮 -->
          <router-link to="/collect-tools">
            <button
              @click="setActiveButton('collect-tools')"
              :class="{
                'active-button rounded-lg border bordered-gray-400 bg-slate-200':
                  activeButton === 'collect-tools',
              }"
              class="favorite-btn text-slate-800 w-28 h-14 flex items-center px-1 space-x-2 hover:text-gray-400 pl-2"
            >
              <div><img src="@/assets/star.png" class="nav-icon" /></div>
              <div>收藏</div>
              <i class="fi fi-rr-angle-small-down translate-y-0.5"></i>
            </button>
          </router-link>
          <!-- 我的工具按钮 -->
          <router-link to="/my-tools">
            <button
              @click="setActiveButton('my-tools')"
              :class="{
                'active-button rounded-lg border bordered-gray-400 bg-slate-200':
                  activeButton === 'my-tools',
              }"
              class="category-btn"
            >
              <div><img src="@/assets/file.png" class="nav-icon" /></div>
              <div>我的工具</div>
            </button>
          </router-link>
        </div>
        <!-- 右侧导航部分 -->
        <div
          class="right-nav flex items-center px-3 py-4 space-x-6 -translate-x-36"
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
              <div>创建工具</div>
            </button>
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useActiveButton } from "@/utils/activeButton";

export default defineComponent({
  name: "HeaderNav",
  setup() {
    const { activeButton, setActiveButton } = useActiveButton();
    return {
      activeButton,
      setActiveButton,
    };
  },
});
</script>
