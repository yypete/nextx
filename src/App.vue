<template>
  <div>
    <!-- nav-section -->
    <HeaderNav />
    <!--router-view -->
    <div class="w-full flex justify-center items-center bg-slate-100 h-screen">
      <div class="h-screen bg-slate-100 w-1/2">
        <div class="flex justify-between h-[80%]">
          <router-view />
        </div>
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
