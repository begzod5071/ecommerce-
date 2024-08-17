<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  activeIndex: {
    type: Number,
    required: true,
    default: 0,
  },
  index: {
    type: Number,
    required: true,
    default: 1,
  },
});
</script>

<template>
  <button
    class="flex items-center rounded-[18px] bg-[#F3F9FB] px-[14px] py-[9px]"
    :class="activeIndex == index ? 'bg-[#008ECC] text-white' : ''"
  >
    <span class="mr-[6px] font-semibold text-nowrap	">{{ props.title }}</span>

    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 1.375L6 6.625L0.75 1.375"
        :stroke="activeIndex == index ? '#fff' : '#008ECC'"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<style></style>
