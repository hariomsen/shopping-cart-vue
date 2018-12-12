<template>
  <b-row>
    <Product v-bind:add="addToCart" v-bind:remove="removeFromCart" v-bind:p="p" v-for="p in products" v-bind:key="p.name"></Product>
  </b-row>
</template>
<script>
import productService from "../services/products";
import Product from "./product";
export default {
  name: "products",
  data: function() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.products = productService.get();
    },
    addToCart(item) {
        this.$emit('onCartUpdated',item,'add')
    },
    removeFromCart(item) {
        this.$emit('onCartUpdated',item,'remove')
    }
  },
  components: { Product }
};
</script>