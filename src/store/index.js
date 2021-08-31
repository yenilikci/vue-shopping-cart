import Vue from "vue";
import Vuex from "vuex";
import { productList } from "../assets/productData";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cart: [],
    products: productList,
  },

  mutations: {
    addToCard: ({ cart }, value) => {
      //value => product
      const itemIndex = cart.findIndex((item) => item.id === value.id);
      if (itemIndex === -1) {
        cart.push(value);
      } else {
        cart[itemIndex].count =
          parseInt(value.count) + parseInt(cart[itemIndex].count);
      }
    },
  },
});
