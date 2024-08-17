<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const layouts = {
  MainLayout: MainLayout,
  DashboardLayout: DashboardLayout,
};
</script>

<template>
  <div>
    <component :is="layouts[route.meta.layout] || MainLayout">
      <RouterView />
    </component>
  </div>
</template>

<style scoped></style>
