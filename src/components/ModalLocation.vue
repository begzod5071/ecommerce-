<script setup lang="ts">
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref, watch } from "vue";
import { home } from "../modules/Home/store/index";

const store = home();

let map = ref<any>(null);
let marker = ref(null);
let markers = ref([
  {
    lat: 41.33268789756605,
    lng: 69.22526478484993,
    text: "Yunusobod 13 kvartal",
  },
  { lat: 41.26446744340589, lng: 69.2864604054431, text: "Chilonzor Integro" },
  { lat: 41.35841026912782, lng: 69.29571046701068, text: "Olmazor 2/4" },
  {
    lat: 41.311960542059275,
    lng: 69.27591454600201,
    text: "Qushbegi shoh  ko'chasi",
  },
  {
    lat: 41.316752191702165,
    lng: 69.24885588028116,
    text: "Yakkasaroy yoshlik ko'chasi",
  },
]);

let location = ref({
  lat: 0,
  lng: 0,
});

// const zoom = ref(10);

watch(
  () => store.isOpenModal,
  async () => {
    setTimeout(() => {
      map.value = L.map("map1").setView([41.2995, 69.2401], 11);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map.value);

      markers.value.forEach((item) => {
        L.marker([item.lat, item.lng]).addTo(map.value).bindTooltip(item.text);
      });
    }, 1000);
  },
  { deep: true }
);

const closeModal = () => {
  store.isOpenModal = false;

  map.value.remove();
  map.value = null;
};
</script>

<template>
  <div :class="store.isOpenModal ? 'openMapModal' : 'defaultMap'">
    <div style="height: 100vh; width: 100%">
      <div class="closeIcon cursor-pointer" @click="closeModal">
        <svg
          width="78"
          height="77"
          viewBox="0 0 78 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2312_835953)">
            <rect
              x="17"
              y="11"
              width="44"
              height="44"
              rx="11"
              fill="white"
              shape-rendering="crispEdges"
            />
            <path
              d="M45.3003 26.6996L32.6979 39.3005M32.6978 26.6996L45.3002 39.3004"
              stroke="#1A1528"
              stroke-width="1.71875"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2312_835953"
              x="0.5"
              y="0"
              width="77"
              height="77"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="5.5" />
              <feGaussianBlur stdDeviation="8.25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.141176 0 0 0 0 0.14902 0 0 0 0 0.160784 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2312_835953"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2312_835953"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div class="w-full h-full">
        <div id="map1" style="width: 100%; height: 100%"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.openMapModal {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  left: 0;
  z-index: 999999;
  visibility: visible;
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.defaultMap {
  position: fixed;
  top: -100%;
  width: 100%;
  height: 100vh;
  left: 0;
  visibility: hidden;
  opacity: 0;
  z-index: 999999;
  transition: all 0.5s ease-in-out;
}

.closeIcon {
  position: absolute;
  top: 20px;
  z-index: 999999;
  right: 20px;
}
</style>
