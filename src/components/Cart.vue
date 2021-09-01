<template>
  <div>
    <div class="title-div">
      <h2 class="title">Cart</h2>
    </div>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <span class="item-name">
          {{ item.name }}
          <button @click="decreaseItemCount(item)">-1</button>
          <button @click="removeItem(item)">X</button>
        </span>
        <span class="item-count">{{ item.count }}</span>
        <span class="item-amount">{{
          formatCurrency(item.count * item.price)
        }}</span>
      </li>
    </ul>
    <div v-if="cart.length === 0">
      <h2>No item</h2>
    </div>
    <div v-else>
      <div class="total-amount">Total: {{ formatCurrency(totalAmount) }}</div>
      <button @click="clearAll">Clear All</button>
      <button>CheckOut</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapGetters } from "vuex";
  export default {
    computed: {
      ...mapState(["cart"]),
      ...mapGetters(["totalAmount"]),
    },
    methods: {
      formatCurrency(price) {
        return "$" + price.toFixed(2);
      },
      ...mapMutations(["decreaseItemCount", "removeItem", "clearAll"]),
    },
  };
</script>

<style scoped>
  .title-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    background-color: rgb(44, 41, 41);
    color: #fff;
    padding: 10px 30px;
    border-radius: 20px;
    width: 200px;
  }
  ul {
    list-style: none;
  }
  li {
    display: flex;
    max-width: 800px;
    align-items: center;
    justify-content: center;
  }
  .item-name {
    font-size: 18px;
    flex: 6;
  }
  .item-count {
    font-size: 25px;
    margin-left: 10px;
    margin-right: 20px;
    flex: 1;
  }
  .item-amount {
    flex: 1;
    font-size: 25px;
    text-decoration: underline;
    text-decoration-color: lawngreen;
  }
  .total-amount {
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    padding: 10px;
    margin: 10px;
    font-size: 35px;
  }
  button {
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    margin: 5px;
  }
</style>
