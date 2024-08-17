<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, GaugeChart, BarChart } from "echarts/charts";
import { useRouter } from "vue-router";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  AxisPointerComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  AxisPointerComponent,
  BarChart,
]);
import { ref } from "vue";

const router = useRouter();

const option = ref({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: [
      "Dushanba",
      "Seshanba",
      "chorshanba",
      "Payshanba",
      "Juma",
      "Shanbi",
      "Yakshanba",
    ],
  },
  series: [
    {
      name: "Kosmetika",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 302, 301, 334, 390, 330, 320],
    },
    {
      name: "Mebellar",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Avtojihozlar",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Uy jixozlari",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [150, 212, 201, 154, 190, 330, 410],
    },
    {
      name: "Smartfonlar",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320],
    },
  ],
});
</script>

<template>
  <div class="category-wrapper">
    <button
      @click="router.push('/')"
      class="bg-red-400 text-[16px] text-white px-12 py-2 rounded-md mb-4"
    >
      Назад
    </button>

    <div class="flex">
      <span class="text-[32px]"> Статистика продаж продукции</span>
    </div>
    <div>
      <v-chart class="chart" :option="option" />
    </div>
  </div>
</template>

<style lang="scss">
.category-wrapper {
  padding-left: 28px;
  margin-left: 320px;
  margin-top: 120px;
}

.chart {
  width: 1600px;
  height: 100vh;
}
</style>
