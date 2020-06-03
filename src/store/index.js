import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.nasa.gov/planetary/apod?api_key=fqSvgu3hIXmZ5nBEmLb1qHryMcmReFgafzbuqyL1",
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nasaImg: {},
  },
  mutations: {
    setImageurl(state, data) {
      console.log("set url");
      state.nasaImg = data;
    },
  },
  actions: {
    getNasaPic({ commit, dispatch }) {
      api
        .get("")
        .then((res) => {
          console.log(res.data.hdurl);
          commit("setImageurl", res.data.url);
        })
        .catch((err) => console.error(err));
      console.log("hi");
    },
  },
  modules: {},
});
