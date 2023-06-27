<template>
  <ProBoxSkeletonLoader v-if="showSkeletonLoader" />
  <div class="product-box" :class="productBoxClasses" v-else>
    <div class="img-wrapper">
      <div @click="gotoProduct">
        <a
          @click="$router.push('/product_listening/' + product.id)"
          class="front sliderBackground bg-size"
          :style="{
            'background-image': `url(${getImageUrl(product.images[0].src)})`,
          }"
        >
          <img
            :src="getImageUrl(product.images[0].src)"
            class="bg-img d-none"
            alt=""
          />
        </a>
      </div>
      <div @click="gotoProduct">
        <a
          @click="$router.push('/product_listening/' + product.id)"
          class="back sliderBackground bg-size"
          :style="{
            'background-image': `url(${getImageUrl(
              product.images[1] ? product.images[1].src : product.images[0].src
            )})`,
          }"
        >
          <img
            :src="
              getImageUrl(
                product.images[1]
                  ? product.images[1].src
                  : product.images[0].src
              )
            "
            class="bg-img d-none"
            alt=""
          />
        </a>
      </div>
      <!-- <div class="label-block" v-if="product.new || product.discount">
        <span class="label label-black" v-if="product.new">{{ NEW }}</span>
        <span class="label label-theme" v-if="product.discount"
          >{{ product.discount }}% {{ OFF }}</span
        >
      </div> -->
      <!-- <div class="cart-wrap">
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
      </div> -->
    </div>
    <div class="product-details">
      <div class="rating-details">
        <!-- <span class="font-light grid-content">{{ product.category }}</span> -->
        <!-- <ul class="rating mt-0 d-flex">
          <li v-for="(stars, index) in product.ratingStars" :key="index">
            <i class="fas fa-star theme-color"></i>
          </li>
          <li
            v-for="(noStars, index) in 5 - product.ratingStars"
            :key="'A' + index"
          >
            <i class="fas fa-star"></i>
          </li>
        </ul> -->
      </div>
      <div class="main-price">
        <a
          href="javascript:void(0)"
          @click.prevent="$router.push('/product_listening/' + product.id)"
          class="font-default"
        >
          <h5>{{ product.name }}</h5>
        </a>
        <div class="listing-content">
          <span class="font-light">{{ product.size }}</span>
          <p class="font-light">{{ product.description }}</p>
        </div>
        <!-- <h3 class="theme-color">
          {{ selectedCurrencySymbol }}{{ product.price }}
        </h3> -->
        <!-- <button @click="toggleCartModal(product)" class="btn listing-content">
          Addtocart
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import ProBoxSkeletonLoader from './ProBoxSkeletonLoader.vue'
import icons from '../../../../assets/icons.vue'
export default {
  props: ['product', 'productBoxClasses'],
  components: {
    icons,
    ProBoxSkeletonLoader,
  },
  data() {
    return {
      showSkeletonLoader: true,
      NEW: 'New',
      OFF: 'Off',
    }
  },
  computed: {
    selectedCurrencySymbol() {
      return 'Dollar' //this.$store.state.layout.selectedCurrencySymbol
    },
  },
  methods: {
    gotoProduct() {
      this.$router.push({
        path: '/product_listening/' + this.product.id,
      })
    },
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
    }, 500)
  },
}
</script>

<style scoped>
.product-box .product-details {
  margin-top: 0px !important;
}
</style>
