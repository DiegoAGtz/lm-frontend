<template>
  <div>
    <div>
      <span class="fw-bolder fs-3"
        >Total de Productos: {{ totalCantidad }}</span
      >
    </div>
    <div>
      <span class="fw-bolder fs-3">Total a Pagar: ${{ totalPrecio }}</span>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-danger btn-md" id="vaciar-carrito" @click="vaciar">
        Vaciar Carrito
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalCantidad() {
      return this.$store.getters.totalCantidad;
    },
    totalPrecio() {
      return this.$store.getters.totalPrecio;
    },
  },
  methods: {
    vaciar() {
      this.$store.commit("vaciarCarrito");
    },
  },
};
</script>
