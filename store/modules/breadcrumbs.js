const state = {
  pageParent: null,
  pageName: null,
  OrderView: false,
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
    state.OrderView = false
  },
  SET_OrderView(state, payload) {
    state.OrderView = payload.OrderView
  },
}

// actions
const actions = {
  setBreadcrumbs({ commit }, payload) {
    commit('SET_BREADCRUMBS', payload)
  },
  setOrderView({ commit }, payload) {
    commit('SET_OrderView', payload)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
