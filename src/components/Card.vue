<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3">
    <div class="card">
      <img
        :src="producto.thumbnailUrl"
        alt="Imagen del producto"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">{{ producto.title }}</h5>
        <p class="card-text">
          $<span>{{ producto.precio }}</span>
        </p>
        <button class="btn btn-dark" @click="agregar(producto)">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["producto"],
  methods: {
    agregar(item) {
      console.log(item);
    },
  },
};
</script>
