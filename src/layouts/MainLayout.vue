<script setup>
import Navbar from "./Bars/Navbar.vue";
import Footer from "./Bars/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
