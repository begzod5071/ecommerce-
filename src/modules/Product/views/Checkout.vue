<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="max-w-screen-xl mx-4 lg:mx-auto">
    <div class="py-[120px] flex gap-10">
      <div class="w-[70%]">
        <div class="mb-[40px]">
          <div class="flex items-center gap-6 mb-8">
            <span
              class="w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center text-white"
              >1</span
            >

            <span class="text-[26px] font-semibold"
              >Sizning ma'lumotlaringiz</span
            >
          </div>

          <div class="mb-8">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-500 !text-[16px] dark:text-white"
              >Telefon raqam</label
            >
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+998"
              required
            />
          </div>

          <div class="flex items-center gap-6">
            <div class="w-full">
              <label
                for="ism"
                class="block mb-2 text-sm font-medium text-gray-500 !text-[16px] dark:text-white"
                >Ismingiz</label
              >
              <input
                type="text"
                id="ism"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>

            <div class="w-full">
              <label
                for="last-name"
                class="block mb-2 text-sm font-medium text-gray-500 !text-[16px] dark:text-white"
                >Familiyangiz</label
              >
              <input
                type="text"
                id="last-name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>

        <div class="mb-[40px]">
          <div class="flex items-center gap-6 mb-8">
            <span
              class="w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center text-white"
              >2</span
            >

            <span class="text-[26px] font-semibold"
              >To'lov usulini tanlang</span
            >
          </div>

          <ul class="w-full flex items-center gap-3">
            <li class="w-2/6">
              <input
                type="radio"
                id="card"
                name="hosting"
                value="card"
                class="hidden peer"
                required
              />
              <label
                for="card"
                class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="w-full flex flex-col items-center gap-4">
                  <span uk-icon="icon: credit-card"></span>
                  <span class="text-[20px] block text-center"
                    >Online karta orqali</span
                  >
                </div>
              </label>
            </li>

            <li class="w-2/6">
              <input
                type="radio"
                id="term"
                name="hosting"
                value="term"
                class="hidden peer"
                required
              />
              <label
                for="term"
                class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="w-full flex flex-col items-center gap-4">
                  <span uk-icon="icon: future"></span>
                  <span class="text-[20px] block text-center"
                    >Muddatli to'lov</span
                  >
                </div>
              </label>
            </li>

            <li class="w-2/6">
              <input
                type="radio"
                id="cash"
                name="hosting"
                value="cash"
                class="hidden peer"
                required
              />
              <label
                for="cash"
                class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="w-full flex flex-col items-center gap-4">
                  <span uk-icon="icon: bag"></span>
                  <span class="text-[20px] block text-center"
                    >Qabul qilganda</span
                  >
                </div>
              </label>
            </li>
          </ul>
        </div>

        <div class="mb-[40px]">
          <div class="flex items-center gap-6 mb-8">
            <span
              class="w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center text-white"
              >3</span
            >

            <span class="text-[26px] font-semibold">Qabul qilish usuli</span>
          </div>

          <div class="flex items-center gap-5 mb-6">
            <div
              class="w-full flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700"
            >
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-radio-1"
                class="w-full py-6 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Yetkazib Berish</label
              >
            </div>
            <div
              class="w-full flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700"
            >
              <input
                checked
                id="bordered-radio-2"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-radio-2"
                class="w-full py-6 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Do'kondan olib ketish</label
              >
            </div>
          </div>

          <label
            for="message"
            class="block mb-2 text-sm font-bold !text-[20px] text-gray-900 dark:text-white"
            >Yetkazib berish manzilini kiriting</label
          >
          <textarea
            id="message"
            rows="4"
            class="outline-0 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
            placeholder="Masalan, Yunusobod 13 kvartal"
          ></textarea>
        </div>

        <div>
          <button
            @click="router.push('/success')"
            class="w-full rounded-2xl text-white text-[20px] p-4 bg-[#028ECC]"
          >
            Xaridni rasmiylashtirish
          </button>
        </div>
      </div>
      <div class="w-[30%]">
        <div class="border rounded-xl p-6 mb-10">
          <span class="block mb-[20px] text-[18px] font-semibold"
            >Buyurtmadagi mahsulotlar</span
          >

          <div>
            <div class="flex items-center gap-4">
              <img
                style="width: 60px; height: 60px; object-fit: contain"
                src="../../../assets/images/phone.png"
                alt=""
              />

              <div class="grow">
                <span class="block mb-4 text-[16px]"
                  >Samsung Galaxy Ultra 22</span
                >
                <div class="flex items-center justify-between">
                  <span class="font-bold">8 255 665 сум</span>
                  <span class="">1 dona</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border rounded-xl p-6">
          <span class="block mb-[20px] text-[18px] font-semibold"
            >Sizning buyurtmangiz</span
          >

          <div class="flex items-center justify-between">
            <span>1 dona mahsulot narxi</span>
            <span class="font-medium text-[20px]">8 000 365 сум</span>
          </div>

          <span class="block w-full h-[2px] bg-gray-200 my-8"></span>

          <div class="flex items-center justify-between">
            <span>Jami to'lov</span>
            <span class="font-semibold text-[25px]">8 000 365 сум</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
