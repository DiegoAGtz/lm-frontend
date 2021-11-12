<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.cantidad }}</td>
    <td>
      <button class="btn btn-info btn-sm" @click="aumentar(item.id)">+</button>
      <button class="btn btn-danger btn-sm" @click="disminuir(item.id)">
        -
      </button>
    </td>
    <td>${{ item.precio * item.cantidad }}</td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    aumentar(id) {
      this.$store.commit("aumentar", id);
    },
    disminuir(id) {
      this.$store.commit("disminuir", id);
    },
  },
};
</script>
