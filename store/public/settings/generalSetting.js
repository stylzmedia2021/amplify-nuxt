export default {
  state: () => ({
    settings: [],
  }),
  getters: {
    settings(state){
      return state.settings;
    },
    get_setting_val: (state)=>(group,name)=>{
      let val = state.settings.find(item=>item.group === group && item.name === name);
      if (val) return val.value;
      else return null;
    }
  },
  mutations: {
    SET_SETTINGS(state, payload) {
      state.settings = payload
    },
  },
  actions: {
    async getSettings(context) {
      this.$axios.get('/get/setting/').then((response) => {
        context.commit('SET_SETTINGS', response?.data?.data)
      }).catch(() => {
      }).finally(() => {
      })
    },
  }
}
