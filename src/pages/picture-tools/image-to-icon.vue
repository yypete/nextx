<template>
  <div class="h-screen w-full relative bg-slate-100">
    <!-- page-title -->
    <SecondaryPageTitleVue
      :headTitle="headTitle"
      class="absolute pt-14"
    ></SecondaryPageTitleVue>
    <!-- page-content -->
    <div class="flex h-[80%] w-full relative py-4">
      <!-- page-tool -->
      <div
        class="w-[42%] h-full bg-white border border-gray-200 rounded-3xl absolute right-[34%]"
      >
        <div class="flex relative justify-between w-full h-full px-10 py-10">
          <!-- left-download -->
          <label
            class="w-[55%] h-[90%] border-dashed border-blue-400 bg-slate-100 border-2 rounded-2xl ml-10 flex items-center justify-center relative"
            for="fileInput"
            id="labelContainer"
            draggable="true"
            @dragover.prevent="handleDragOver"
            @drop="handleDrop"
          >
            <input
              type="file"
              id="fileInput"
              class="hidden"
              accept="image/*"
              @change="imageUpload"
            />
            <img
              id="uploadedImage"
              class="hidden w-full h-full"
              alt="Uploaded Image"
            />
            <div id="preContent">
              <i class="fi fi-sr-add-image text-4xl text-gray-400"></i>
              <div class="absolute top-[55%] right-14 text-3xl text-gray-400">
                点击或将图片拖拽到此区域上传
              </div>
            </div>
          </label>
          <!-- right-setting -->
          <div class="w-[40%] h-[90%] overflow-y-scroll">
            <!-- iPhone -->
            <div class="flex space-x-2 items-center pl-14 pt-2">
              <span
                class="cursor-pointer pt-2"
                @click="rotageChange('iPhone')"
                :class="{ 'transform rotate-90': rotated.iPhone }"
                ><i class="fi fi-rr-caret-right text-xl"></i
              ></span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="custom-checkbox"
                  :checked="selectAll[0]"
                  @change="updateAll(0)"
                  name="device"
                />
              </label>
              <span
                class="text-2xl text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
                @click="toggleBgChange('iPhone')"
                :class="{ 'bg-gray-600': bgChange.iPhone }"
                >iPhone</span
              >
            </div>
            <!-- hover-iPhone -->
            <div class="items-center pl-28 pt-2" v-if="rotated.iPhone">
              <div
                class="flex"
                v-for="(item, itemIndex) in inputData[0]"
                :key="itemIndex"
              >
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    :checked="item.selected"
                    @change="updateItem(itemIndex, 0)"
                  />
                </label>
                <div
                  class="text-2xl font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
                >
                  {{ item.content }}
                </div>
              </div>
            </div>
            <!--iPad  -->
            <div class="flex space-x-2 items-center pl-14 pt-2">
              <span
                class="cursor-pointer pt-2"
                @click="rotageChange('iPad')"
                :class="{ 'transform rotate-90': rotated.iPad }"
                ><i class="fi fi-rr-caret-right text-xl"></i
              ></span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="custom-checkbox"
                  :checked="selectAll[1]"
                  @change="updateAll(1)"
                  name="device"
                />
              </label>
              <span
                class="text-2xl text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
                @click="toggleBgChange('iPad')"
                :class="{ 'bg-gray-600': bgChange.iPad }"
                >iPad</span
              >
            </div>
            <!-- hover-iPad -->
            <div class="items-center pl-28 pt-2" v-if="rotated.iPad">
              <div
                class="flex"
                v-for="(item, itemIndex) in inputData[1]"
                :key="itemIndex"
              >
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    :checked="item.selected"
                    @change="updateItem(itemIndex, 1)"
                  />
                </label>
                <div
                  class="text-2xl font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
                >
                  {{ item.content }}
                </div>
              </div>
            </div>
            <!-- macOS -->
            <div class="flex space-x-2 items-center pl-14 pt-2">
              <span
                class="cursor-pointer pt-2"
                @click="rotageChange('macOS')"
                :class="{ 'transform rotate-90': rotated.macOS }"
                ><i class="fi fi-rr-caret-right text-xl"></i
              ></span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="custom-checkbox"
                  :checked="selectAll[2]"
                  @change="updateAll(2)"
                  name="device"
                />
              </label>
              <span
                class="text-2xl text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
                @click="toggleBgChange('macOS')"
                :class="{ 'bg-gray-600': bgChange.macOS }"
                >macOS</span
              >
            </div>
            <!-- hover-macOS -->
            <div class="items-center pl-28 pt-2" v-if="rotated.macOS">
              <div
                class="flex"
                v-for="(item, itemIndex) in inputData[2]"
                :key="itemIndex"
              >
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    :checked="item.selected"
                    @change="updateItem(itemIndex, 2)"
                  />
                </label>
                <div
                  class="text-2xl font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
                >
                  {{ item.content }}
                </div>
              </div>
            </div>
            <!-- watch-OS -->
            <div class="flex space-x-2 items-center pl-14 pt-2">
              <span
                class="cursor-pointer pt-2"
                @click="rotageChange('watchOS')"
                :class="{ 'transform rotate-90': rotated.watchOS }"
                ><i class="fi fi-rr-caret-right text-xl"></i
              ></span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="custom-checkbox"
                  :checked="selectAll[3]"
                  @change="updateAll(3)"
                  name="device"
                />
              </label>
              <span
                class="text-2xl text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
                @click="toggleBgChange('watchOS')"
                :class="{ 'bg-gray-600': bgChange.watchOS }"
                >watchOS</span
              >
            </div>
            <!-- hover-watchOS -->
            <div class="items-center pl-28 pt-2" v-if="rotated.watchOS">
              <div
                class="flex"
                v-for="(item, itemIndex) in inputData[3]"
                :key="itemIndex"
              >
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    :checked="item.selected"
                    @change="updateItem(itemIndex, 3)"
                  />
                </label>
                <div
                  class="text-2xl font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
                >
                  {{ item.content }}
                </div>
              </div>
            </div>
            <!-- Android -->
            <div class="flex space-x-2 items-center pl-14 pt-2">
              <span
                class="cursor-pointer pt-2"
                @click="rotageChange('Android')"
                :class="{ 'transform rotate-90': rotated.Android }"
                ><i class="fi fi-rr-caret-right text-xl"></i
              ></span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="custom-checkbox"
                  :checked="selectAll[4]"
                  @change="updateAll(4)"
                  name="device"
                />
              </label>
              <span
                class="text-2xl text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
                @click="toggleBgChange('Android')"
                :class="{ 'bg-gray-600': bgChange.Android }"
                >Android</span
              >
            </div>
            <!-- hover-Android -->
            <div class="items-center pl-28 pt-2" v-if="rotated.Android">
              <div
                class="flex"
                v-for="(item, itemIndex) in inputData[4]"
                :key="itemIndex"
              >
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    :checked="item.selected"
                    @change="updateItem(itemIndex, 4)"
                  />
                </label>
                <div
                  class="text-2xl font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
                >
                  {{ item.content }}
                </div>
              </div>
            </div>
            <!-- input -->
            <div class="pt-5 pl-10">
              <input
                type="text"
                placeholder="  请输入图标文件名"
                class="w-80 h-12 border border-gray-700 rounded-lg placeholder:text-gray-400 placeholder:text-xl placeholder:font-serif pl-5 text-lg"
                id="fileName"
              />
            </div>
            <!-- button -->
            <div class="pt-5 pl-10">
              <button
                class="bg-black text-white border rounded-md w-32 h-10 text-xl"
                @click="convertToIcon"
              >
                转换为图标
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- page-nav -->
      <div class="ml-5 w-60 absolute right-[24%]">
        <!-- SideBarMenu -->
        <SecondarySideBarMenu
          :sideBarData="sideBarData"
          :titleData="titleData"
        ></SecondarySideBarMenu>
        <br />
        <!-- introduction -->
        <div class="h-[15%] rounded-lg border bordered-gray-400 side-nav">
          <!-- top -->
          <div
            class="h-10 text-gray-400 text-sm border-b-2 border-slate-300 flex justify-center items-center"
          >
            <i class="fi fi-sr-rocket-lunch"></i>
            1.0.5
          </div>
          <!-- mid -->
          <div class="w-full px-2 py-2 text-sm text-slate-600">
            <div class="w-full">
              <router-link to="#" class="h-8 w-full"
                >图像转换为图标工具是一种将图像转换为图标的工具。</router-link
              >
            </div>
            <br />
            <div class="w-full">
              <router-link to="#" class="w-full h-8"
                >发布时间： 2023年9月28日</router-link
              >
            </div>
            <div class="w-full">
              <router-link to="#" class="h-8 w-full"
                >链接:https://t.he3app.com/dcfd</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import SecondarySideBarMenu from "@/components/secondary-sidebar.vue";
