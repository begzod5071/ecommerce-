<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="w-[225px] rounded-[16px] border-[#EDEDED] border">
    <div
      class="rounded-t-[16px] flex items-center justify-center h-[188px] w-full bg-[#F5F5F5] relative"
    >
      <img v-bind:src="props.item.image" alt="" />

      <div
        class="w-[51px] h-[53px] bg-[#008ECC] text-white rounded-tr-[16px] rounded-bl-[16px] flex items-center justify-center text-center absolute top-0 right-0"
      >
        {{ props.item.sale && props.item.sale }}% OFF
      </div>
    </div>

    <div class="p-[12px]">
      <span class="block mb-3">{{ props.item.name && props.item.name }}</span>

      <div class="flex items-center gap-1 mb-3">
        <span uk-icon="icon: star"></span>
        <span uk-icon="icon: star"></span>
        <span uk-icon="icon: star"></span>
        <span uk-icon="icon: star"></span>
        <span uk-icon="icon: star"></span>
      </div>

      <div>
        <small class="block line-through">
          {{ props.item.old_price && props.item.old_price }} сўм</small
        >
        <div class="flex items-center justify-between">
          <span class="font-bold">
            {{ props.item.new_price && props.item.new_price }} сўм</span
          >
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.42226 19.8203C7.84426 19.8203 8.18726 20.1633 8.18726 20.5853C8.18726 21.0073 7.84426 21.3493 7.42226 21.3493C7.00026 21.3493 6.65826 21.0073 6.65826 20.5853C6.65826 20.1633 7.00026 19.8203 7.42226 19.8203Z"
                stroke="#008ECC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z"
                stroke="#008ECC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.74988 3.25L4.82988 3.61L5.79288 15.083C5.87088 16.018 6.65188 16.736 7.58988 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.16388"
                stroke="#008ECC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1254 10.795H16.8984"
                stroke="#008ECC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
