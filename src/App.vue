<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header logo="Welcome to Your Vue.js App"/>
    <!-- <pre>{{cart}}</pre> -->
    <b-container fluid>
      <b-row>
        <b-col>
          <h3>Products list</h3>
          <p>Add products to cart</p>
          <Products v-on:onCartUpdated="onCartUpdated"></Products>
        </b-col>
        <b-col cols="4">
          <h3>Your cart</h3>
          <p>Ready to buy</p>
           <Cart v-bind:cartList="cart" v-on:onCartUpdated="onCartUpdated"></Cart>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Products from "./components/products";
import Cart from "./components/Cart"
export default {
  name: "app",
  data: function() {
    return {
      cart:[]
    };
  },
  methods: {
    onCartUpdated(item, action) {
      if (action == "add") {
        item.qty = 1;
        item.amount = item.price;
        // Vue.set(item,'qty',1)
        // Vue.set(item,'amount',item.price)
        this.cart.push(item);
      }
      else {
        const index = this.cart.indexOf(item);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
      }
    }
  },
  components: {
    Header,
    Products,
    Cart
  }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style> 
