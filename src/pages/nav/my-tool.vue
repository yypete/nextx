<template>
  <div class="w-screen flex justify-center">
    <div class="w-head">
      <div class="flex h-bg w-full bg-slate-100 relative justify-between">
        <div
          class="bg-white w-full h-mytool absolute rounded-2xl border bordered-slate-300 flex items-center justify-center translate-x-16"
        >
          <i class="fi fi-ss-followcollection text-6xl absolute top-32"></i>
          <div class="text-2xl text-slate-400">
            自己创建的工具将会显示在这里
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTool",
};
</script>
