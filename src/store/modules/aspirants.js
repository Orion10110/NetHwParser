import {objectToUrl,urlToObject} from 'Utils/urlConverter';


const state = {
  aspirants:null,
  history:false,
}
const getters = {
  hasAspirants:function(state){
    return !!state.aspirants;
  }
}
const actions = {
  getAspirants ( {state, commit, rootState}, filter) {
    if(state.history){
      const search= Object.assign({}, filter);
      const queryParams = objectToUrl(search);
      History.pushState(search, "Castings", "?"+queryParams);
    }
    axios.post( rootState.staticInfo.url, filter)
      .then(resp => commit('setAspirants',resp))
      .catch(()=>{flash('Error').error()});
  }
}

const mutations = {
  setAspirants (state, { data }) {
    state.aspirants = data;
  }
}

export default {
  namespaced: true,
  strict: false,
  state,
  getters,
  actions,
  mutations,
}
