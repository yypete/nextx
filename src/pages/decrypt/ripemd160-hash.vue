<template>
  <main class="flex justify-center">
    <div class="h-imageToIcon w-head relative bg-slate-100">
      <SecondaryPageTitleVue :headTitle="headTitle" />
      <div class="page-content flex h-full relative py-4">
        <div
          class="left-tool w-imageToIcon h-full bg-white border border-gray-200 rounded-3xl absolute left-10"
        >
          <div
            class="h-full bg-white rounded-lg border bordered-gray-400 w-full"
          >
            <!-- tool-title -->
            <div class="flex items-center justify-between px-10 py-10">
              <!-- left-title -->
              <div class="text-2xl text-gray-700">请在这里输入内容：</div>
              <!-- right-title -->
              <div class="flex items-center space-x-2">
                <button class="btn-tool relative" data-tooltip="读取文件">
                  <i class="fi fi-rr-book-circle-arrow-right pr-1"></i>读取文件
                </button>
                <button class="btn-tool" data-tooltip="粘贴" @click="paste">
                  <i class="fi fi-tr-paste pr-1"></i>粘贴
                </button>
                <button class="btn-tool" data-tooltip="清空" @click="clearOut">
                  <i class="fi fi-rr-broom pr-1"></i>清空
                </button>
                <button class="btn-tool" data-tooltip="复制" @click="copy">
                  <i class="fi fi-sr-copy-alt pr-1"></i>复制
                </button>
              </div>
            </div>
            <!-- tool-content -->
            <div>
              <div class="w-full flex justify-center">
                <input
                  type="text"
                  class="rounded-lg border-gray-500 border h-28 w-4/5 mx-10 text-2xl pb-14 pl-4"
                  v-model="inputText"
                  @input="calculateRipeMd160Hash"
                />
              </div>
              <div class="flex items-center justify-between px-10 py-10">
                <!-- left-title -->
                <div class="text-2xl text-gray-700">Ripemd160Hash:</div>
                <!-- right-title -->
                <div class="flex items-center space-x-2">
                  <!-- 分割符 -->
                  <div class="divide flex items-center space-x-2">
                    <div class="flex items-center relative">
                      分隔符：
                      <button
                        class="border border-gray-500 px-2 py-1 flex items-center"
                        @click="toggleDropdown"
                      >
                        <div>(无分隔符)</div>
                        <i class="fi fi-rs-angle-small-down ml-2"></i>
                        <div
                          v-if="isDropdownOpen"
                          class="absolute top-10 mt-1 bg-white border border-gray-500 rounded shadow-md dropdown-menu w-26 z-10"
                        >
                          <div
                            @click="selectOption('冒号')"
                            class="dropdown-item px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          >
                            冒号(:)
                          </div>
                          <div
                            @click="selectOption('空格')"
                            class="dropdown-item px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          >
                            空格()
                          </div>
                          <div
                            @click="selectOption('中划线')"
                            class="dropdown-item px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          >
                            中划线(-)
                          </div>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button
                        class="border-gray-500 border rounded-lg px-2 py-1 rounded-r-none"
                        @click="selectOption('小写')"
                      >
                        小写
                      </button>
                      <button
                        class="border-gray-500 border rounded-lg px-2 py-1 rounded-l-none"
                        @click="selectOption('大写')"
                      >
                        大写
                      </button>
                    </div>
                    <div>
                      <button
                        class="border-gray-500 border rounded-lg px-2 py-1 rounded-r-none"
                        @click="selectOption('HEX')"
                      >
                        HEX
                      </button>
                      <button
                        class="border-gray-500 border rounded-lg px-2 py-1 rounded-l-none"
                        @click="selectOption('BASE64')"
                      >
                        BASE64
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Ripemd160Hash-output -->
              <div class="w-full flex justify-center relative">
                <input
                  type="text"
                  class="rounded-lg border-gray-500 border h-14 w-4/5 mx-10 text-sm"
                  v-model="outputText"
                />
                <a href="#" class=""
                  ><i
                    class="fi fi-rr-copy-alt absolute right-32 top-4 text-2xl"
                  ></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="right-menu ml-5 w-60 absolute right-32 h-introduction overflow-y-scroll"
        >
          <!-- SideBarMenu -->
          <SecondarySideBarMenu
            :sideBarData="sideBarData"
            :titleData="titleData"
          />
          <br />
          <!-- introduction -->
          <div
            class="rounded-lg border bordered-gray-400 side-nav -translate-y-9 w-sidebarMenu"
          >
            <!-- top -->
            <div
              class="text-gray-400 text-sm border-b-2 border-slate-300 flex justify-center items-center h-6"
            >
              <i class="fi fi-sr-rocket-lunch"></i>
              1.0.5
            </div>
            <!-- mid -->
            <div class="w-full px-2 py-2 text-sm text-slate-600">
              <div class="w-full">
                <router-link to="#" class="h-8 w-full"
                  >Ripemd160哈希工具是一种加密哈希函数。</router-link
                >
              </div>
              <br />
              <div class="w-full">
                <router-link to="#" class="w-full h-8"
                  >发布时间： 2023年6月2日</router-link
                >
              </div>
              <div class="w-full">
                <router-link to="#" class="h-8 w-full"
                  >链接:https://t.he3app.com/yooy</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JSSHA from "jssha";
