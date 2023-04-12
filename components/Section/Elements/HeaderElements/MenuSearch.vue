<template>
  <div class="menu-right">
    <ul>
      <li>
        <div class="search-box theme-bg-color mr-3" @click="openSearchBar">
          <icons name="search" color="light" />
        </div>
      </li>
      <li class="onhover-dropdown">
        <div class="cart-media">
          <icons name="user" size="sm" />
        </div>
        <div class="onhover-div profile-dropdown">
          <ul>
            <li>
              Welcome User
              <!-- {{
                $store.state.firebase.user === null
                  ? "User"
                  : $store.state.firebase.user.email
              }} -->
            </li>
            <!-- <li v-if="$store.state.firebase.user === null"> -->
            <li>
              <nuxt-link to="/auth/login" class="d-block">{{$t('Login')}}</nuxt-link>
            </li>
            <!-- <li>
              <a @click.prevent="signout" to="/" class="d-block">logout</a>
            </li> -->
            <!-- <li v-if="$store.state.firebase.user === null"> -->
            <li>
              <nuxt-link to="/auth/register" class="d-block"
                >{{$t('Register')}}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="onhover-dropdown wislist-dropdown">
        <div class="cart-media">
          <div class="cart-icon">
            <!-- <a
              href="javascript:void(0)"
              class="d-flex"
              @click.prevent="$router.push('/page/wishlist')"
            > -->
            <icons name="heart" size="sm" />
            <span class="label label-theme rounded-pill">0</span>
            <!-- </a> -->
          </div>
          <div class="onhover-div">
            <a @click.prevent="$router.push('/page/wishlist')">
              <div class="wislist-empty">
                <i class="fab fa-gratipay"></i>
                <h6 class="mb-1" v-if="wishlist.length === 0">
                  Your wislist empty !!
                </h6>
                <p class="font-light mb-0" v-if="wishlist.length === 0">
                  explore more and shortlist items.
                </p>
                <h6 v-if="wishlist.length != 0">
                  Your Wishlist has {{ wishlist.length }} items.
                </h6>
                <nuxt-link
                  to="/page/wishlist"
                  class="font-light mb-0"
                  v-if="wishlist.length != 0"
                >
                  View Wishlist
                </nuxt-link>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li
        class="onhover-dropdown cart-dropdown"
        :class="isCartOpen ? 'show' : ''"
      >
        <button
          type="button"
          @click="toggleCart"
          class="btn btn-solid-default btn-spacing"
        >
          <icons name="cart" color="light" size="sm" />
          <div class="ml-1">
            {{ $n(cartTotal, 'currency') }}
          </div>
        </button>
        <div class="onhover-div">
          <div class="cart-menu" v-if="getterCartItems.length != 0">
            <div class="cart-title">
              <h6>
                <icons name="shopping-bag" size="sm" />
                <span class="label label-theme rounded-pill">0</span>
              </h6>
              <span class="d-md-none d-block" @click="toggleCart">
                <i class="fas fa-arrow-right back-cart"></i>
              </span>
            </div>
            <ul class="custom-scroll">
              <li v-for="(item, index) in getterCartItems" :key="index">
                <div class="media">
                  <img
                    :src="getImageUrl(item.images[0].src)"
                    class="img-fluid"
                    alt="no image"
                  />
                  <div class="media-body">
                    <h6>{{ item.name }}</h6>
                    <div class="qty-with-price">
                      <span> {{ $n(item.price, 'currency') }}</span>
                      <span>
                        <input
                          type="number"
                          min="1"
                          :max="item.inStock"
                          class="form-control"
                          :value="item.quantity"
                        />
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn-close d-flex d-md-none"
                    @click.prevent="removeItem(item.id)"
                    aria-label="Close"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div class="cart-menu" v-else>
            <div class="cart-title">
              <h6>
                <nuxt-link to="/cart">
                  <icons name="shopping-bag" size="sm" />
                  <span class="label label-theme rounded-pill">0</span>
                </nuxt-link>
              </h6>
              <span class="d-md-none d-block" @click="toggleCart">
                <i class="fas fa-arrow-right back-cart"></i>
              </span>
            </div>
            <ul class="custom-scroll">
              <li>
                <div class="media">
                  <img
                    style="width: 100%"
                    :src="require('@/assets/images/cartEmptyHeader.png')"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div class="cart-btn" v-if="getterCartItems.length != 0">
            <h6 class="cart-total">
              <span>{{ Total }}:</span>
              {{ $n(cartTotal, 'currency') }}
            </h6>
            <a href="javascript:void(0)" class="btn btn-solid-default btn-block"
              >{{ ProceedTOPayment }}
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import icons from '~/assets/icons.vue'
export default {
  components: { icons },
  data() {
    return {
      isCartOpen: false,
      searchBarOpen: false,
      Total: 'Total',
      ProceedTOPayment: 'Proceed too payment',
      cartTotal: '',
      getterCartItems: '',
      wishlist: '',
    }
  },
  computed: {
    // ...mapGetters({
    //   cartTotal: "cart/cartTotal",
    //   getterCartItems: "cart/cartItems",
    //   wishlist: "products/wishlist",
    // }),
    currencySymbol() {
      return '$'
    },
  },
  methods: {
    removeItem(productId) {
      // this.$store.dispatch("cart/removeCartItem", productId);
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen
    },
    openSearchBar() {
      this.$emit('openSearchBar')
    },
    getImageUrl(path) {
      return require('@/assets/images/' + path)
    },
  },
}
</script>
