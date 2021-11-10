<template>
  <tr>
    {{
      item
    }}
    <th scope="row">1</th>
    <td>{{ item.title }}</td>
    <td>{{ item.cantidad }}</td>
    <td>
      <button class="btn btn-info btn-sm">+</button>
      <button class="btn btn-danger btn-sm">-</button>
    </td>
    <td>${{ item.precio * item.cantidad }}</td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
};
</script>
