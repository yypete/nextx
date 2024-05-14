import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import toolBox from '../views/nav/tool-box.vue';
import jsonBox from '../views/subdirectory/json-box.vue';
import yamlBox from '../views/subdirectory/yaml-box.vue';
import aiBox from '../views/subdirectory/ai-box.vue';
import textBox from  '../views/subdirectory/text-box.vue';
import picBox from  '../views/subdirectory/picture-box.vue';
import colorBox from  '../views/subdirectory/color-box.vue';
import decryptBox from  '../views/subdirectory/decrypt-box.vue';
import internetBox from '../views/subdirectory/internet-box.vue'
import webBox from  '../views/subdirectory/web-box.vue';
import mathBox from  '../views/subdirectory/math-box.vue';
import mediaBox from  '../views/subdirectory/media-box.vue';
import calendarBox from  '../views/subdirectory/calendar-box.vue';
import otherBox from  '../views/subdirectory/other-box.vue';
import programBox from  '../views/subdirectory/program-box.vue';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/tool-box',
        name: 'tool-box',
        component: toolBox
    },
    {
        path: '/json-box',
        name: 'json-box',
        component: jsonBox
    },
    {
        path: '/yaml-box',
        name: 'yaml-box',
        component: yamlBox
    },
    {
        path: '/ai-box',
        name: 'ai-box',
        component: aiBox
    },
    {
        path: '/text-box',
        name: 'text-box',
        component: textBox
    },
    {
        path: '/pic-box',
        name: 'pic-box',
        component: picBox
    },
    {
        path: '/color-box',
        name: 'color-box',
        component: colorBox
    },
    {
        path: '/program-box',
        name: 'program-box',
        component: programBox
    },
    {
        path: '/decrypt-box',
        name: 'decrypt-box',
        component: decryptBox
    },
    {
        path: '/internet-box',
        name: 'internet-box',
        component: internetBox
    },
    {
        path: '/web-box',
        name: 'web-box',
        component: webBox
    },
    {
        path: '/math-box',
        name: 'math-box',
        component: mathBox
    },
    {
        path: '/media-box',
        name: 'media-box',
        component: mediaBox
    },
    {
        path: '/calendar-box',
        name: 'calendar-box',
        component: calendarBox
    },
    {
        path: '/other-box',
        name: 'other-box',
        component: otherBox
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
