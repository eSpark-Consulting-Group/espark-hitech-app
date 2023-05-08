<template>
  <section>
    <div class="container">
      <div class="row gx-4 gy-sm-5">
        <div class="col-12">
          <div class="details-items">
            <div class="row g-4">
              <productSlider class="d-flex justify-content-end" />
              <productRightSection :product="product" />
            </div>
          </div>
        </div>
        <tabs />
      </div>
    </div>
  </section>
</template>
<script>
import productRightSection from './productsComponents/productRightSection.vue'
import productSlider from './productsComponents/productSlider.vue'
import tabs from './productsComponents/tabs.vue'
export default {
  props: ['product'],
  components: {
    productSlider,
    productRightSection,
    tabs,
  },
}
</script>
