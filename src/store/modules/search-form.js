import {objectToUrl,urlToObject} from 'Utils/urlConverter';

// initial state
// shape: [{ id, quantity }]

const filter = {
  gender:null,
  age:null,
  categories:null,
  surname:null,
  country_code:null,
  city:null,
  height:null,
  weight:null,
  clothing:null,
  shoe:null,
  typeFace:null,
  colorEye:null,
  hairColor:null,
  colorSkin:null,
  bodyType:null,
  timbreVoice:null,
  tattoos:null,
  piercing:null,
  passport:null,
  reputation:null,
  driving:null,
  cLicense:null,
  reviews:null,
  positive:null,
  photo:null,
  video:null,
  audio:null,
}

const state = {
  searchData: Object.assign({},filter),
  modal:false,
  filterName:null,
  filters:null,
  full:false,
}

const mutations = {
  created(state){
    const params =urlToObject();
    if(params.age) params.age =  params.age.split(',')
    if(params.height) params.height =  params.height.split(',')
    if(params.weight) params.weight =  params.weight.split(',')
    if(params.categories) params.categories =  params.categories.split(',');
    if(params.shoe) params.shoe =  params.shoe.split(',');
    if(params.clothing) params.clothing =  params.clothing.split(',');

    
    const pFilter = Object.assign({},filter, params);
    state.searchData = pFilter;
  },
  initFilters(state,filters){
    state.filters = filters?filters:[];
  },
  clearFilter(state){
    state.searchData = Object.assign({},filter);
  },
  showModal(state){
    let filterName = state.searchData.phrase?`${state.searchData.phrase.substr(0,5)}-`:'';
    state.filterName = `${filterName}${moment().format('DD.MM.YY-HH:MM').toString()}`;
    state.modal = true;
  },
  hideModal(state){
    state.modal = false;
  },
  updateFilterName(state,value){
    state.filterName = value;
  },
  keepFilter(state){
    console.log(save);
  },
  removeFilterProp(state,key){
    state.searchData[key] = null;
    this.commit('findAspirants');
  },
  removeFilterCategory(state,index){
    state.searchData.categories.splice(index,1);
    this.commit('findAspirants');
  },
  removeCountry(state){
    state.searchData.city=null;
    state.searchData.country_code = null;
    this.commit('findAspirants');
  },
  setFilter(state,index){
    state.searchData = Object.assign({},state.filters[index].filter);
  },
  pushFilter(state,data){
    state.filters.push(data);
  },
  toggleFilter(state){
    state.full = !state.full;
  }
}

const actions = {
  saveFilter ( {state, commit, rootState}) {
    const data = {
      name: state.filterName,
      filter: state.searchData
    };
    this.commit('searchForm/pushFilter',data);
    axios.post(rootState.staticInfo.saveFilterUrl, data)
    .catch(()=>{flash('Error').error()});
  }
}


export default {
  namespaced: true,
  strict: false,
  state,
  mutations,
  actions
}
