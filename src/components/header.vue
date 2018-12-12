<template>
  <b-navbar toggleable="md" type="dark" variant="primary">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    
    <b-navbar-brand href="#"><fa icon='cart-plus'></fa> Shopping Point</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse"></b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "Header",
  props: {
    logo: String
  }
};
</script>
