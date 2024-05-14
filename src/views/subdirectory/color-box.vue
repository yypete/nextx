<template>
    <div class="w-full flex justify-center items-center bg-slate-100 h-screen">
      <div class="h-screen bg-slate-100 w-full">
          <div class="flex justify-between h-[80%] ">
          <!-- 左侧长方形工具栏 -->
          <div class="bg-white w-40 h-[70%] py-4 rounded-lg translate-x-20">
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
          <div class="bg-white w-[80%] h-[80%] rounded-lg px-3  ">
            <table class="table w-full  my-4">
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                <td class="w-1/3 h-14">
                    <router-link to="">
                    <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转CSV</div>
                        <div class="flex items-center space-x-1 pr-2">
                        <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                        <i class="fi fi-rr-menu-dots"></i>
                        </div>
                    </a>
                    </router-link>
                </td>
                <td class="w-1/3 h-14">
                    <router-link to="">
                    <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Scala</div>
                        <div class="flex items-center space-x-1 pr-2">
                        <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                        <i class="fi fi-rr-menu-dots"></i>
                        </div>
                    </a>
                    </router-link>
                </td>
                <td class="w-1/3 h-14">
                    <router-link to="">
                    <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                    <div class="text-slate-600 text-md pl-2 ">YAML转TypeScript接口</div>
                        <div class="flex items-center space-x-1 pr-2">
                        <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                        <i class="fi fi-rr-menu-dots"></i>
                        </div>
                    </a>
                    </router-link>
                </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转XML</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Kotlin类</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML压缩器</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">TOML转YAML</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Crystal类</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">  YAML转ELM模块</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Pike类</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转JSON Schema</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Haskell模块</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML到Objective-C接口</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转C++结构体</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Dart类</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Rust结构体</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Ruby模块</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML生成器</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Sarcastic</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML合并</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转SQL Schema</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Swift结构体</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Python类</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Go结构体</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转JSON</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转IO-TS</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">JSON转Big Query模式</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML查看器</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Zod Schema</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转TOML</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">Properties转YAML</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                  </td>
                  <td class="w-1/3 h-14">
                    <router-link to="">
                      <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转PHP</div>
                        <div class="flex items-center space-x-1 pr-2">
                          <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                          <i class="fi fi-rr-menu-dots"></i>
                        </div>
                      </a>
                    </router-link>
                </td>
                <td class="w-1/3 h-14">
                    <router-link to="">
                    <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Properties</div>
                        <div class="flex items-center space-x-1 pr-2">
                        <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                        <i class="fi fi-rr-menu-dots"></i>
                        </div>
                    </a>
                    </router-link>
                </td>
                </tr>
                <tr class="w-full flex text-center space-x-1 items-center pb-2">
                <td class="w-1/3 h-14">
                    <router-link to="">
                    <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML格式化</div>
                        <div class="flex items-center space-x-1 pr-2">
                        <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                        <i class="fi fi-rr-menu-dots"></i>
                        </div>
                    </a>
                    </router-link>
                </td>
                <td class="w-1/3 h-14">
                    <router-link to="">
                    <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML比较</div>
                        <div class="flex items-center space-x-1 pr-2">
                        <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
                        <i class="fi fi-rr-menu-dots"></i>
                        </div>
                    </a>
                    </router-link>
                </td>
                <td class="w-1/3 h-14">
                    <router-link to="">
                    <a href="#" class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-between hover:bg-slate-300 ">
                        <div class="text-slate-600 text-md pl-2 ">YAML转Java Bean</div>
                        <div class="flex items-center space-x-1 pr-2">
                        <i class="fi fi-rr-star hover:rotate-180 transition-transform transform-gpu "></i>
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
    name: 'color-box',
    }
</script>