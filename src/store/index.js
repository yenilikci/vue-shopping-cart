import Vue from "vue";
import Vuex from "vuex";
import { productList } from "../assets/productData";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cart: [],
    products: productList,
  },

  getters: {
    totalAmount(state) {
      let amount = 0;
      state.cart.map((item) => {
        amount += item.price * item.count;
      });
      return amount;
    },
  },

  mutations: {
    addToCard({ cart }, value) {
      //value => product
      const itemIndex = cart.findIndex((item) => item.id === value.id);
      if (itemIndex === -1) {
        cart.push(value);
      } else {
        cart[itemIndex].count =
          parseInt(value.count) + parseInt(cart[itemIndex].count);
      }
    },
    decreaseItemCount({ cart }, value) {
      const itemIndex = cart.findIndex((item) => item.id === value.id);
      cart[itemIndex].count > 1
        ? cart[itemIndex].count--
        : cart.splice(itemIndex, 1);
    },
    removeItem({ cart }, value) {
      const itemIndex = cart.findIndex((item) => item.id === value.id);
      console.log("bruh");

      cart.splice(itemIndex, 1);
    },
    clearAll(state) {
      state.cart = [];
    },
  },
});
