<!-- defaultLayout.vue -->
<template>
  <div class="h-screen bg-slate-100 ">
    <headerNav headerNav class="z-50"></headerNav>
    <router-view class="z--50"></router-view>
  </div>
</template>

<script lang="ts">
import headerNav from "@/components/header-nav.vue";

export default {
  name: "defaultLayout",
  components: {
    headerNav,
  },
};
</script>
