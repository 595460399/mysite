import router from '@/router'
const defaultState = {
  activeCateList: []
}

const actions = {
  async goDetail(commit, id) {
    router.push({
      name: 'Detail',
      params: {
        id
      }
    })
  }
}
const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
}
