<template>
  <div class="my-5">
    <h4 class="text-center">Mi Carrito</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Acción</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody id="items">
        <Item v-for="item in carrito" :key="item.id" :item="item" />
      </tbody>
    </table>
    <div>
      <div
        class="fw-bolder fs-3"
        scope="row"
        colspan="5"
        v-if="Object.keys(carrito).length === 0"
      >
        Carrito Vacio - Compra Ya :'3
      </div>
      <Footer v-else />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Item,
    Footer,
  },
  computed: {
    carrito() {
      return this.$store.state.carrito;
    },
  },
  watch: {
    carrito() {},
  },
};
</script>
