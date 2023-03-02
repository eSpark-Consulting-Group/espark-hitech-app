var boostrapCss = "/css/bootstrap.min.css";
import english from "./static/data/en.json";
import french from "./static/data/fr.json";
import spanish from "./static/data/es.json";
export default {
  ssr: true,
  server: {
    port: 8000, // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Voxo",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.png",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap",
      },

      {
        rel: "stylesheet",
        id: "bootstrap-link",
        class: "nuxt-bootstrap",
        href: boostrapCss,
      },
    ],
    script: [
      {
        src: "https://checkout.stripe.com/checkout.js",
        mode: "client",
      },
      {
        src: "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/3.0.3/js-cloudimage-360-view.min.js",
        mode: "client",
      },
      // {
      //   src: "~/node_modules/bootstrap/dist/js/bootstrap.js",
      //   type: "text/javascript",
      //   mode: "client",
      // },
      // {
      //   src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      //   type: "text/javascript",
      //   mode: "client",
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/app.scss",
    // "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      mode: "client",
    },
    {
      src: "~/plugins/plugins.js",
      ssr: false,
    },
    {
      src: "~/plugins/mixins.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "nuxt-i18n",
  ],

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "es",
        name: "Español",
      },
      {
        code: "fr",
        name: "Français",
      },
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: english.data,
        fr: french.data,
        es: spanish.data,
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