import data from "@/config";
import SecondaryPageTitleVue from "@/components/secondary-header.vue";
import SecondarySideBarMenu from "@/components/secondary-sidebar.vue";

export default defineComponent({
  name: "utc-conversation",
  components: {
    SecondaryPageTitleVue,
    SecondarySideBarMenu,
  },
  data() {
    const sideBarData = data.decryptData;
    const titleData = "解密";
    const headTitle = "Ripemd160哈希";
    return {
      inputText: "",
      outputText: "",
      isDropdownOpen: false,
      sideBarData,
      titleData,
      headTitle,
    };
  },
  methods: {
    // Paste
    paste() {
      navigator.clipboard.readText().then((clipText: string) => {
        const inputElement = document.querySelector(
          "input[type='text']"
        ) as HTMLInputElement;
        if (inputElement) {
          inputElement.value = clipText;
        }
      });
    },
    // copy
    copy() {
      const inputElement = document.querySelector(
        "input[type='text']"
      ) as HTMLInputElement;
      if (inputElement) {
        const textToCopy = inputElement.value;
        navigator.clipboard.writeText(textToCopy);
      }
    },
    // ripeMd160 decrypted
    ripeMd160(input: string) {
      const haSher = new JSSHA("SHA3-512", "TEXT");
      haSher.update(input);
      return haSher.getHash("HEX");
    },
    // control the outputText
    calculateRipeMd160Hash() {
      if (this.inputText.trim() === "") {
        this.outputText = "";
      } else {
        this.outputText = this.ripeMd160(this.inputText)
          .toString()
          .substring(0, 40);
      }
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option: string | null) {
      const hash = this.ripeMd160(this.inputText)?.toString()?.substring(0, 40);
      if (hash) {
        if (option === "冒号") {
          this.outputText = hash.match(/.{1,2}/g)?.join(":") ?? "";
        } else if (option === "空格") {
          this.outputText = hash.match(/.{1,2}/g)?.join(" ") ?? "";
        } else if (option === "中划线") {
          this.outputText = hash.match(/.{1,2}/g)?.join("-") ?? "";
        } else if (option === "小写") {
          this.outputText = hash.toLowerCase();
        } else if (option === "大写") {
          this.outputText = hash.toUpperCase();
        } else if (option === "HEX") {
          this.outputText = hash;
        } else if (option === "BASE64") {
          this.outputText = btoa(hash);
        }
      }
      this.isDropdownOpen = false;
    },
    clearOut() {
      this.inputText = "";
      this.outputText = "";
    },
  },
});
</script>
