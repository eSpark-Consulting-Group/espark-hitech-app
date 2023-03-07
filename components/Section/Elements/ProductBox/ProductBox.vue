<template>
  <ProBoxSkeletonLoader v-if="showSkeletonLoader" />
  <div class="product-box" v-else>
    <div class="img-wrapper" :class="wrapperClasses">
      <nuxt-link
        draggable="false"
        :to="'/product/product_no_sidebar/' + product.id"
        class="sliderBackground bg-size"
        :style="{
          'background-image': `url(${getImageUrl(product.images[0].src)})`,
        }"
      >
        <img
          :src="getImageUrl(product.images[0].src)"
          class="img-fluid bg-img d-none"
          draggable="false"
          alt=""
        />
      </nuxt-link>
      <div
        class="label-block"
        v-if="product.new || product.discount || product.label"
      >
        <span class="label label-black" v-if="product.new">{{ NEW }}</span>
        <span class="label label-black" v-else-if="product.label">{{
          product.label
        }}</span>
        <span class="label label-theme" v-if="product.discount"
          >{{ product.discount }}% {{ OFF }}</span
        >
      </div>
      <div class="cart-wrap">
        <ul>
          <li>
            <a
              href="javascript:void(0)"
              class="addtocart-btn"
              data-bs-toggle="modal"
              data-bs-target="#addtocart"
              @click="toggleCartModal(product)"
            >
              <icons name="heart" />
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#quick-view"
              @click="toggleQuickViewModal(product.id)"
            >
              <icons name="heart" />
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click.prevent="addTocompareMixin(product)"
            >
              <icons name="heart" />
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click.prevent="addToWishlist(product)"
              class="wishlist"
            >
              <icons name="heart" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-details text-center">
      <h3 class="theme-color">
        {{ selectedCurrencySymbol }}{{ product.price }}
        <span class="font-light ml-1" v-if="product.mrp"
          >{{ selectedCurrencySymbol }}{{ product.mrp }}</span
        >
      </h3>
      <a
        href="javascript:void(0)"
        @click.prevent="
          $router.push('/product/product_no_sidebar/' + product.id)
        "
        class="font-default"
      >
        <h5>{{ product.name }}</h5>
      </a>
      <ul class="size-box" v-if="product.quantity_1 || product.quantity_2">
        <li v-if="product.quantity_1">1 KG</li>
        <li v-if="product.quantity_2">500 G</li>
      </ul>
      <ul class="rating d-flex justify-content-center">
        <li v-for="(stars, index) in product.ratingStars" :key="index">
          <i class="fas fa-star theme-color"></i>
        </li>
        <li
          v-for="(noStars, index) in 5 - product.ratingStars"
          :key="'A' + index"
        >
          <i class="fas fa-star"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import icons from '../../../../assets/icons.vue'
// import productBox1_skeletonLoader from "~/layout/elements/skeletonLoaders/productBox1_skeletonLoader.vue";
import ProBoxSkeletonLoader from './ProBoxSkeletonLoader.vue'

export default {
  props: ['product', 'productBoxClasses', 'wrapperClasses'],
  data() {
    return {
      showSkeletonLoader: true,
      NEW: 'New',
      OFF: 'Off',
    }
  },
  components: {
    icons,
    ProBoxSkeletonLoader,
  },
  computed: {
    selectedCurrencySymbol() {
      return 'Dollar'
    },
  },
  methods: {
    toggleQuickViewModal(productId) {
      // this.$store.dispatch('clickEvents/changeProductId', productId)
    },
    getImageUrl(path) {
      return require('@/assets/images/' + path)
    },
  },
  mounted() {
    setTimeout(() => {
      this.showSkeletonLoader = false
    }, 2000)
  },
}
</script>
