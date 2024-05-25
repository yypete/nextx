<template>
  <div class="flex justify-between h-full w-full">
    <!--左侧收藏图标 -->
    <div
      class="h-14 bg-white w-40 flex items-center justify-center rounded-lg translate-x-24"
    >
      <a
        href="#"
        class="rounded-lg bg-slate-100 px-5 py-5 h-3/5 flex items-center w-[85%] text-slate-500"
      >
        <i class="fi fi-sr-star-christmas py-2 px-2 mt-1"></i>
        收藏
        <i class="fi fi-rr-angle-small-right y-2 px-2 mt-1"></i>
      </a>
    </div>
    <!-- 右侧收藏文件夹 -->
    <div
      class="bg-white w-[80%] h-2/3 translate-x-3 rounded-lg border bordered-slate-400 flex items-center justify-center"
    >
      <i class="fi fi-ss-followcollection text-6xl"></i>
      <div class="text-4xl text-slate-500">收藏的工具将会显示在这里</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collect-tools",
};
</script>
