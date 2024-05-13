<template>
  <div class="h-screen bg-slate-100 relative">
    <!-- 顶部搜索栏 -->
    <nav class="flex items-center px-3 py-4 h-20 justify-center relative space-x-6 bg-white">
      <!-- logo图标 -->
      <a href="#" >
        <img src="./assets/logo2.png" alt="logo" class="h-10">
      </a>
      <!-- 输入框 -->
        <input type="text" class="bg-slate-200 w-2/5 h-12 rounded-lg border border-gray-200" placeholder="         输入关键字或自然语音进行搜索...">
        <!-- 放大镜 -->
        <svg class="w-6 h-6 absolute left-1/3 -translate-x-40"><path d="M21.53 20.47L17.689 16.629C18.973 15.106 19.75 13.143 19.75 11C19.75 6.175 15.825 2.25 11 2.25C6.175 2.25 2.25 6.175 2.25 11C2.25 15.825 6.175 19.75 11 19.75C13.143 19.75 15.106 18.973 16.629 17.689L20.47 21.53C20.616 21.676 20.808 21.75 21 21.75C21.192 21.75 21.384 21.677 21.53 21.53C21.823 21.238 21.823 20.763 21.53 20.47ZM3.75 11C3.75 7.002 7.002 3.75 11 3.75C14.998 3.75 18.25 7.002 18.25 11C18.25 14.998 14.998 18.25 11 18.25C7.002 18.25 3.75 14.998 3.75 11Z" fill="#081735"></path></svg>
        <div class="text-slate-400 absolute right-1/3 -translate-x-10">
          Ctrl+K
        </div>
        <a href="https://he3app.com/"><button class="bg-slate-200 rounded-xl h-12 w-28  text-slate-800 translate-x-20">
          下载App
        </button></a>
        <a href="" class="translate-x-20">
          <img src="./assets/head.png" class="w-14 h-14 rounded-full">
          <img src="./assets/free.png" class="w-8 h-4 absolute top-12 translate-x-3">
        </a>
    </nav>
    <!-- 顶部导航栏 -->
    <nav class="flex items-center px-3 py-4 h-20 w-2/3 absolute left-96 justify-between">
      <!-- 左侧导航部分 -->
      <div class="flex items-center px-3 py-4 space-x-6 translate-x-80">
        <!-- 分类按钮 -->
  <router-link to="">
      <button class="focus:bg-slate-200 focus:rounded-lg text-slate-800 w-28 h-14 flex items-center px-1 space-x-2 hover:text-gray-400 pl-2">
        <div><img src="./assets/方块.png" class="w-5 h-5"></div>
        <div>分类</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
    </button>
  </router-link>
    <router-view/>
      <!-- 收藏按钮 -->
      <button class="focus:bg-slate-200 focus:rounded-lg text-slate-800  w-28 h-14 flex items-center px-1 space-x-2 hover:text-gray-400 pl-2">
          <div><img src="./assets/星.png" class="w-5 h-5"></div>
          <div>收藏</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </button>
        <button class="focus:bg-slate-200 focus:rounded-lg text-slate-800  w-28 h-14 flex items-center px-1 space-x-2 hover:text-gray-400 pl-2">
          <div><img src="./assets/文件.png" class="w-5 h-5"></div>
          <div>我的工具</div>
        </button>
      </div>
      <div class="flex items-center px-3 py-4 space-x-6 -translate-x-36">
        <button class="focus:bg-slate-200 focus:rounded-lg text-slate-800  w-28 h-14 flex items-center px-1 space-x-2 hover:text-gray-400 pl-2">
          <div><img src="./assets/加号.png" class="w-5 h-5" ></div>
          <div>创建工具</div>
        </button>
      </div>
    </nav>
  </div>
</template>
