<template>
  <div class="w-full flex justify-center items-center bg-slate-100 h-screen">
    <div class="h-screen bg-slate-100 w-full">
      <div class="flex justify-between h-[80%]">
        <!-- sidebar-menu -->
        <div class="sidebar-menu bg-white w-40 h-[70%] py-4 rounded-lg translate-x-20">
    <router-link to="/json-box" class="menu-item ">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div>
                <i class="menu-icon fi fi-rr-file pr-2"></i>
                <span class="menu-text">JSON</span>
            </div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/yaml-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div>
                <i class="menu-icon fi fi-rr-file pr-2"></i>
                <span class="menu-text">YAML</span>
            </div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/ai-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div>
                <i class="menu-icon fi fi-rs-microchip-ai pr-2"></i>
                <span class="menu-text">AI工具</span>
            </div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/text-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div>
                <i class="menu-icon fi fi-rr-text pr-2"></i>
                <span class="menu-text">文本</span>
            </div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/pic-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div>
                <i class="menu-icon fi fi-br-picture pr-2"></i>
                <span class="menu-text">图片</span>
            </div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/color-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div>
                <i class="menu-icon fi fi-rr-palette pr-2"></i>
                <span class="menu-text">颜色</span>
            </div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/program-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div>
                <i class="menu-icon fi fi-rr-site pr-2"></i>
                <span class="menu-text">编码</span>
            </div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/decrypt-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div><i class="menu-icon fi fi-rr-display-code pr-2"></i>
            <span class="menu-text">解密</span></div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/internet-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
        <div>
            <i class="menu-icon fi fi-rr-site pr-2"></i>
            <span class="menu-text">网络</span>
        </div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/web-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div>
                <i class="menu-icon fi fi-sr-window-alt pr-2"></i>
                <span class="menu-text">网页</span>
            </div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/math-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div><i class="menu-icon fi fi-rr-chart-pie-alt pr-2"></i>
            <span class="menu-text">数学</span></div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/media-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div><i class="menu-icon fi fi-br-tv-retro pr-2"></i>
            <span class="menu-text">媒体</span></div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/calendar-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div><i class="menu-icon fi fi-rs-calendar-clock pr-2"></i>
                <span class="menu-text">日期</span></div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
    <router-link to="/other-box" class="menu-item">
        <a href="#" class="menu-link flex items-center justify-between px-3 py-3 focus:bg-slate-200 focus:rounded-lg hover:bg-slate-200 hover:rounded-lg">
            <div><i class="menu-icon fi fi-rr-bulb pr-2"></i>
                <span class="menu-text">其他</span></div>
            <i class="arrow-icon fi fi-ss-angle-small-right"></i>
        </a>
    </router-link>
        </div>
        <div class="bg-white h-full rounded-lg px-3 w-[80%]">
        <table class="table w-full my-4" v-for="(row, rowIndex) in tableData" :key="rowIndex">
        <tr class="w-full flex text-center space-x-1 items-center pb-2 " >
            <td class="w-1/3 h-14">
            <router-link :to="generateRouterLink(row[0])" class="table-link">
                <a href="#" class="item-box ">
                    <div class="text-slate-600 text-md pl-2">{{row[0]}}</div>
                    <div class="flex items-center space-x-1 pr-2">
                        <i class="fi fi-rr-star "></i>
                        <i class="fi fi-rr-menu-dots"></i>
                    </div>
                </a>
            </router-link>
            </td>
            <td class="w-1/3 h-14">
            <router-link :to="generateRouterLink(row[1])" class="table-link">
                <a href="#" class="item-box ">
                    <div class="text-slate-600 text-md pl-2">{{row[1]}}</div>
                    <div class="flex items-center space-x-1 pr-2">
                        <i class="fi fi-rr-star "></i>
                        <i class="fi fi-rr-menu-dots"></i>
                    </div>
                </a>
            </router-link>
            </td>
            <td class="w-1/3 h-14">
            <router-link :to="generateRouterLink(row[2])" class="table-link">
                <a href="#" class="item-box ">
                    <div class="text-slate-600 text-md pl-2">{{row[2]}}</div>
                    <div class="flex items-center space-x-1 pr-2">
                        <i class="fi fi-rr-star "></i>
                        <i class="fi fi-rr-menu-dots"></i>
                    </div>
                </a>
            </router-link>
            </td>
            </tr>
        </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {generateRouterLink} from '../utils/generateRouterLink'
import { ref } from 'vue';
export default {
  name: 'json-box',
  setup () {
  const tableData=[
  ["中英文文案排版纠正器", "AI文案生成器/大模型生成", "CSV表转换SQL"],
  ["文本换行去除工具", "JSON表转换HTML表格", "文本分析"],
  ["随机字符串生成器", "写作标题生成器", "CSV表转换JSON表格"],
  ["SQL to HTML Table", "HTML表转换Markdown表格", "中文转拼音"],
  ["JSON表转换Markdown表格", "HTML Text Extractor", "HTML表转换JSON表格"],
  ["文本换行", "SQL转CSV表格", "密码生成器"],
  ["字符串反转义", "Markdown表转换SQL", "表情助手"],
  ["TSV表转换Markdown表格", "文本比较", "文本转语音"],
  ["英语单数转复数", "简体中文转繁体中文", "ASCII码表"],
  ["CSV表转换TSV表格", "CSV表转换Markdown表格", "SQL转TSV表格"],
  ["CSV表转换HTML表格", "TSV表转换JSON表格", "TSV表转换SQL"],
  ["SQL转Markdown表格", "SQL转JSON表格", "大小写转换器"],
  ["Markdown表转换CSV表格", "Markdown表转换HTML表格转换器", "Markdown表转换JSON表格"],
]
  const item = ref('');
  const generateLink = () => {
      return generateRouterLink(item.value); // 使用 item.value 获取 ref 的值
    };

    return{ tableData,
        item,
        generateLink,
        generateRouterLink}
}
};
</script>