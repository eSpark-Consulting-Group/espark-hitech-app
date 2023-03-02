<template>
  <div>
    <header1 />
    <breadcrumb1 v-if="breadcrumb" :parent="parent" :pageName="pageName" />
    <slot v-else name="breadcrumb"></slot>
    <slot></slot>
    <subscribe />
    <footer1>
      <footerRight />
    </footer1>
    <bottomCart showCartAt="500" :product="product" />
    <recentlyPurchasedProduct />
    <mobileMenu />
    <sizeChartModal :showModal="showSizeChart" />
  </div>
</template>

<script>
import header1 from "~/layout/common/headers/header1.vue";
import breadcrumb1 from "~/layout/elements/breadcrumbs/breadcrumb1.vue";
import subscribe from "~/layout/elements/banners/subscribe.vue";
import footer1 from "~/layout/common/footers/footer1.vue";
import footerRight from "~/layout/elements/footerElements/footerRight1.vue";
import bottomCart from "~/layout/common/productsComponents/bottomCart.vue";
import recentlyPurchasedProduct from "~/layout/common/productsComponents/recentlyPurchasedProduct.vue";
import mobileMenu from "~/layout/elements/navigation/mobileMenu.vue";
import sizeChartModal from "~/layout/common/productsComponents/sizeChartModal.vue";

export default {
  head() {
    return {
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.png" }],
    };
  },
  data() {
    return {
      themeCss: "/demo2.css",
    };
  },
  props: {
    pageName: {
      type: String,
    },
    parent: {
      type: String,
    },
    breadcrumb: {
      type: Boolean,
      default: true,
    },
    product: {
      type: Object,
    },
  },
  components: {
    header1,
    breadcrumb1,
    subscribe,
    footer1,
    footerRight,
    bottomCart,
    recentlyPurchasedProduct,
    mobileMenu,
    sizeChartModal,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
  computed: {
    showSizeChart() {
      return this.$store.state.clickEvents.showSizeChart;
    },
    allProducts() {
      return this.$store.state.products.data;
    },
  },
  created() {
    if (this.product == undefined) {
      this.product = this.allProducts[0]
    }
    let layoutMode = localStorage.getItem("colorMode");
    if (layoutMode === "dark") this.themeCss = "/voxo/css/demo2_dark.css";
    else this.themeCss = "/voxo/css/demo2.css";
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/demo2.scss";
</style>
