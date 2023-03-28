<template>
  <section class="cart-section section-b-space">
    <div class="container">
      <div class="row">
        <!-- when cart is empty -->
        <div
          v-if="cartItems.length === 0"
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <img
            :src="require('@/assets/images/cartEmpty.png')"
            class="img-fluid"
          />
          <button
            type="button"
            class="btn btn-solid-default btn-block mt-4"
            @click="redirect('/')"
          >
            <span>Continue Shopping</span>
          </button>
          <!-- when cart is empty -->
        </div>
        <CartDetails v-if="cartItems.length != 0" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import CartDetails from '../../components/Section/Elements/Cart/CartDetails.vue'
export default {
  head() {
    return {
      title: 'Cart',
    }
  },
  components: { CartDetails },
  created() {
    this.setBreadcrumbs({ pageParent: 'cart', pageName: 'cart' })
  },
  computed: {
    ...mapGetters({
      cartItems: 'cart/getCartItems',
    }),
  },
}
</script>
