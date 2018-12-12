<template>
  <b-col cols="3">
    <b-row>
      <b-col class>
        <div class="item text-center">
          <img class="img-responsive" v-bind:src="p.img">
          <b-button v-if="!p.added" v-on:click="addToCart()" size="sm" variant="primary">Buy@
            <fa icon="rupee-sign"></fa>
            {{p.price}}
          </b-button>
          <b-button v-if="p.added" v-on:click="removeFromCart()" size="sm" variant="default">Remove</b-button>
        </div>
      </b-col>
    </b-row>
  </b-col>
</template>
<script>
export default {
  name: "product",
  props:['p','add','remove'],
  methods:{
      addToCart() {
          this.p.added = true;
          this.add(this.p);
      },
      removeFromCart() {
          this.p.added = false;
          this.remove(this.p)
      }
  }
};
</script>
<style>
.item {
  padding-bottom: 10px;
}
.item button {
  margin-top: 5px !important;
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  margin-left: 10px !important;
}
</style>