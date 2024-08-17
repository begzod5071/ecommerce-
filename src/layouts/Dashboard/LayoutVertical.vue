<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const route = useRoute();

const show = ref(false);

const modules = [
  {
    title: "Статистика",
    route: "dashboard",
  },
];

const goRouter = (item) => {
  if (item.route) {
    router.push({ name: item.route });
  } else {
    show.value = !show.value;
  }
};

const detect = (item) => {
  if (route.name == item.route) {
    // this.show = true;
    return "active";
  }
};
</script>

<template>
  <div>
    <section id="menu">
      <div class="logo shadow">
        <img src="../../assets/icons/logo.svg" alt="logo" width="180" />
        <!-- <h2>LOGO</h2> -->
      </div>

      <div class="items">
        <ul>
          <li
            v-for="(item, index) in modules"
            :key="index"
            @click="goRouter(item)"
            :class="detect(item)"
          >
            <span
              >{{ item.title }}
              <feather-icon
                v-if="item.children"
                size="16"
                icon="ChevronDownIcon"
            /></span>

            <ul v-show="show">
              <li
                v-for="(child, index) in item.children"
                :key="index"
                @click.stop="goRouter(child)"
                :class="detect(child)"
              >
                <span class="sub-menu">{{ child.title }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style>
#menu {
  position: fixed;
  z-index: 56;
  left: 0;
  top: 0;
  background: #f3f6fa;
  width: 320px;
  height: 100vh;
}

#menu .logo {
  display: flex;
  align-items: center;
  color: #3c64b1;
  padding: 30px;
  /* background-color: #66; */
  align-items: center;
  justify-content: center;
}

#menu .logo h2 {
  color: #3c64b1;
}

#menu .logo img {
  width: 150x;
  margin-right: 15px;
}

#menu .items {
  margin-top: 10px;
}

#menu .items li {
  transition: 0.9s all ease;

  list-style-type: none;
  padding: 15px 15px;
}

#menu .items li:hover {
  /* transition: 0.5s all ease; */

  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  /* transform: scale(0.9); */
}

#menu .items li span {
  width: 145px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */
  margin: auto;
  display: flex;
  align-items: center;
  letter-spacing: 0.3px;

  color: #fff;
}

.active {
  background: #3c64b1;
  /* border-radius: 10px; */
}

.sub-menu {
  margin-left: 90px !important;
}
</style>
