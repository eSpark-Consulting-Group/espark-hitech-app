import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

// // import { constants } from "../static/const";
// // import { VueMasonryPlugin } from "vue-masonry";
// // import PayPal from "vue-paypal-checkout";
// // import VueScrollTo from "vue-scrollto";
// import VueSlickCarousel from 'vue-slick-carousel-rtl'
// // import VueFeather from 'vue-feather'
// // import imageZoom from "vue-image-zoomer";
// // import VueSlider from "vue-slider-component";
// // import VueThreeSixty from "vue-360";
// // import ZoomOnHover from "vue-zoom-on-hover";
// if (process.client) {
//   //   Vue.prototype.$const = constants;
//   //   Vue.component('vue-feather', VueFeather)
//   // Vue.component("vue-slider", VueSlider);
//   // Vue.component("paypal-checkout", PayPal);
//   Vue.component('vue-slick-carousel', VueSlickCarousel)
//   //   Vue.component("vue-image-zoomer", imageZoom);
//   // Vue.use(VueMasonryPlugin);
//   //   Vue.use(VueScrollTo);
//   // Vue.use(VueThreeSixty);
// }
