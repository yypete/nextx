<template>
  <header class="header-container flex justify-center sticky top-0">
    <div>
      <div class="w-screen bg-white flex justify-center">
        <!-- 顶部搜索栏 -->
        <nav
          class="search-nav flex items-center justify-center px-3 py-4 h-20 relative space-x-6 bg-white z-50 w-head"
          :class="{ 'bg-gray-200': bgChange }"
        >
          <!-- logo图标 -->
          <a href="/">
            <img
              src="@/assets/logo.png"
              alt="logo"
              class="logo-icon h-10 w-logo absolute left-8 top-5"
            />
          </a>
          <!-- 输入框 -->
          <input
            type="text"
            class="search-input bg-slate-200 w-input h-input rounded-lg border border-gray-200 placeholder:text-gray-400 text-palceholder absolute left-24"
            placeholder="         输入关键字或自然语音进行搜索..."
            @click="inputFocused"
            v-show="!bgChange"
          />
          <!-- 放大镜 -->
          <i
            class="search-icon fi fi-br-search absolute left-28 bottom-5 text-2xl text-gray-500"
            v-show="!bgChange"
          ></i>
          <!-- 快捷键提示 -->
          <div
            class="shortcut-hint text-slate-400 absolute right-80"
            v-show="!bgChange"
          >
            Ctrl+K
          </div>
          <hoverSearch
            v-if="bgChange"
            class="absolute top-14 right-[28%] search-input"
          ></hoverSearch>
          <!-- 下载App按钮 -->
          <a href="https://he3app.com/">
            <button
              class="download-app-btn bg-slate-200 rounded-xl h-button w-28 text-slate-800 text-lg absolute top-3.5 right-28"
              v-show="!bgChange"
            >
              下载App
            </button>
          </a>
          <!-- 用户头像 -->
          <div class="absolute right-0">
            <a
              href="#"
              class="relative"
              @mouseover="showHoverAccount = true"
              @mouseleave="showHoverAccount = false"
            >
              <img
                src="@/assets/head.png"
                class="w-12 h-12 rounded-full hover:border hover:border-blue-800"
              />
              <!-- 免费标志 -->
              <span
                data-v-54a10939=""
                data-v-7095c0fe=""
                class="vip-tag tag absolute right-2 top-9"
                style="
                  --95833440: 32px;
                  --09af7fac: linear-gradient(180deg, #191d23 0%, #191d23 100%);
                  --af2a5c3a: 16px;
                "
                >free</span
              >
              <!-- 下拉菜单 -->
              <hoverAccount
                v-if="showHoverAccount"
                class="absolute top-full"
              ></hoverAccount>
            </a>
          </div>
        </nav>
      </div>
      <div class="w-screen bg-slate-100 flex justify-center">
        <div class="w-head translate-x-6">
          <!-- 顶部导航栏 -->
          <nav
            class="top-nav flex items-center px-3 py-4 h-20 w-head bg-slate-100 justify-between relative z-40"
          >
            <!-- 左侧导航部分 -->
            <div
              class="left-nav flex items-center px-3 py-4 space-x-10 absolute left-20"
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
                class="absolute top-16 right-92 -translate-x-10 translate-y-2 z-100"
                @mouseover="showHoverCategory = true"
                @mouseleave="showHoverCategory = false"
                :showHoverCategory="showHoverCategory"
              ></hoverCategory>
              <!-- 收藏按钮 -->
              <router-link to="/home/star" class="relative">
                <button
                  @click="setActiveButton('collect-tools')"
                  :class="{
                    'active-button rounded-lg border bordered-gray-400 bg-slate-200':
                      activeButton === 'collect-tools',
                  }"
                  class="favorite-btn text-slate-800 w-28 h-14 flex items-center px-1 space-x-2 hover:text-gray-400 pl-2"
                  @mouseover="showHoverStar = true"
                  @mouseleave="showHoverStar = false"
                >
                  <div><img src="@/assets/star.png" class="nav-icon" /></div>
                  <div class="text-lg">收藏</div>
                  <i class="fi fi-rr-angle-small-down translate-y-0.5"></i>
                </button>
                <hoverStar
                  v-show="showHoverStar"
                  class="absolute"
                  @mouseover="showHoverStar = true"
                  @mouseleave="showHoverStar = false"
                >
                </hoverStar>
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
              class="right-nav flex items-center px-3 py-4 space-x-6 absolute right-1"
            >
              <!-- 创建工具按钮 -->
              <router-link to="/create-tools">
                <button
                  @click="setActiveButton('create-tools')"
                  :class="{
                    'active-button rounded-lg border bordered-gray-400 bg-slate-200 ':
                      activeButton === 'create-tools',
                  }"
                  class="category-btn -translate-x-32"
                >
                  <div><img src="@/assets/star.png" class="nav-icon" /></div>
                  <div class="text-lg">创建工具</div>
                </button>
              </router-link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";
import { useActiveButton } from "@/utils/activeButton";
import hoverCategory from "./hover-category.vue";
import hoverAccount from "./hover-account.vue";
import hoverStar from "./hover-star.vue";
import hoverSearch from "./hover-search.vue";

export default defineComponent({
  name: "HeaderNav",
  components: {
    hoverCategory,
    hoverAccount,
    hoverStar,
    hoverSearch,
  },
  setup() {
    const { activeButton, setActiveButton } = useActiveButton();
    const showHoverCategory = ref(false);
    const showHoverAccount = ref(false);
    const showHoverStar = ref(false);
    const bgChange = ref(false);
    function inputFocused() {
      bgChange.value = true;
    }
    function outFocused() {
      bgChange.value = false;
    }
    window.addEventListener("click", (event) => {
      const target = event.target as Element;
      if (!target.closest(".search-input") && !target.closest(".hoverSearch")) {
        bgChange.value = false;
      }
    });
    return {
      activeButton,
      setActiveButton,
      showHoverCategory,
      showHoverAccount,
      showHoverStar,
      inputFocused,
      bgChange,
      outFocused,
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
.vip-tag[data-v-54a10939] {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: var(--09af7fac);
  width: var(--95833440);
  height: var(--af2a5c3a);
  border-radius: 4px;
  transform: skew(-13deg);
  color: #fff;
  text-transform: capitalize;
}
</style>
