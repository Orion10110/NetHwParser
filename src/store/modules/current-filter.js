
const zeroParam = {
  video:true,
  reviews:true,
  positive:true,
  photo:true,
  audio:true,
}
// initial state
// shape: [{ id, quantity }]
const state = {
  filter:{},
}

const getters = {
  getParam:  (state,getters,rootState) => (param) =>{
    const val = state.filter[param];
    if(!val) return null;
    return rootState.staticInfo[param][val].value;
  },
  hasAttribute:  (state,getters,rootState) => (param) =>{
    const val = state.filter[param];
    if(!val) return null;
    return val;
  },
  city: (state, getters, rootState) => {
    return rootState.city;
  },
  country: (state, getters, rootState) => {
    const country = state.filter.country_code;
    if(!country) return null;
    return rootState.staticInfo.countries[country].name;
  },
  gender: (state, getters, rootState) => {
    const gender = +state.filter.gender;
    if(!gender) return null;
    return rootState.staticInfo.genders.find((gd)=>{return gd.id == gender}).name;
  },
  typeFace: (state,getters) => {
    return getters.getParam('typeFace');
  },
  colorEye: (state,getters) => {
    return getters.getParam('colorEye');
  },
  hairColor: (state,getters) => {
    return getters.getParam('hairColor');
  },
  colorSkin: (state,getters) => {
    return getters.getParam('colorSkin');
  },
  bodyType: (state,getters) => {
    return getters.getParam('bodyType');
  },
  timbreVoice: (state,getters) => {
    return getters.getParam('timbreVoice');
  },
  hasFilter:function(state){
    for (let key in state.filter) {
      const val =  state.filter[key];
      if(val == null ||  val == "" || (zeroParam[key] && val==0))
        continue;
      return true;
    }
    return false;
  }
}

export default {
  namespaced: true,
  strict: false,
  state,
  getters,
}

