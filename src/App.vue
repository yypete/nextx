<template>
  <div>
    <!-- nav-section -->
    <HeaderNav />
    <!--router-view -->
    <div class="w-full flex justify-center items-center bg-slate-100">
      <div class="w-1/2 h-screen">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: "HomeApp",
  components: {
    HeaderNav,
  },
};
</script>
<style scope></style>
