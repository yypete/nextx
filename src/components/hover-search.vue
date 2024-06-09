<template>
  <div
    class="search bg-white border border-gray-200 shadow-2xl text-gray-600 px-2 py-4 rounded-xl h-45"
  >
    <head>
      <div class="flex items-center relative justify-center">
        <i
          class="search-icon fi fi-br-search text-2xl text-gray-500 absolute -translate-x-96 translate-y-1"
        ></i>
        <input
          type="text"
          class="searchInput bg-slate-200 w-[45%] h-14 rounded-lg border border-gray-200 placeholder:text-gray-400 text-lg pl-14"
          placeholder="          输入关键字或自然语音进行搜索..."
        />
        <div class="-translate-x-20">Ctrl+K</div>
      </div>
    </head>
    <main class="border-b-2 border-gray-200 flex justify-center -translate-x-6">
      <div
        class="iconInput hover:bg-gray-100 my-5 flex items-center justify-center"
      >
        <i class="fi fi-rs-globe gradient-text px-3 pt-1 earth"></i>
        <div class="gradient-text">使用语义搜索</div>
      </div>
    </main>
    <footer>
      <div class="footer flex items-center justify-center">
        <img src="../assets/bg.png" class="w-200 h-10 pt-2" />
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "hoverSearch",
};
</script>

<style scoped>
.searchInput {
  width: 800px;
}
.search {
  width: 1000px;
}
.iconInput {
  width: 800px;
  height: 40px;
  border: 2px solid;
  border-image: linear-gradient(to bottom, #0000ff, #008000) 1;
}
.gradient-text {
  color: transparent;
  background: linear-gradient(to bottom, #0000ff, #008000);
  -webkit-background-clip: text;
  background-clip: text;
  /* 确保渐变背景显示在文本下方 */
  display: inline-block;
  /* 其他样式 */
  font-size: 1em; /* 根据需要调整字体大小 */
  letter-spacing: 1px; /* 调整字母间距 */
}
.footer {
  background-color: #ffffff;
}
</style>
