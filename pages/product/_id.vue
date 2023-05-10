<template>
  <div class="section-b-space">
    <shopSection :product="product" />
    <!-- <productSection /> -->
  </div>
</template>

<script>
import shopSection from '../../components/Section/Elements/product/shopSection.vue'
import dummyproduct from '../../static/DummyData/products.json'
export default {
  components: {
    // productSection,
    shopSection,
  },
  created() {
    this.setBreadcrumbs({
      pageParent: 'Product',
      pageName: 'Product Detail',
    })
  },
  data() {
    return {
      dummyproducts: dummyproduct.data,
    }
  },
  computed: {
    allProducts() {
      return this.dummyproducts
    },
    product() {
      var product = this.allProducts.filter(
        (product) =>
          product.id ===
          Number(this.$route.params.id ? this.$route.params.id : 1)
      )[0]
      return product
    },
  },
  head() {
    return {
      title: 'Product No Sidebar',
    }
  },
}
</script>

<style lang="scss">
@import '~assets/scss/demo1.scss';
</style>
