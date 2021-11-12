import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    carrito: {},
  },
  mutations: {
    setProducto(state, payload) {
      state.productos = payload;
    },
    setCarrito(state, payload) {
      Vue.set(state.carrito, payload.id, payload);
      Vue.set(state.carrito[payload.id], "cantidad", 1);
      console.log(state.carrito);
    },
    vaciarCarrito(state) {
      state.carrito = {};
    },
    aumentar(state, payload) {
      state.carrito[payload].cantidad++;
    },
    disminuir(state, payload) {
      state.carrito[payload].cantidad--;
      if (state.carrito[payload].cantidad === 0) {
        Vue.delete(state.carrito, payload);
      }
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await fetch("api.json");
        const data = await res.json();
        commit("setProducto", data);
      } catch (error) {
        console.log(error);
      }
    },
    agregarAlCarrito({ commit, state }, producto) {
      if (state.carrito.hasOwnProperty(producto.id)) {
        commit("aumentar", producto.id);
      } else {
        commit("setCarrito", producto);
      }
    },
  },
  modules: {},
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce(
        (acc, { cantidad }) => acc + cantidad,
        0
      );
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce(
        (acc, { cantidad, precio }) => acc + cantidad * precio,
        0
      );
    },
  },
});
