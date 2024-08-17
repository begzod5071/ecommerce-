<script setup lang="ts">
import { ref, watch, computed, reactive } from "vue";
import { toast } from "vue3-toastify";
const submitForm = async () => {};

const props = defineProps({
  openShowModal: {
    type: Boolean,
    default: () => false,
  },
});
const emit = defineEmits(["refresh", "openModal"]);

const product = ref("");

const userData = ref({
  username: "",
  password: "",
  confirmPassword: "",
});

const validation = ref({
  username: true,
  password: true,
  confirmPassword: true,
});

const isLogin = ref(true);
const onSubmit = async () => {};

watch(
  () => props.openShowModal,
  function () {
    if (props.openShowModal || props.modalValue?.id) {
      // product.value = JSON.parse(JSON.stringify(props.modalValue))
    } else {
      product.value = "";
    }
  },
  { deep: true }
);

const inputUsername = (e) => {
  let reg = /^(?=.*[A-Z])(?=.*[!@#$&*])/;

  if (reg.test(e.target.value)) {
    validation.value.username = true;
  } else {
    validation.value.username = false;
  }
  console.log(e.target.value, reg.test(e.target.value));
};

const inputPassword = (e) => {
  let reg = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

  if (reg.test(e.target.value)) {
    validation.value.password = true;
  } else {
    validation.value.password = false;
  }
  console.log(e.target.value, reg.test(e.target.value));
};

const validatePassword = () => {
  if (userData.value.password !== userData.value.confirmPassword) {
    validation.value.confirmPassword = false;
  } else {
    validation.value.confirmPassword = true;
  }
};

const send = () => {
  if (isLogin.value) {
    let userList = JSON.parse(window.localStorage.getItem("userList")) || [];

    if (userData.value.username && userData.value.password) {
      let user = userList.find(
        (item) => item.username == userData.value.username
      );

      if (user && user.username) {
        if (user.password == userData.value.password) {
          window.localStorage.setItem("userData", JSON.stringify(user));
          emit("openModal");
        } else {
          toast.error("Parol noto'g'ri");
        }
      } else {
        toast.error("Bunday foydalanuvchi mavjud emas");
      }
    } else {
      toast.error("Iltimos, bo'sh maydonlarni to'ldiring!");
      return;
    }
  } else {
    if (
      userData.value.username &&
      userData.value.password &&
      userData.value.confirmPassword
    ) {
      if (
        validation.value.username &&
        validation.value.password &&
        validation.value.confirmPassword
      ) {
        let userList =
          JSON.parse(window.localStorage.getItem("userList")) || [];

        if (userList && userList.length) {
          let user = userList.find(
            (item) => item.username === userData.value.username
          );

          if (user && user.username) {
            toast.error("Bunday username avval ishlatilgan");
          } else {
            let newUser = {
              username: userData.value.username,
              password: userData.value.password,
            };
            console.log("newUser");

            userList.push(newUser);
            window.localStorage.setItem("userList", JSON.stringify(userList));

            toast.success("Muvaffaqiyatli yaratildi");
            userData.value.username = "";
            userData.value.password = "";
            isLogin.value = true;
          }
        } else {
          let user = {
            username: userData.value.username,
            password: userData.value.password,
          };
          window.localStorage.setItem("userList", JSON.stringify([user]));

          toast.success("Muvaffaqiyatli yaratildi");
          userData.value.username = "";
          userData.value.password = "";
          isLogin.value = true;
        }
        console.log(userList);
      }
    } else {
      validation.value.username = false;
      validation.value.password = false;
    }
  }
};
</script>

<template>
  <div
    :class="
      openShowModal
        ? 'openCatalog menu dark:bg-darkLayoutStorm'
        : 'defaultCatalog menu menu_xl'
    "
  >
    <div>
      <div class="modal-title dark:bg-darkLayoutStorm flex">
        <button
          class="ml-auto w-[30px] h-[30px] rounded-full border flex items-center justify-center"
          @click="$emit('openModal')"
        >
          <span uk-icon="icon: close"></span>
        </button>
      </div>
      <h5 class="text-[#1A1528] text-center text-[24px] font-semibold">
        Kirish yoki Ro'yxatdan o'tish
      </h5>
    </div>

    <div class="modal-body">
      <div class="mt-3">
        <div v-if="isLogin">
          <div class="mb-6">
            <label
              for="first_name"
              class="block mb-2 !text-[16px] font-medium text-gray-900 dark:text-white"
              >Login</label
            >
            <input
              type="text"
              v-model="userData.username"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Parol</label
            >
            <input
              type="password"
              id="password"
              v-model="userData.password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
        </div>

        <div v-else>
          <div class="mb-6">
            <label
              for="first_name"
              class="block mb-2 !text-[16px] font-medium text-gray-900 dark:text-white"
              >Username</label
            >
            <input
              type="text"
              v-model="userData.username"
              @input="inputUsername"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />

            <span v-if="!validation.username" class="text-red-700"
              >Ismingizda hech bo'lmasa 1 belgi va 1 ta katta harf bo'lishi
              kerak</span
            >
          </div>

          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Parol</label
            >
            <input
              type="password"
              v-model="userData.password"
              @input="inputPassword"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />

            <span v-if="!validation.password" class="text-red-700"
              >Parolingizda 1 ta katta harf, 1 ta kichkina va 1 ta mahsus belgi
              va uzunligi 8 tadan ko'p bo'lishi kerak</span
            >
          </div>

          <div class="mb-6">
            <label
              for="confirm_password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Parolni tasdiqlang</label
            >
            <input
              type="password"
              v-model="userData.confirmPassword"
              @input="validatePassword"
              id="confirm_password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />

            <span v-if="!validation.confirmPassword" class="text-red-700"
              >Parol mos kelmayapti</span
            >
          </div>
        </div>

        <button
          @click="send"
          class="w-full rounded-2xl py-4 bg-[#028ECC] text-white mb-6"
        >
          Yuborish
        </button>

        <button
          @click="isLogin = !isLogin"
          v-if="!isLogin"
          class="text-blue-400 text-center w-full"
        >
          Kirish
        </button>
        <button
          @click="isLogin = !isLogin"
          v-if="isLogin"
          class="text-blue-400 text-center w-full"
        >
          Ro'yxatdan o'tish
        </button>
      </div>
    </div>

    <!--    <div class="modal-footer">-->
    <!--      <button @click="$emit('openModal')" class="btn-danger">-->
    <!--        Отменить-->
    <!--      </button>-->
    <!--      <button type="submit" class="btn-primary" @click="submitForm">-->
    <!--        Сохранить-->
    <!--      </button>-->
    <!--    </div>-->
  </div>
  <div
    :class="openShowModal ? 'black__shadow' : ''"
    @click="$emit('openModal')"
  />
</template>

<style>
.menu_xl {
  width: 800px !important;
}

.divide-line:not(:last-child):after {
  content: "";
  position: absolute;
  z-index: 555;
  display: block;
  top: 140%;
  left: 0;
  width: 100%;
  height: 1px;
  //border-radius: 30px;
  background: linear-gradient(
    to right,
    rgba(224, 224, 224, 0) 0%,
    rgba(224, 224, 224, 1) 50%,
    rgba(224, 224, 224, 0) 99%
  );
}
</style>
