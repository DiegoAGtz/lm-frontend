<template>
  <div>
    <th scope="row" colspan="2">Total de Productos</th>
    <td>{{ totalCantidad }}</td>
    <td>
      <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="vaciar">
        Vaciar Carrito
      </button>
    </td>
    <td class="font-weight-bold">$<span>5000</span></td>
  </div>
</template>

<script>
export default {
  computed: {
    totalCantidad() {
      return this.$store.getters.totalCantidad;
    },
    totalPrecio() {
      return this.$store.getter.totalPrecio;
    },
  },
  methods: {
    vaciar() {
      this.$store.commit("vaciarCarrito");
    },
  },
};
</script>
