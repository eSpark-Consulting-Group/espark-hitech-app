import products from '../../static/DummyData/products.json';

const state = {
  productCategories: [],
  loading: false,
  selectedCategories: [],
};

// getters
const getters = {
  getCategories: (state) => {
    // * return all categories if no category is selected
    const filteredCategories = state.productCategories
    
    // .filter((category) => {
    //   return state.selectedCategories.includes(category.categoryName);
    // });

    return filteredCategories;
    // if (state.selectedCategories.length === 0) {
    //   return state.productCategories;
    // } else {
    // }
  },
  getLoading: (state) => state.loading,
  getSelectedCategories: (state) => state.selectedCategories,
};

// mutations
const mutations = {
  setCategories: (state, payload) => {
    state.categories = payload;
    state.loading = false;
  },
  setSelectedCategories: (state, payload) => {
    state.selectedCategories = payload;
  },
};

// actions
const actions = {
  filterCategories({ commit }, payload) {
    const checkedCategories = payload;

    // * filter checked categories by matching with product categories name
    const filteredCategories = state.productCategories.filter((category) => {
      return !checkedCategories.includes(category.categoryName);
    });

    // * commit filtered categories to state
    commit('setCategories', filteredCategories);

    // * commit selected categories to state
    commit('setSelectedCategories', checkedCategories);
  },
  setLaoding({ commit }, payload) {
    commit('setLoading', payload);
  },
  async fetchProductCategories({ commit }) {
    // TODO: Fetch categories from API

    setTimeout(() => {
      commit('setCategories', products.data);
    }, 1000);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
