<template>
  <layout6>
    hello
    <!-- <shopSection /> -->
    <!-- <productSection /> -->
  </layout6>
</template>

<script>
import layout6 from "~/layout/layouts/layout.vue";
// import shopSection from "~/components/product/productNoSidebar/shopSection.vue";
// import productSection from "~/layout/common/productsComponents/productSection.vue";
export default {
  components: {
    layout6,
    // productSection, shopSection
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
