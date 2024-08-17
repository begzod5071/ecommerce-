<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const modules = [Pagination, Autoplay];
</script>

<template>
  <div>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><img
          src="https://mini-io-api.texnomart.uz/newcontent/slider/111/1bvd0Bz9Cotk75SK3ISSTXEEAtn446nVJWscv51f.webp"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://mini-io-api.texnomart.uz/newcontent/slider/126/2ECcGQJnGpVOBkgwVcOwUNiC3e10uXI5wenBoxu1.webp"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://mini-io-api.texnomart.uz/newcontent/slider/125/DoZBjBgHV7PRhbYtYIA3uuv8KsHqMtv3YnNiVraf.webp"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://mini-io-api.texnomart.uz/newcontent/slider/127/IQrNd0enDcmFoH1VDNFedNa29L0kjeNiohfx4gmr.webp"
          alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
