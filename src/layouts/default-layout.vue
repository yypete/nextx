<!-- defaultLayout.vue -->
<template>
  <div>
    <header>
      <headerNav class="z-50"></headerNav>
    </header>
    <main>
      <router-view class="z-40"></router-view>
    </main>
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
