<template>
  <div class="w-full flex justify-center items-center bg-slate-100 h-screen">
    <div class="h-screen bg-slate-100 w-full">
      <div class="flex justify-between h-full">
        <!-- 左侧长方形工具栏 -->
        <div class="bg-white w-40 h-[55%] py-4 rounded-lg translate-x-20">
          <router-link to="/json-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 文件json 和YAML-->
              <i class="fi fi-rr-file pr-2"></i>
              JSON
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/yaml-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 文件json 和YAML-->
              <i class="fi fi-rr-file pr-2"></i>
              YAML
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/ai-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- Ai -->
              <i class="fi fi-rs-microchip-ai pr-2"></i>
              AI工具
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/text-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 文本 -->
              <i class="fi fi-rr-text pr-2"></i>
              文本
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/pic-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 图片 -->
              <i class="fi fi-br-picture pr-2"></i>
              图片
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/color-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 颜色 -->
              <i class="fi fi-rr-palette pr-2"></i>
              颜色
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/program-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 网络 -->
              <i class="fi fi-rr-site pr-2"></i>
              编码
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/decrypt-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 加解密 -->
              <i class="fi fi-rr-display-code pr-2"></i>
              解密
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/internet-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 网络 -->
              <i class="fi fi-rr-site pr-2"></i>
              网络
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/web-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 网页 -->
              <i class="fi fi-sr-window-alt pr-2"></i>
              网页
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/math-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 数学 -->
              <i class="fi fi-rr-chart-pie-alt pr-2"></i>
              数学
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/media-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 媒体 -->
              <i class="fi fi-br-tv-retro pr-2"></i>
              媒体
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/calendar-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 日期 -->
              <i class="fi fi-rs-calendar-clock pr-2"></i>
              日期
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
          <router-link to="/other-box">
            <a
              href="#"
              class="space-x-10 focus:bg-slate-200 focus:rounded-lg flex w-full items-center justify-center px-3 py-3 hover:bg-slate-200 hover:rounded-lg"
            >
              <!-- 其他 -->
              <i class="fi fi-rr-bulb pr-2"></i>
              其他
              <!-- 向右箭头 -->
              <i class="fi fi-ss-angle-small-right"></i>
            </a>
          </router-link>
        </div>
        <!-- 右侧yaml子集 -->
        <div class="bg-white w-[80%] h-[90%] rounded-lg px-3">
          <table class="table w-full my-4">
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      中英文文案排版纠正器
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      AI文案生成/大模型生成
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">CSV表格转SQL</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      文本换行去除工具
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      JSON表格转HTML表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">文本分析</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      随机字符串生成器
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      写作标题生成器
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      CSV表格转JSON表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      SQL to HTML Table
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      HTML Text Extractor
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      HTML表格转JSON表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">文本换行</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">SQL转SCV表格</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">密码生成器</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">字符串反转义</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      Markdown表格转SQL
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">表情助手</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      TSV表格转Markdown表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">文本比较</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">文本转语音</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      英语单数转复数
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      简体中文转繁体
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">AscLL码表</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      CSV表格转TSV表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      CSV表格转Markdown表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">SQL转TSV表格</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      CSV表格转HTML表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      TSV表格转JSON表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">TSV转SQL</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      SQL转Markdown表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">SQL转JSON表格</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">大小写转换器</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      Markdown表格转csv表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      Markdown表格转HTML表格转换器
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      Markdown表格转JSON表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      HTML表格转TSV表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      HTML表格转CSV表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      JSON表格转TSV表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      JSON表格转CSV表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">JSON表格转SQL</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">文本提取器</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      Lorem Ipsum生成器
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      八/十六进制Unicode
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">FigLet</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">公式计算</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">Slug生成器</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">文本分割工具</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">字符串转义</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">文本去重</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      TSV Table to HTML Table
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
            </tr>
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      TSV Table to CSV Table
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      人民币金额转大写
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link to="">
                  <a
                    href="#"
                    class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300"
                  >
                    <div class="text-slate-600 text-md pl-2">
                      Markdown表格转TSV表格
                    </div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i
                        class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu"
                      ></i>
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
<script>
export default {
  name: 'text-box',
};
</script>
