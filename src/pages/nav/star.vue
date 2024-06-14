<template>
  <div class="w-screen flex justify-center">
    <div class="w-head">
      <div class="flex h-bg w-head bg-slate-100 relative justify-between">
        <!-- 左侧收藏 -->
        <div
          class="h-16 bg-white w-48 flex items-center justify-center rounded-lg absolute left-1 translate-x-24"
        >
          <a
            href="#"
            class="rounded-lg bg-slate-100 px-5 py-5 h-3/5 flex items-center w-40 text-slate-500"
          >
            <i class="fi fi-sr-star-christmas py-2 px-2 mt-1"></i>
            收藏
            <i
              class="fi fi-rr-angle-small-right y-2 px-2 mt-1 translate-x-12"
            ></i>
          </a>
        </div>
        <!-- 右侧收藏文件夹 -->
        <div
          class="bg-white w-star h-3/5 absolute right-36 rounded-2xl border bordered-slate-300 flex items-center justify-center translate-x-10"
        >
          <i class="fi fi-ss-followcollection text-6xl absolute top-52"></i>
          <div class="text-2xl text-slate-400">收藏的工具将会显示在这里</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "starTool",
};
</script>
