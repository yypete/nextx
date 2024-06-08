"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var calendarData = [
    { "name": "cron-expression", "content": "" },
    { "name": "current-date-time-timestamp", "content": "" },
    { "name": "hms-to-seconds-converter", "content": "" },
    { "name": "timestamp-converter", "content": "" },
    { "name": "random-time-generator", "content": "" },
    { "name": "countdown-timer", "content": "" },
    { "name": "seconds-to-hms", "content": "" },
    { "name": "stopwatch", "content": "" },
    { "name": "timezone-converter", "content": "" },
    { "name": "mongo-object-time", "content": "" },
    { "name": "time-difference-calculator", "content": "" },
    { "name": "utc-time-to-timestamp", "content": "" }
];
// 生成Vue组件文件
calendarData.forEach(function (component) {
    var filePath = "./src/pages/calendar-tools/".concat(component.name, ".vue");
    var fileContent = "<script>\nexport default {\n}\n</script>\n".concat(component.content);
    fs.writeFile(filePath, fileContent, function (err) {
        if (err) {
            console.error("Error writing file ".concat(filePath, ": ").concat(err));
        }
        else {
            console.log("Generated ".concat(filePath));
        }
    });
});

var decryptDate = [
    { name: "/ripemd160-hash", content: "" },
    { name: "/md2-hash", content: "" },
    { name: "/md6-384-hash", content: "" },
    { name: "/sha3-384-hash", content: "" },
    { name: "/keccak512-hash", content: "" },
    { name: "/crc81wire-hash", content: "" },
    { name: "/crc32-hash", content: "" },
    { name: "/crc-8-maxim-hash", content: "" },
    { name: "/crc1-hash", content: "" },
    { name: "/crc16ccitt-hash", content: "" },
    { name: "/mysql5-hash", content: "" },
    { name: "/crc24-hash", content: "" },
    { name: "/aes-decrypt", content: "" },
    { name: "/shai-hash", content: "" },
    { name: "/hmac-whirlpool-hash", content: "" },
    { name: "/hmac-snefru-hash", content: "" },
    { name: "/rabbit-decrypt", content: "" },
    { name: "/rabbit-encrypt", content: "" },
    { name: "/sm3-hash", content: "" },
    { name: "/ntlm-hash", content: "" },
    { name: "/sha3-512-hash", content: "" },
    { name: "/keccak256-hash", content: "" },
    { name: "/pgp-verify", content: "" },
    { name: "/hash-hashing-tool", content: "" },
    { name: "/crc16-hash", content: "" },
    { name: "/shao-hash", content: "" },
    { name: "/sha384-hash", content: "" },
    { name: "/whirlpool-hash", content: "" },
    { name: "/sha512-hash", content: "" },
    { name: "/md6-512-hash", content: "" },
    { name: "/snefru-hash", content: "" },
    { name: "/md4-hash", content: "" },
    { name: "/hmac-has160-hash", content: "" },
    { name: "/md6-224-hash", content: "" },
    { name: "/ripemd256-hash", content: "" },
    { name: "/ripemd128-hash", content: "" },
    { name: "/crc8-hash", content: "" },
    { name: "/hmac-md2-hash", content: "" },
    { name: "/adler32-hash", content: "" },
    { name: "/sm4-decrypt", content: "" },
    { name: "/check-file-checksum", content: "" },
    { name: "/ripemd320-hash", content: "" }
];
decryptDate.forEach(function (component) {
    var filePath = "./src/pages/decrypt-tools/".concat(component.name, ".vue");
    var fileContent = "<script>\nexport default {\n}\n</script>\n".concat(component.content);
    fs.writeFile(filePath, fileContent, function (err) {
        if (err) {
            console.error("Error writing file ".concat(filePath, ": ").concat(err));
        }
        else {
            console.log("Generated ".concat(filePath));
        }
    });
});


