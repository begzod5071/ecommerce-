<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="max-w-screen-xl mx-4 lg:mx-auto">
    <div class="py-[120px] flex justify-center flex-col items-center">
      <div
        class="flex items-center justify-center w-[80px] h-[80px] rounded-full border-x border-[#31C07E] mb-8"
      >
        <span uk-icon="icon: check"></span>
      </div>

      <span class="text-[24px] font-bold"
        >Sizning buyurtmangiz muvaffaqiyatli tastiqlandi</span
      >

      <button
        @click="router.push('/')"
        class="px-14 text-white mt-8 py-3 rounded-lg bg-[#028ECC]"
      >
        Uyga qaytish
      </button>
    </div>
  </div>
</template>

<style></style>
