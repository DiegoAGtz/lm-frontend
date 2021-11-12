<template>
  <div id="app" class="container">
    <h1>Carrito + Vue + Vanilla</h1>
    <hr />
    <Carrito />
    <div class="row">
      <Card
        v-for="producto in productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Carrito from "@/components/Carrito.vue";

export default {
  name: "App",
  components: {
    Card,
    Carrito,
  },
  mounted() {
    this.$store.dispatch("fetchData");
  },
  computed: {
    productos() {
      return this.$store.state.productos;
    },
    carrito() {
      return this.$store.state.carrito;
    },
  },
  watch: {
    productos() {},
    carrito() {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
