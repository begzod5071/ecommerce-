<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="w-[132px] rounded-[16px]">
    <div
      class="w-[132] h-[132px] rounded-full bg-[#F5F5F5] flex items-center justify-center mb-[20px]"
    >
      <img :src="props.item.image" alt="" />
    </div>

    <span class="block text-center">{{
      props.item.name && props.item.name
    }}</span>
  </div>
</template>

<style></style>
