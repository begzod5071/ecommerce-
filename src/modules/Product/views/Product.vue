<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const quantity = ref(1);

const router = useRouter();

const decrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const increase = () => {
  quantity.value++;
};
</script>

<template>
  <div class="max-w-screen-xl mx-4 lg:mx-auto">
    <div class="py-[120px] flex gap-72">
      <img
        style="width: 340px"
        src="../../../assets//images/phone.png"
        alt=""
      />

      <div>
        <div class="flex justify-center items-center mb-6 border-b">
          <span class="text-[45px] font-bold block mr-20">Chinese Cabbage</span>

          <button><span class="custom" uk-icon="icon: heart"></span></button>
        </div>

        <div class="flex items-center gap-2 mb-12">
          <span class="font-bold">Rangi:</span>
          <span>Qora</span>
        </div>

        <div class="flex items-center gap-1 mb-10">
          <span uk-icon="icon: star"></span>
          <span uk-icon="icon: star"></span>
          <span uk-icon="icon: star"></span>
          <span uk-icon="icon: star"></span>
          <span uk-icon="icon: star"></span>
        </div>

        <div class="mb-4">
          <span class="font-bold block mb-2">Xotira: </span>

          <div class="flex items-center gap-4">
            <button class="p-2 border rounded bg-gray-100">4 | 128 GB</button>
            <button class="p-2 border rounded bg-gray-100">4 | 256 GB</button>
            <button class="p-2 border rounded bg-gray-100">4 | 1 TB</button>
          </div>
        </div>

        <div class="mb-4">
          <span class="font-bold block mb-2">Soni: </span>

          <div class="quantity-selector w-[100px]">
            <button @click="decrease" :disabled="quantity === 1">-</button>
            <span class="mx-3 text-[16px]">{{ quantity }}</span>
            <button @click="increase">+</button>
          </div>
        </div>

        <span class="text-[24px] line-through mb-12">4 025 852 сум</span>

        <span class="text-[32px] font-semibold block">3 025 852 сум</span>

        <div class="mt-6 flex items-center gap-6">
          <button
            class="p-4 rounded-lg border border-[#008ECC] text-[#fff] bg-[#008ECC] text-[18px] font-semibold"
          >
            Savatga qo'shish
          </button>

          <button
            class="p-4 rounded-lg border border-[#008ECC] text-[#fff] bg-[#008ECC] text-[18px] font-semibold"
            @click="router.push('/checkout')"
          >
            Xarid qilish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.quantity-selector {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}

button {
  background-color: transparent;
  border: none;
  padding: 0 10px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
}

button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

/* span {
  margin: 0 10px;
  font-size: 16px;
} */
</style>
