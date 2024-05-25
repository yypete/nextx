<template>
  <div class="w-full flex justify-center items-center bg-slate-100 h-screen">
    <div class="h-screen bg-slate-100 w-full">
      <div class="flex justify-between h-[80%]">
        <ToolTable :tableData="tableData"></ToolTable>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import ToolTable from "@/components/ToolTable.vue";
export default {
  name: "decrypt-box",
  components: {
    ToolTable,
  },
  setup() {
    const tableData = [
    { name: "Ripemd160哈希", path: "/ripemd160-hash" },
    { name: "MD2哈希", path: "/md2-hash" },
    { name: "MD6_384哈希", path: "/md6-384-hash" },
    { name: "SHA3_384哈希", path: "/sha3-384-hash" },
    { name: "Keccak512哈希", path: "/keccak512-hash" },
    { name: "CRC81Wire哈希", path: "/crc81wire-hash" },
    { name: "CRC32哈希", path: "/crc32-hash" },
    { name: "CRC-8/MAXIM哈希", path: "/crc-8-maxim-hash" },
    { name: "CRCI哈希", path: "/crc1-hash" },
    { name: "CRC16CCITT哈希", path: "/crc16ccitt-hash" },
    { name: "MySQL5哈希", path: "/mysql5-hash" },
    { name: "CRC24哈希", path: "/crc24-hash" },
    { name: "AES解密", path: "/aes-decrypt" },
    { name: "SHAI哈希", path: "/shai-hash" },
    { name: "HMAC-Whirlpool哈希", path: "/hmac-whirlpool-hash" },
    { name: "HMAC-Snefru哈希", path: "/hmac-snefru-hash" },
    { name: "Rabbit解密", path: "/rabbit-decrypt" },
    { name: "Rabbit加密", path: "/rabbit-encrypt" },
    { name: "SM3哈希", path: "/sm3-hash" },
    { name: "NTLM哈希", path: "/ntlm-hash" },
    { name: "SHA3_512哈希", path: "/sha3-512-hash" },
    { name: "Keccak256哈希", path: "/keccak256-hash" },
    { name: "PGP验证", path: "/pgp-verify" },
    { name: "哈希/散列工具", path: "/hash-hashing-tool" },
    { name: "CRC16哈希", path: "/crc16-hash" },
    { name: "SHAO哈希", path: "/shao-hash" },
    { name: "SHA384哈希", path: "/sha384-hash" },
    { name: "Whirlpool哈希", path: "/whirlpool-hash" },
    { name: "SHA512哈希", path: "/sha512-hash" },
    { name: "MD6_512哈希", path: "/md6-512-hash" },
    { name: "Snefru Hash", path: "/snefru-hash" },
    { name: "MD4哈希", path: "/md4-hash" },
    { name: "HMAC-HAS160哈希", path: "/hmac-has160-hash" },
    { name: "MD6_224哈希", path: "/md6-224-hash" },
    { name: "Ripemd256哈希", path: "/ripemd256-hash" },
    { name: "Ripemd128哈希", path: "/ripemd128-hash" },
    { name: "CRC8哈希", path: "/crc8-hash" },
    { name: "HMAC-MD2哈希", path: "/hmac-md2-hash" },
    { name: "Adler32哈希", path: "/adler32-hash" },
    { name: "SM4解密", path: "/sm4-decrypt" },
    { name: "检查文件校验和", path: "/check-file-checksum" },
    { name: "Ripemd320哈希", path: "/ripemd320-hash" }
];
    return { tableData };
  },
};
</script>
