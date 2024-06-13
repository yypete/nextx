<template>
  <div
    class="w-56 bg-white border border-gray-200 shadow-2xl text-gray-600 px-2 py-4 rounded-xl"
  >
    <header class="py-2">
      <div class="flex items-center space-x-2">
        <div class="text-4xl text-slate-800 px-1">Peter</div>
        <img src="@/assets/free.png" class="w-14 h-8 px-1 translate-x-3" />
      </div>
    </header>
    <main class="py-2">
      <div class="border-b-2 border-gray-200">
        <header class="text-md text-slate-600 py-1">Appearance</header>
        <div class="flex items-center">
          <div class="text-sm text-slate-400">
            <img
              src="@/assets/light.png"
              class="px-2 py-2 w-16 h-16 border-2 rounded-lg border-slate-800 transition-transform duration-300 transform hover:scale-110"
            />
            <div class="translate-x-3 py-1">Light</div>
          </div>
          <div class="text-sm text-slate-400">
            <img
              src="@/assets/dark.png"
              class="px-2 py-2 w-16 h-16  rounded-lg border-slate-800 transition-transform duration-300 transform hover:scale-110"
            />
            <div class="translate-x-3 py-1">Dark</div>
          </div>
          <div class="text-sm text-slate-400">
            <img
              src="@/assets/system.png"
              class="px-2 py-2 w-16 h-16  rounded-lg border-slate-800 transition-transform duration-300 transform hover:scale-110"
            />
            <div class="translate-x-3 py-1">System</div>
          </div>
        </div>
      </div>
    </main>
    <footer class="py-2">
      <div>
        <a class="flex pl-3 space-x-3 py-1 w-full hover:bg-blue-100" href="#">
          <div><i class="fi fi-rr-comment-alt"></i></div>
          <div>反馈</div>
        </a>
        <a class="flex pl-3 space-x-3 py-1 w-full hover:bg-blue-100" href="#">
          <div><i class="fi fi-rr-settings"></i></div>
          <div>设置</div>
        </a>
        <a class="flex pl-3 space-x-3 py-1 w-full hover:bg-blue-100" href="#">
          <div><i class="fi fi-rr-globe"></i></div>
          <div>官方</div>
        </a>
        <a
          class="flex pl-3 space-x-3 py-1 w-full hover:bg-blue-100 text-sm text-gray-400"
          href="#"
        >
          logout
        </a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "hoverAccount",
};
</script>
