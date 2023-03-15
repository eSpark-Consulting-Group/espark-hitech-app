const state = {
  pageParent: null,
  pageName: null,
}

// getters
const getters = {
  GetBreadcrumbs(state) {
    return state
  },
}

// mutations
const mutations = {
  SET_BREADCRUMBS(state, payload) {
    state.pageParent = payload.pageParent
    state.pageName = payload.pageName
  },
}

// actions
const actions = {
  setBreadcrumbs({ commit }, payload) {
    commit('SET_BREADCRUMBS', payload)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
