<template>
  <div
    class="search bg-white border border-gray-200 shadow-2xl text-gray-600 px-2 py-4 rounded-xl relative"
  >
    <div
      class="flex items-center relative justify-center"
      style="position: sticky; top: 0px; z-index: 1000"
    >
      <i
        class="search-icon fi fi-br-search text-2xl text-gray-500 absolute left-16 top-4"
      ></i>
      <input
        type="text"
        class="searchInput bg-slate-200 w-full h-14 rounded-lg border border-gray-200 placeholder:text-gray-400 text-lg pl-14"
        placeholder="输入关键字或自然语音进行搜索..."
        v-model="searchQuery"
        @input="performSearch"
      />
      <div class="absolute right-20">Ctrl+K</div>
    </div>
    <div
      v-show="searchResults.length"
      class="searchResult bg-white mt-2 rounded-lg max-h-96 overflow-y-auto z-10 translate-x-10 translate-y-9"
    >
      <ul>
        <li
          v-for="(result, index) in searchResults"
          :key="index"
          class="p-4 hover:bg-slate-100 cursor-pointer"
          @click="navigateTo(result.path)"
        >
          <span v-html="highlightText(result.name)"></span>
        </li>
      </ul>
    </div>
    <main class="border-b-2 border-gray-200 flex justify-center mt-4">
      <div
        class="iconInput hover:bg-gray-100 my-5 flex items-center justify-center"
      >
        <i class="fi fi-rs-globe gradient-text px-3 pt-1 earth"></i>
        <div class="gradient-text">使用语义搜索</div>
      </div>
    </main>
    <footer class="footer flex items-center justify-center mt-2 relative">
      <img src="../assets/bg.png" class="img h-6 absolute" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import {
  picData,
  aiData,
  webData,
  textData,
  yamlData,
  calendarData,
  colorData,
  decryptData,
  internetData,
  jsonData,
  mathData,
  mediaData,
  otherData,
  programData,
} from "@/config";

interface inputData {
  name: string;
  path: string;
}

export default defineComponent({
  name: "SearchComponent",
  setup() {
    const searchQuery = ref("");
    const allData: inputData[] = [
      ...picData,
      ...aiData,
      ...webData,
      ...textData,
      ...yamlData,
      ...calendarData,
      ...colorData,
      ...decryptData,
      ...internetData,
      ...jsonData,
      ...mathData,
      ...mediaData,
      ...otherData,
      ...programData,
    ];

    const searchResults = ref<inputData[]>([]);
    const router = useRouter();
    const performSearch = () => {
      const query = searchQuery.value.trim().toLowerCase();
      if (query === "") {
        searchResults.value = [];
      } else {
        searchResults.value = allData.filter((item) =>
          item.name.toLowerCase().includes(query)
        );
      }
    };

    const navigateTo = (path: string) => {
      router.push(path);
    };

    const highlightText = (text: string) => {
      const query = searchQuery.value.trim().toLowerCase();
      if (!query) return text;
      const regex = new RegExp(`(${query})`, "gi");
      return text.replace(regex, '<mark class="mark">$1</mark>');
    };

    return {
      searchQuery,
      searchResults,
      performSearch,
      navigateTo,
      highlightText,
    };
  },
});
</script>

<style scoped>
.searchInput {
  width: 1000px;
}
.search {
  width: 1100px;
}
.iconInput {
  width: 1000px;
  height: 40px;
  border: 2px solid;
  border-image: linear-gradient(to bottom, #0000ff, #008000) 1;
}
.gradient-text {
  color: transparent;
  background: linear-gradient(to bottom, #0000ff, #008000);
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
  font-size: 1em;
  letter-spacing: 1px;
}

.searchResult {
  width: 1000px;
  max-height: 800px;
}
div::-webkit-scrollbar {
  display: none;
}
.img {
  width: 1200px;
}
.mark{
  color: #0000ff !important;
}
</style>
