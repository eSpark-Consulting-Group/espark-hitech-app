import Vuex from 'vuex'
// import information from "../static/data/information.json";
// import Banner from "../static/data/banners.json";
// import Menu from "../static/data/menu.json";
// import Products from "../static/data/products.json";
// import TabsBanners from "../static/data/tabsBanners.json";
// import SliderData from "../static/data/homeSliders.json";
// import FootersData from "../static/data/footerLinks.json";
// import CategoryMenu from "../static/data/categoryMenu.json";
// import Cart from "../static/data/cart.json";

// import clickEvents from "./modules/clickEvents";
// import layout from "./modules/layout";
// import firebase from "./modules/firebase";
// import banners from "./modules/banners";
import breadcrumbs from './modules/breadcrumbs'
import cart from './modules/cart'
import clickEvents from './modules/clickEvents'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      breadcrumbs,
      cart,
      clickEvents,
      // layout,
      // firebase,
      // banners,
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {},
  })
}

export default createStore
