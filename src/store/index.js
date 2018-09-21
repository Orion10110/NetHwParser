import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import currentFilter from './modules/current-filter';
// import aspirants from './modules/aspirants';
// import aspirantsList from './modules/aspirants-list';
// import searchForm from './modules/search-form';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  state: {
    loading: false,
    info: null,
    items: null,
    speed: '100',
    port: null,
    cost: null
    // staticInfo: null,
    // city:null,
  },
  getters: {
    getTotal: state => key => {
      let i = state.items[key]
      return i.price * i.count
    },
    total (state, getters) {
      let r = getters.getTotal('router')
      let s = getters.getTotal('switch')
      let c = getters.getTotal('cable')
      return r + s + c
    }
  },
  mutations: {
    chooseCable (state, cable) {
      Object.assign(state.items.cable, cable)
    },
    chooseRouter (state, router) {
      Object.assign(state.items.router, router)
    },
    chooseSwitch (state, val) {
      Object.assign(state.items.switch, val)
    },

    setInfo (state, {data}) {
      state.info = data
      state.items = {
        router: state.info.routers[0],
        cable: state.info.cables[0],
        switch: state.info.switch[0]
      }
      state.items.router.count = 1;
      state.items.cable.count = state.port;
      state.items.switch.count = Math.ceil(state.port/24);
    },
    setCost (state, value) {
      state.cost = value
    },
    setPort (state, value) {
      state.port = value
    },
    setSpeed (state, value) {
      state.speed = value
    }
  },

  actions: {
    getInfo ({state, commit}) {
      const data = {
        cost: state.cost,
        speed: state.speed,
        port: state.port
      }
      state.loading = true;
      axios.get('http://127.0.0.1:8000/router/', {params: data})
        .then((resp) => commit('setInfo', resp))
        .finally(()=>{state.loading = false;})
    }
  },

  modules: {
    // searchForm,
    // currentFilter,
    // aspirants,
    // aspirantsList
  }
})
