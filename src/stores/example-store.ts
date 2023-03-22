import { defineStore } from 'pinia';
import {ref} from 'vue';

export const useLolStore = defineStore(
  'lol',
  () => {
    const basket = ref([
      {img: 'nike3', name: 'Nike sneakers', count: 1, price: '220', amount: '$'},
      {img: 'nike2', name: 'Nike sneakers', count: 1, price: '680', amount: '$'},
      {img: 'nike1', name: 'Nike sneakers', count: 1, price: '115', amount: '$'}
    ]);

    function clear() {
      basket.value = [];
    }
    return {
      basket,
    };
  },
);
