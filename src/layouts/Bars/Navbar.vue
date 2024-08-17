<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { home } from "../../modules/Home/store/index";
import LoginSignUpModal from "../../components/LoginSignUpModal.vue";
const store = home();

const openShowModal = ref(false);

const userData = ref(JSON.parse(window.localStorage.getItem("userData")) || {});

const openModal2 = () => {
  openShowModal.value = !openShowModal.value;

  userData.value = JSON.parse(window.localStorage.getItem("userData")) || {};
};

const openModal = () => {
  store.isOpenModal = true;
};

watch(
  userData.value,
  (newValue) => {
    userData.value = newValue;
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div class="border-b">
    <div class="max-w-screen-xl mx-4 lg:mx-auto">
      <div class="flex items-center py-[21px]">
        <button class="">
          <img src="@/assets/icons/logo.svg" alt="" />
        </button>

        <div class="relative mr-[30px] ml-auto">
          <span
            class="absolute top-[50%] left-4 translate-y-[-50%] z-50 custom"
            uk-icon="search"
          ></span>
          <input
            type="search"
            placeholder="Search essentials, groceries and more..."
            class="w-[507px] h-[48px] rounded-[10px] bg-[#F3F9FB] border-[#000000] border relative pl-10"
          />
        </div>

        <button
          @click="$router.push('/dashboard')"
          class="flex items-center mr-4"
        >
          <span class="custom mr-2" uk-icon="user"></span>
          Dashboard
        </button>

        <button @click="openModal" class="flex items-center mr-4">
          <span class="custom mr-2" uk-icon="location"></span>
          Map
        </button>

        <div class="flex items-center">
          <span class="custom mr-2" uk-icon="user"></span>

          <div
            v-if="!(userData && userData.username)"
            class="flex items-center mr-10 relative before:contents-[''] before:w-[2px] before:h-[20px] before:bg-[#D9D9D9] before:absolute before:top-[0px] before:right-[-20px]"
          >
            <button @click="openModal2" class="font-medium">Sign Up/</button>
            <button @click="openModal2" class="font-medium">Sign In</button>
          </div>

          <div v-else class="mr-10">
            <span>{{ userData.username }}</span>
          </div>

          <div class="flex items-center">
            <button class="mr-2">
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
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>

    <LoginSignUpModal :openShowModal="openShowModal" @openModal="openModal2" />
  </div>
</template>

<style>
.openCatalog {
  top: 50%;
  left: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
}

.defaultCatalog {
  top: -100%;
  opacity: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.menu {
  border-radius: 0.358rem;
  position: fixed;
  background-color: #fff;
  height: auto;
  width: 500px;

  z-index: 1000;
  transition: all 0.5s;
}

.w-150 {
  width: 700px !important;
}

.black__shadow {
  visibility: visible;
  opacity: 1;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  right: 0;
  z-index: 99;
}

.close__icon {
  background: #fff;
  position: absolute;
  left: -44px;
  top: 48px;
  border-radius: 18px 0 0 18px;
  padding: 9px 18px;
  cursor: pointer;
}

.dark .modal-title h5 {
  color: #fff;
}

.modal-title {
  border-radius: 0.358rem 0 0;
  background-color: #ffffff;
  padding: 0.8rem 1.4rem;
  color: #5e5873 !important;
}

.modal-title h5 {
  font-weight: 500;
  line-height: 1.2;
  font-size: 16px;
  margin-bottom: 0;
}

.modal-title button {
  /*position: absolute;*/
  /*right: -7px;*/
  /*top: -8px;*/
  /*padding: 0.5rem 0.62rem;*/
  /*box-shadow: 0 5px 20px 0 rgba(34, 41, 47, 0.1);*/
  /*border-radius: 0.357rem;*/
  /*background: #fff;*/
  /*border: 0;*/
  /*transition: all 0.2s;*/
}

.modal-title button:hover {
  transform: translate(-5px, 5px);
}

.modal-body {
  padding: 0.8rem 1.4rem;
}

.modal-footer {
  padding: 0.8rem 1.4rem;
  border-top: 1px solid rgba(34, 41, 47, 0.05);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.modal-footer button:nth-child(1) {
  margin-right: 10px;
}

@media only screen and (max-width: 600px) {
  .menu {
    width: 90%;
  }

  .w-150 {
    width: 90% !important;
  }
}
</style>
