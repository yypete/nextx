"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = [
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
data.forEach(function (component) {
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
