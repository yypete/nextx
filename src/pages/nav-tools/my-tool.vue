<template>
  <div class="flex h-screen w-full bg-slate-100 relative">
    <!-- 右侧收藏文件夹 -->
    <div
      class="bg-white w-[55%] h-2/5 absolute right-1/4 translate-x-20 rounded-2xl border bordered-slate-300 flex items-center justify-center"
    >
      <i class="fi fi-ss-followcollection text-6xl absolute top-40"></i>
      <div class="text-2xl text-slate-400">自己的工具将会显示在这里</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTool",
};
</script>
