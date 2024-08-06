import { defineStore } from "pinia";

type ICounter = number;

const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 100,
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
  },
  actions: {
    setCounter(newCounter: ICounter) {
      this.counter = newCounter;
    },
  },
});

export default useCounterStore;
