import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    metroCoords: [55.779807, 37.665919],
    openingTimestamp: null,
  },
  mutations: {
    setOpeningTimestamp(state, timestamp) {
      state.openingTimestamp = timestamp;
    },
  },
});
