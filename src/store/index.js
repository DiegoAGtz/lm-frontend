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
      if (state.carrito.hasOwnProperty(payload.id)) {
        state.carrito[payload.id].cantidad++;
      } else {
        Vue.set(state.carrito, payload.id, payload);
        Vue.set(state.carrito[payload.id], "cantidad", 1);
      }
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
      commit("setCarrito", producto);
    },
  },
  modules: {},
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce(
        (acc, { cantidad }) => acc + cantidad
      );
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce(
        (acc, { cantidad, precio }) => acc + cantidad * precio
      );
    },
  },
});