import { defineComponent } from "vue";
import SecondaryPageTitleVue from "@/components/secondary-header.vue";
import { ref, Ref } from "vue";
import JSZip from "jszip";

interface BgChange {
  [key: string]: boolean;
}
interface Item {
  content: string;
  selected: boolean;
}
interface FileEvent {
  target: { files: FileList };
}

export default defineComponent({
  name: "imageToIcon",
  components: {
    SecondarySideBarMenu,
    SecondaryPageTitleVue,
  },
  setup() {
    const sideBarData = [
      { name: "EXIF提取器", path: "/home/extension/exif-extractor" },
      { name: "证件照编辑器", path: "/home/extension/passport-photo-editor" },
      { name: "图片EXIF提取器", path: "/home/extension/image-exif-extractor" },
      { name: "颜色提取器", path: "/home/extension/color-extractor" },
      { name: "图片转图标", path: "/home/extension/image-to-icon" },
      {
        name: "图片分享/托管/图床",
        path: "/home/extension/image-sharing-hosting",
      },
      { name: "图片调整大小", path: "/home/extension/image-resize" },
      {
        name: "设备图片生成器",
        path: "/home/extension/device-image-generator",
      },
      {
        name: "图像裁剪/翻转/旋转",
        path: "/home/extension/image-crop-flip-rotate",
      },
      { name: "Mermaid 编辑器", path: "/home/extension/mermaid-editor" },
      { name: "图片比较器", path: "/home/extension/image-comparator" },
      { name: "图片压缩器", path: "/home/extension/image-compressor" },
      { name: "图片 EXIF 编辑器", path: "/home/extension/image-exif-editor" },
      { name: "图片添加水印", path: "/home/extension/image-watermarking" },
      { name: "占位图片", path: "/home/extension/placeholder-image" },
      { name: "Favicon生成器", path: "/home/extension/favicon-generator" },
      { name: "图像背景消除", path: "/home/extension/background-removal" },
      { name: "OCR文本识别", path: "/home/extension/ocr-text-recognition" },
      { name: "图像格式转换", path: "/home/extension/image-format-conversion" },
      { name: "PlantUML 编辑器", path: "/home/extension/plantuml-editor" },
      { name: "代码转图片", path: "/home/extension/code-to-image" },
    ];
    const titleData = "图片";
    const headTitle = "图片转图标";
    const bgChange = ref<BgChange>({
      iPhone: false,
      iPad: false,
      macOS: false,
      watchOS: false,
      Android: false,
    });
    const rotated = ref<BgChange>({
      iPhone: false,
      iPad: false,
      macOS: false,
      watchOS: false,
      Android: false,
    });
    const devicesIndex: { [key: string]: number } = {
      iPhone: 0,
      iPad: 1,
      macOS: 2,
      watchOS: 3,
      Android: 4,
    };
    interface IconObject {
      deviceType: string;
      sizes: string[];
      dataURLs: string[];
      fileNames: string[];
    }
    // 复选框背景颜色改变
    function toggleBgChange(item: string) {
      bgChange.value[item] = !bgChange.value[item];
    }
    // 箭头倒转
    function rotageChange(item: string) {
      rotated.value[item] = !rotated.value[item];
    }
    // 尺寸选择渲染
    // 全选model
    const selectAll = ref([false, false]);
    // 尺寸渲染数据
    const inputData: Ref<Item[][]> = ref([
      [
        { content: "29x29", selected: false },
        { content: "40x40", selected: false },
        { content: "57x57", selected: false },
        { content: "58x58", selected: false },
        { content: "60x60", selected: false },
        { content: "80x80", selected: false },
        { content: "87x87", selected: false },
        { content: "114x114", selected: false },
        { content: "120x120", selected: false },
        { content: "180x180", selected: false },
        { content: "1024x1024", selected: false },
      ],
      [
        { content: "20x20", selected: false },
        { content: "29x29", selected: false },
        { content: "40x40", selected: false },
        { content: "50x50", selected: false },
        { content: "58x58", selected: false },
        { content: "72x72", selected: false },
        { content: "76x76", selected: false },
        { content: "80x80", selected: false },
        { content: "100x100", selected: false },
        { content: "144x144", selected: false },
        { content: "152x152", selected: false },
        { content: "167x167", selected: false },
      ],
      [
        { content: "16x16", selected: false },
        { content: "32x32", selected: false },
        { content: "64x64", selected: false },
        { content: "128x128", selected: false },
        { content: "256x256", selected: false },
        { content: "512x512", selected: false },
        { content: "1024x1204", selected: false },
      ],
      [
        { content: "48x48", selected: false },
        { content: "55x55", selected: false },
        { content: "58x58", selected: false },
        { content: "66x66", selected: false },
        { content: "80x80", selected: false },
        { content: "87x87", selected: false },
        { content: "88x88", selected: false },
        { content: "92x92", selected: false },
        { content: "100x100", selected: false },
        { content: "102x102", selected: false },
        { content: "172x172", selected: false },
        { content: "196x196", selected: false },
        { content: "216x216", selected: false },
        { content: "1024x1024", selected: false },
      ],
      [
        { content: "48x48", selected: false },
        { content: "72x72", selected: false },
        { content: "96x96", selected: false },
        { content: "144x144", selected: false },
        { content: "192x192", selected: false },
      ],
    ]);
    // 改变单个复选框选中功能、保持全选功能
    const updateItem = (itemindex: number, index: number) => {
      inputData.value[index][itemindex].selected =
        !inputData.value[index][itemindex].selected;
      selectAll.value[index] = inputData.value[index].some(
        (item) => item.selected
      );
    };
    // 全选功能
    const updateAll = (index: number) => {
      const newValue = !selectAll.value[index];
      inputData.value[index].forEach((item) => {
        item.selected = newValue;
      });
      selectAll.value[index] = newValue;
    };
    // 拖拽图片上传
    // 阻止默认行为
    const handleDragOver = (event: DragEvent) => {
      event.preventDefault();
    };

    const handleDrop = (event: DragEvent) => {
      event.preventDefault();
      const dataTransfer = event.dataTransfer;
      if (dataTransfer && dataTransfer.files.length > 0) {
        imageUpload({ target: { files: dataTransfer.files } } as Event & {
          target: { files: FileList };
        });
      }
    };
    // 点击图片上传功能
    const img = new Image();
    const imageUpload = (event: Event) => {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          const uploadedImage = document.getElementById(
            "uploadedImage"
          ) as HTMLImageElement;
          const preContent = document.getElementById("preContent");
          img.src = e.target?.result as string;
          // 图片预览
          uploadedImage.src = e.target?.result as string;
          uploadedImage.classList.remove("hidden");
          preContent?.classList.add("hidden");
        };
      }
    };
    // 图片转为图标并下载功能
    function generateIcons(
      img: HTMLImageElement,
      sizes: string[],
      fileNamePrefix: string,
      fileName: string
    ): IconObject {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const iconData: IconObject = {
        deviceType: fileNamePrefix,
        sizes: sizes,
        dataURLs: [],
        fileNames: [],
      };
      if (ctx) {
        sizes.forEach((size) => {
          const [width, height] = size.split("x").map(Number);
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          const dataURL = canvas.toDataURL("image/png");
          iconData.dataURLs.push(dataURL);
          // 使用 fileName 和 size 来创建每个图标文件的名称
          iconData.fileNames.push(`${fileName}-${size}.png`);
        });
      }
      return iconData;
    }
    // 下载压缩包功能
    const downloadIconsAsZip = (iconDataArray: IconObject[]) => {
      const zip = new JSZip();
      if (!zip) {
        console.error("JSZip object is null or undefined");
        return;
      }
      iconDataArray.forEach((iconData) => {
        if (!iconData.deviceType) {
          console.error("Invalid deviceType in iconData:", iconData);
          return;
        }
        const folder = zip.folder(iconData.deviceType);
        if (!folder) {
          console.error(`Folder for ${iconData.deviceType} is null`);
          return;
        }
        iconData.fileNames.forEach((fileName, index) => {
          folder.file(fileName, iconData.dataURLs[index].split(",")[1], {
            base64: true,
          });
        });
      });
      if (zip) {
        zip.generateAsync({ type: "blob" }).then((blob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "icons.zip";
          link.click();
        });
      }
    };
    // 点击按钮下载图标
    const convertToIcon = () => {
      const userFileName = (
        document.getElementById("fileName") as HTMLInputElement
      ).value;
      const allIconData: IconObject[] = [];
      Object.keys(rotated.value).forEach((deviceType) => {
        if (rotated.value[deviceType]) {
          const selectedSizes = inputData.value[devicesIndex[deviceType]]
            .filter((item) => item.selected)
            .map((item) => item.content);
          if (selectedSizes.length > 0) {
            const iconData = generateIcons(
              img,
              selectedSizes,
              deviceType,
              userFileName
            );
            allIconData.push(iconData);
          }
        }
      });
      downloadIconsAsZip(allIconData);
    };

    return {
      sideBarData,
      titleData,
      headTitle,
      toggleBgChange,
      bgChange,
      rotated,
      rotageChange,
      selectAll,
      updateAll,
      updateItem,
      inputData,
      imageUpload,
      convertToIcon,
      downloadIconsAsZip,
      handleDragOver,
      handleDrop,
    };
  },
});
</script>

<style scoped>
.hidden {
  display: none;
}
div::-webkit-scrollbar {
  display: none;
}
</style>
