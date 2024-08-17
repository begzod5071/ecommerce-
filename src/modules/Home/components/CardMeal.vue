<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="w-[187px] rounded-[16px]">
    <div
      class="w-[187px] h-[187px] rounded-[16px] bg-[#F5F5F5] flex items-center justify-center mb-[20px]"
    >
      <img :src="props.item.image" alt="" />
    </div>

    <small class="block text-center text-[#666666]">{{
      props.item.name && props.item.name
    }}</small>

    <span class="block text-center font-bold text-[18px]"
      >UP to {{ props.item.sale && props.item.sale }}% OFF</span
    >
  </div>
</template>

<style></style>
