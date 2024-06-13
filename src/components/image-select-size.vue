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
        class="absolute bottom-12 left-64 bg-gray-800 text-white px-3 py-1 rounded-2xl w-20 text-sm flex items-center"
        @click="resetImage"
      >
        <i class="fi fi-tr-rotate-square text-sm px-1 translate-y-0.5"></i>
        重选
      </button>
    </div>
    <!-- right-setting -->
    <div class="w-[40%] h-[90%] overflow-y-scroll">
      <!-- 设备类型渲染 -->
      <div v-for="(index, device) in devicesIndex" :key="device">
        <!-- 设备类型标题 -->
        <div class="flex space-x-2 items-center pl-14 pt-2">
          <span
            class="cursor-pointer pt-2"
            @click="rotageChange(device)"
            :class="{ 'transform rotate-90': rotated[device] }"
          >
            <i class="fi fi-rr-caret-right text-xl"></i>
          </span>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              class="custom-checkbox"
              :checked="selectAll[index]"
              @change="updateAll(index)"
              name="device"
            />
          </label>
          <span
            class="text-lg text-gray-700 font-mono hover:bg-gray-400 cursor-pointer"
            @click="toggleBgChange(device)"
            :class="{ 'bg-gray-600': bgChange[device] }"
          >
            {{ device }}
          </span>
        </div>
        <!-- 悬停内容 -->
        <div v-if="rotated[device]" class="items-center pl-28 pt-2">
          <div
            v-for="(item, itemIndex) in inputData[index]"
            :key="itemIndex"
            class="flex"
          >
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="custom-checkbox"
                :checked="item.selected"
                @change="updateItem(itemIndex, index)"
              />
            </label>
            <div
              class="text-lg font-mono ml-3 text-gray-600 hover:bg-slate-300 cursor-pointer"
            >
              {{ item.content }}
            </div>
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
import data from "@/config";

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
    const devicesIndex: Record<string, number> = {
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
    const inputData: Ref<Item[][]> = ref(data.imageSize);
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
    const convertToIcon = (): void => {
      // 获取用户输入的文件名
      const userFileName: string = (
        document.getElementById("fileName") as HTMLInputElement
      ).value;
      const allIconData: IconObject[] = [];
      const selectedDeviceIndices: number[] = [];
      for (let i = 0; i < selectAll.value.length; i++) {
        if (selectAll.value[i]) {
          selectedDeviceIndices.push(i);
        }
      }
      selectedDeviceIndices.forEach((index: number) => {
        const deviceType: string = Object.keys(devicesIndex)[index];
        const selectedSizes: string[] = inputData.value[index]
          .filter((item: Item) => item.selected)
          .map((item: Item) => item.content);
        if (selectedSizes.length > 0) {
          const iconData = generateIcons(
            img,
            selectedSizes,
            deviceType,
            userFileName
          );
          allIconData.push(iconData);
        }
      });
      // 下载所有生成的图标
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
      devicesIndex,
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
@import url('https://cdn-uicons.flaticon.com/2.4.0/uicons-thin-rounded/css/uicons-thin-rounded.css')
</style>
