<template>
  <div class="flex justify-between w-full -translate-x-48">
    <!-- sidebar-menu -->
    <aside
      class="sidebar-menu bg-white w-40 h-[70%] py-2 rounded-lg translate-x-72"
    >
      <router-link to="/side-bar/json-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rr-file pr-2"></i>
            <span class="menu-text">JSON</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/yaml-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rr-file pr-2"></i>
            <span class="menu-text">YAML</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/ai-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rs-microchip-ai pr-2"></i>
            <span class="menu-text">AI工具</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/text-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rr-text pr-2"></i>
            <span class="menu-text">文本</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/pic-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-br-picture pr-2"></i>
            <span class="menu-text">图片</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/color-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rr-palette pr-2"></i>
            <span class="menu-text">颜色</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/program-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rr-site pr-2"></i>
            <span class="menu-text">编码</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/decrypt-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rr-display-code pr-2"></i>
            <span class="menu-text">解密</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/internet-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rr-site pr-2"></i>
            <span class="menu-text">网络</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/web-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-sr-window-alt pr-2"></i>
            <span class="menu-text">网页</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/math-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rr-chart-pie-alt pr-2"></i>
            <span class="menu-text">数学</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/media-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-br-tv-retro pr-2"></i>
            <span class="menu-text">媒体</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/calendar-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rs-calendar-clock pr-2"></i>
            <span class="menu-text">日期</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
      <router-link to="/side-bar/other-box" class="menu-item">
        <a
          href="#"
          class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg"
        >
          <div>
            <i class="menu-icon fi fi-rr-bulb pr-2"></i>
            <span class="menu-text">其他</span>
          </div>
          <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
      </router-link>
    </aside>
    <main class="w-full translate-x-80">
      <router-view />
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SideBarMenu",
});
</script>
<style></style>
