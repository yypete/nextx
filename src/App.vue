<template>
  <div>
    <!-- nav-section -->
    <header><HeaderNav /></header>
    <!--router-view -->
    <aside class=" w-full flex items-center bg-slate-100 justify-center">
      <div class="h-screen w-1/2">
        <router-view />
      </div>
    </aside>
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
