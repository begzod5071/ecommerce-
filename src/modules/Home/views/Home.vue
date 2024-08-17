<script lang="ts" setup>
import Categories from "@/modules/Home/components/Categories.vue";
import Banner from "../components/Banner.vue";
import CardProduct from "../components/CardProduct.vue";
import CardCategory from "../components/CardCategory.vue";
import CardMeal from "../components/CardMeal.vue";
import CardBrand from "../components/CardBrand.vue";
import { products, categories2, groceries } from "../constants/index";
import ModalLocation from "@/components/ModalLocation.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const activeIndex = ref<number>(0);

const categories: string[] = [
  "Oziq-ovqat",
  "Premium mevalar",
  "Uy va oshxona",
  "Moda",
  "Elektronika",
  "Go'zallik",
  "Uyni obodonlashtirish",
  "Sport, o'yinchoqlar va yuklar",
];
</script>

<template>
  <div>
    <div class="border-b">
      <div class="max-w-screen-xl mx-4 lg:mx-auto py-[16px]">
        <div class="flex items-center gap-2">
          <template v-for="(category, index) in categories">
            <Categories
              @click="activeIndex = index"
              :title="category"
              :active-index="activeIndex"
              :index="index"
            />
          </template>
        </div>
      </div>
    </div>
    <div>
      <Banner />
    </div>

    <div class="max-w-screen-xl mx-4 lg:mx-auto py-[16px]">
      <div class="py-[120px]">
        <div class="flex items-center justify-between py-[16px] border-b">
          <span
            class="block relative font-bold text-[24px] text-[#008ECC] before:contents-[''] before:w-full before:h-[5px] before:bg-[#008ECC] before:block before:absolute before:bottom-[-16px] before:left-0 before:rounded-2xl"
          >
            Eng yaxshi smartfonlar
          </span>

          <button class="flex items-center gap-2">
            Hammasini ko‘rish
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 0.75L6.625 6L1.375 11.25"
                stroke="#008ECC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="mt-5 flex items-center gap-6">
          <template v-for="(product, index) in products" :key="index">
            <CardProduct
              @click="
                router.push({ name: 'productItem', params: { id: product.id } })
              "
              class="cursor-pointer"
              :item="product"
            />
          </template>
        </div>
      </div>

      <div class="">
        <div class="flex items-center justify-between py-[16px] border-b">
          <span
            class="block relative font-bold text-[24px] text-[#008ECC] before:contents-[''] before:w-full before:h-[5px] before:bg-[#008ECC] before:block before:absolute before:bottom-[-16px] before:left-0 before:rounded-2xl"
          >
            Yuqori toifalar
          </span>

          <button class="flex items-center gap-2">
            Hammasini ko‘rish
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 0.75L6.625 6L1.375 11.25"
                stroke="#008ECC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="mt-5 flex items-center justify-between gap-6">
          <template v-for="(category, index) in categories2" :key="index">
            <CardCategory class="cursor-pointer" :item="category" />
          </template>
        </div>
      </div>

      <div class="pt-[120px]">
        <div class="flex items-center justify-between py-[16px] border-b">
          <span
            class="block relative font-bold text-[24px] text-[#008ECC] before:contents-[''] before:w-full before:h-[5px] before:bg-[#008ECC] before:block before:absolute before:bottom-[-16px] before:left-0 before:rounded-2xl"
          >
            Eng yaxshi brendlar
          </span>

          <button class="flex items-center gap-2">
            Hammasini ko‘rish
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 0.75L6.625 6L1.375 11.25"
                stroke="#008ECC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="mt-5 flex items-center justify-between gap-6">
          <CardBrand />
        </div>
      </div>

      <div class="py-[120px]">
        <div class="flex items-center justify-between py-[16px] border-b">
          <span
            class="block relative font-bold text-[24px] text-[#008ECC] before:contents-[''] before:w-full before:h-[5px] before:bg-[#008ECC] before:block before:absolute before:bottom-[-16px] before:left-0 before:rounded-2xl"
          >
            Kundalik Mahsulotlar
          </span>

          <button class="flex items-center gap-2">
            Hammasini ko‘rish
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 0.75L6.625 6L1.375 11.25"
                stroke="#008ECC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="mt-5 flex items-center justify-between gap-6">
          <template v-for="(grocery, index) in groceries" :key="index">
            <CardMeal :item="grocery" />
          </template>
        </div>
      </div>
    </div>

    <ModalLocation />
  </div>
</template>

<style>
.custom svg path {
  stroke: #008ecc;
}
.custom svg circle {
  stroke: #008ecc;
}
</style>
