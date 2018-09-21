const state = {
  aspirants:[],
  lists:[],
}
const getters = {
  aspirantIndex: state => id =>{
    return state.aspirants.findIndex(asp => asp==id);
  }
}

const mutations = {
  initLists(state,lists){
    state.lists = lists?lists:[];
  },
  push(state, id) {
    state.aspirants.push(id);
  },
  removeIndex(state,index) {
    state.aspirants.splice(index,1);
  },
  selectAll(state,aspirants){
    const unique = aspirants.filter((elem) => {
      return state.aspirants.indexOf(elem) == -1;
    });
    state.aspirants.push(...unique);
  },
  pushNewList(state,data){
    state.lists.push(data);
  }
}
const actions = {
  save ( {state, commit, rootState}, data) {
    axios.post( rootState.staticInfo.saveListUrl, {aspirants:state.aspirants, ...data})
      .then( resp=> commit('pushNewList',resp.data))
      .catch(()=>{flash('Error').error()});
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
