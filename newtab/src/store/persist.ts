import VuexPersistence from 'vuex-persist'

const vuexPersistence = new VuexPersistence({
  key: 'yant',
  storage: window.localStorage
})

export default vuexPersistence
