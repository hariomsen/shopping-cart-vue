<template>
  <div>
    <b-alert v-bind:show="!cartList || cartList.length == 0" variant="info">Add items to buy</b-alert>
    <table v-if="cartList && cartList.length > 0" class="table table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in cartData" v-bind:key="p.name">
          <td>{{p.name}}</td>
          <td>{{p.price}}</td>
          <td>
            <b-input-group>
              <b-form-input v-model="p.qty"></b-form-input>
              <b-input-group-append>
                <b-btn v-on:click="lessQty(p)" variant="default">-</b-btn>
                <b-btn v-on:click="addQty(p)" variant="defalut">+</b-btn>
              </b-input-group-append>
            </b-input-group>
          </td>
          <td>{{p.amount}}</td>
        </tr>
      </tbody>
    </table>
    <div class="col-md-12 col-lg-12">
      <div>
        <p style="padding-left:100px;">
          <b-button v-b-modal.modal1 size="lg" variant="primary">Buy Now</b-button>
        </p>
        <b-modal centered id="modal1" ok-only ok-title="Continue to payment" title="Invoice">
          <p class="my-4" style="text-align:center;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in cartData" v-bind:key="p.name">
                  <td>{{p.name}}</td>
                  <td>{{p.price}}</td>
                  <td>{{p.qty}}</td>
                  
                  <td>{{p.amount}}</td>
                </tr>
                <tr>
                  <td colspan="2">Total</td>
                  <td>{{totalQty}}</td>
                  <td>{{totalAmount}}</td>
                </tr>
                <tr>
                  <td colspan="3">IGST@18%</td>
                  <td>{{(18.0/100.0)*totalAmount}}</td>
                </tr>
                <tr>
                  <td colspan="3">Total</td>
                  <td>{{((18.0/100.0)*totalAmount) + totalAmount}}</td>
                </tr>
              </tbody>
            </table>
          </p>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "Cart",
  props: {
    cartList: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {
      cartData: this.cartList
    };
  },
  computed:{
    totalQty:function(){
      return this.cartData.map(item=> item.qty).reduce((prev,next) => prev + next);
    },
    totalAmount: function() {
      return this.cartData.map(item=> item.amount).reduce((prev,next) => prev + next);
    }
  },
  methods: {
    addQty(item) {
      var index = this.cartData.indexOf(item);
      item.qty = item.qty + 1;
      item.amount = item.qty * item.price;
      Vue.set(this.cartData, index, item);
    },
    lessQty(item) {
      if (item.qty > 1) {
        var index = this.cartData.indexOf(item);
        item.qty = item.qty - 1;
        item.amount = item.qty * item.price;
        Vue.set(this.cartData, index, item);
      }
    }
  }
};
</script>
