<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const modules = [Pagination];
</script>

<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img src="../../../assets//images/brand.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="../../../assets//images/brand2.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="../../../assets//images/brand3.png" alt=""
    /></swiper-slide>

    <swiper-slide
      ><img src="../../../assets//images/brand3.png" alt=""
    /></swiper-slide>

    <swiper-slide
      ><img src="../../../assets//images/brand3.png" alt=""
    /></swiper-slide>
  </swiper>
</template>

<style></style>
