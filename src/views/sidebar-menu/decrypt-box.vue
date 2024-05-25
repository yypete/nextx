<template>
  <div class="w-full flex justify-center items-center bg-slate-100 h-screen">
    <div class="h-screen bg-slate-100 w-full">
      <div class="flex justify-between h-[80%]">
        <!-- sidebar-menu -->
        <SideBarMenu />
        <div class="bg-white h-full rounded-lg px-3 w-[80%]">
          <table
            class="table w-full my-4"
            v-for="(row, rowIndex) in tableData"
            :key="rowIndex"
          >
            <tr class="w-full flex text-center space-x-1 items-center pb-2">
              <td class="w-1/3 h-14">
                <router-link
                  :to="generateRouterLink(row[0])"
                  class="table-link"
                >
                  <a href="#" class="item-box">
                    <div class="text-slate-600 text-md pl-2">{{ row[0] }}</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i class="fi fi-rr-star"></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link
                  :to="generateRouterLink(row[1])"
                  class="table-link"
                >
                  <a href="#" class="item-box">
                    <div class="text-slate-600 text-md pl-2">{{ row[1] }}</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i class="fi fi-rr-star"></i>
                      <i class="fi fi-rr-menu-dots"></i>
                    </div>
                  </a>
                </router-link>
              </td>
              <td class="w-1/3 h-14">
                <router-link
                  :to="generateRouterLink(row[2])"
                  class="table-link"
                >
                  <a href="#" class="item-box">
                    <div class="text-slate-600 text-md pl-2">{{ row[2] }}</div>
                    <div class="flex items-center space-x-1 pr-2">
                      <i class="fi fi-rr-star"></i>
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
import SideBarMenu from "@/components/SideBarMenu.vue";
export default {
  name: "decrypt-box",
  components: {
    SideBarMenu,
  },
  setup() {
    const tableData = [
      ["Ripemd160哈希", "MD2哈希", "MD6_384哈希"],
      ["SHA3_384哈希", "Keccak512哈希", "CRC8IWire哈希"],
      ["CRC32哈希", "CRC-8/MAXIM 哈希", "CRC11哈希"],
      ["CRC16CCITT哈希", "MySQL5哈希", "CRC24哈希"],
      ["AES解密", "SHA1哈希", "HMAC-Whirlpool哈希"],
      ["HMAC-Snefru哈希", "Rabbit 解密", "Rabbit 加密"],
      ["SM3哈希", "NTLM哈希", "SHA3_512哈希"],
      ["Keccak256哈希", "PGP验证", "哈希/散列工具"],
      ["CRC16哈希", "SHA0哈希", "SHA384哈希"],
      ["Whirlpool哈希", "SHA512哈希", "MD6_512哈希"],
      ["Snefru Hash", "MD4哈希", "HMAC-HAS160哈希"],
      ["MD6_224哈希", "Ripemd256哈希", "Ripemd128哈希"],
      ["CRC8哈希", "HMAC-MD2哈希", "Adler32哈希"],
    ];

    return { tableData};
  },
};
</script>
