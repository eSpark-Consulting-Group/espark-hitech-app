<template>
  <div>Product</div>
</template>

<script>
// import shopSection from "~/components/product/productNoSidebar/shopSection.vue";
// import productSection from "~/layout/common/productsComponents/productSection.vue";
export default {
  components: {
    // productSection, shopSection
  },
  head() {
    return {
      title: 'Product No Sidebar',
    }
  },
  created() {
    this.setBreadcrumbs({
      pageParent: 'Product',
      pageName: 'Product',
    })
  },
}
</script>

<style lang="scss">
@import '~assets/scss/demo1.scss';
</style>
