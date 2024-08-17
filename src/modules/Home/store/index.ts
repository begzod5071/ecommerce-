import { defineStore } from "pinia";

export const home = defineStore("home", {
  state: () => {
    return {
      isOpenModal: false,
    };
  },

  actions: {
    changeStateModal(state: boolean): void {
      this.isOpenModal = state;
    },
  },
});
