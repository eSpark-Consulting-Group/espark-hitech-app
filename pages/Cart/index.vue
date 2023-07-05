<template>
  <section class="cart-section section-b-space">
    <div class="container">
      <div class="row">
        <!-- when cart is empty -->
        <div
          v-if="cartItems.length === 0"
          class="col-md-12 justify-content-center align-items-center empty-cart p-3"
        >
          <div
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <img
              :src="require('@/assets/images/cartEmptynew.png')"
              class="img-fluid"
              style="max-width: 30%"
            />
            <div class="details-image-concept m-0">
              <h2>Your shopping Cart is empty</h2>
            </div>
            <button
              type="button"
              class="btn btn-solid-default btn-block mt-4"
              @click="redirect('/')"
            >
              <span>Continue Shopping</span>
            </button>
          </div>
        </div>
        <div>
          <CartDetails v-if="cartItems.length != 0" />
        </div>
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

<style scoped>
@media (min-width: 1430px) {
  .container {
    max-width: 1480px;
  }

  .cart-section {
    background: #e7e7e7;
  }
  .empty-cart {
    background: #ffff;
    border-radius: 5px;
  }
}
</style>
