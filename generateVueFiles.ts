import * as fs from 'fs';

const data = [
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
]

// 生成Vue组件文件
data.forEach(component => {
const filePath = `./src/pages/calendar-tools/${component.name}.vue`;
const fileContent = `<script>\nexport default {\n}\n</script>\n${component.content}`;

fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
    console.error(`Error writing file ${filePath}: ${err}`);
    } else {
    console.log(`Generated ${filePath}`);
    }
});
});
