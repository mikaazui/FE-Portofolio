import { defineStore } from 'pinia'

//latihan state management w pinia
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {count: 0}
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
   
  },
})
