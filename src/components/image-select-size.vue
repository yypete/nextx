<template>
  <div class="flex relative justify-between w-full h-full px-10 py-10">
    <!-- left-download -->
    <div class="w-imageInput h-full relative">
      <label
        class="w-full h-full border-dashed border-blue-400 bg-slate-100 border-2 rounded-2xl ml-10 flex items-center justify-center relative"
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
        <div id="preContent">
          <i class="fi fi-sr-add-image text-4xl text-gray-400"></i>
          <div class="absolute top-[55%] left-28 text-xl text-gray-400">
            点击或将图片拖拽到此区域上传
          </div>
        </div>
      </label>
      <img
        id="uploadedImage"
        class="hidden max-w-full max-h-full absolute top-0 left-10"
        alt="Uploaded Image"
      />
      <!-- 重选按钮 -->
      <button
        id="resetButton"
        class="hidden absolute bottom-12 left-64 bg-gray-800 text-white px-3 py-1 rounded-2xl w-20 text-sm flex items-center"
        @click="resetImage"
      >
        <i class="fi fi-tr-rotate-square text-sm px-1 translate-y-0.5"></i>
        重选
      </button>
    </div>

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
          class="text-lg text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
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
            class="text-lg font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
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
          class="text-lg text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
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
            class="text-lg font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
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
          class="text-lg text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
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
            class="text-lg font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
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
          class="text-lg text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
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
            class="text-lg font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
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
          class="text-lg text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
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
            class="text-lg font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
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
          class="w-64 h-10 border border-gray-400 placeholder:text-gray-400 placeholder:text-xl placeholder:font-serif pl-5 text-lg"
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
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ref, Ref } from "vue";
import JSZip from "jszip";
import { imageSize } from "@/config";

interface BgChange {
  [key: string]: boolean;
}
interface Item {
  content: string;
  selected: boolean;
}
export default defineComponent({
  name: "imageToIcon",
  setup() {
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
    const inputData: Ref<Item[][]> = ref(imageSize);
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
          const labelContainer = document.getElementById(
            "labelContainer"
          ) as HTMLImageElement;
          const preContent = document.getElementById("preContent");
          img.src = e.target?.result as string;
          // 图片预览
          uploadedImage.src = e.target?.result as string;
          uploadedImage.classList.remove("hidden");
          preContent?.classList.add("hidden");
          labelContainer?.classList.add("hidden");

          // 显示重选按钮
          const resetButton = document.getElementById("resetButton");
          resetButton?.classList.remove("hidden");
        };
      }
    };
    const resetImage = () => {
      const uploadedImage = document.getElementById(
        "uploadedImage"
      ) as HTMLImageElement;
      const labelContainer = document.getElementById(
        "labelContainer"
      ) as HTMLImageElement;
      const preContent = document.getElementById("preContent");

      // 清除当前图片
      uploadedImage.classList.add("hidden");
      uploadedImage.removeAttribute("src");

      // 显示原始上传容器
      labelContainer.classList.remove("hidden");
      preContent?.classList.remove("hidden");

      // 隐藏重选按钮
      const resetButton = document.getElementById("resetButton");
      resetButton?.classList.add("hidden");

      // 重置文件输入框的值
      const fileInput = document.getElementById(
        "fileInput"
      ) as HTMLInputElement;
      fileInput.value = "";
      // 触发打开上传图片文件
      fileInput.click();
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
      resetImage,
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
