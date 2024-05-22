<template>
    <div>
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
    </div>
</template>
<script>
export default {
    name: 'create-tools',
}
</script>
