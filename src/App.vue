<template>
  <div>
    <!-- nav-section -->
    <HeaderNav />
    <!--router-view -->
    <div class="w-full flex items-center bg-slate-100 justify-center">
      <div class="h-screen w-1/2">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import HeaderNav from "@/components/HeaderNav.vue";
import SideBarMenu from "./components/SideBarMenu.vue";
export default {
  name: "HomeApp",
  components: {
    HeaderNav,
  },
};
</script>
<style scope></style>
