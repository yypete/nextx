<!-- defaultLayout.vue -->
<template>
  <div>
    <header>
      <headerNav />
    </header>
    <main>
      <router-view ></router-view>
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