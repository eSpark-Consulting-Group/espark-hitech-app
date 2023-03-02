<template>
  <layout6>
    <shopSection :product="product" />
    <!-- <productSection /> -->
  </layout6>
</template>

<script>
import layout6 from "~/layout/layouts/layout.vue";
import shopSection from "~/components/product/productNoSidebar/shopSection.vue";
// import productSection from "~/layout/common/productsComponents/productSection.vue";
export default {
  components: {
    layout6,
    // productSection,
    shopSection,
  },
  computed: {
    allProducts() {
      return this.$store.state.products;
    },
    product() {
      var product = this.allProducts.filter(
        (product) =>
          product.id ===
          Number(this.$route.params.id ? this.$route.params.id : 1)
      )[0];
      return product;
    },
  },
  head() {
    return {
      title: "Product No Sidebar",
    };
  },
};
</script>

<style lang="scss">
@import "~assets/scss/demo1.scss";
</style>
