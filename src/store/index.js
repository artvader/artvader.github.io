import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//d9822f5bcbmsh198dadc54bf35b0p159988jsnd34bf1ce4b3c
const store = new Vuex.Store({
  state: {
    worldData: [] // initial value
  },
  getters: {
    worldData: state => state.worldData
  },
  mutations: {
    setWorldData: (state, worldData) => state.worldData = worldData
  },
  actions: {
    loadWorldData: async ({ commit }) => {
      // load the data via fetch
      const res = await fetch('https://covid-193.p.rapidapi.com/statistics', {
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": "d9822f5bcbmsh198dadc54bf35b0p159988jsnd34bf1ce4b3c"
        }
      })
      // check for a successful response
      if (!res.ok) {
        throw res
      }
      // parse the JSON response
      const worldData = (await res.json()).response
      // commit the new value via the "setWorldData" mutation
      commit('setWorldData', worldData.sort((a, b) => a.country.localeCompare(b.country)))
    }
  }
})

store.dispatch('loadWorldData') // dispatch the action to load async data
export default store