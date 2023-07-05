<template>
  <section class="section-b-space" style="background: #e7e7e7">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-8 checkout-section p-3">
          <h3 class="mb-3">Billing address</h3>
          <form class="needs-validation">
            <TopForm @isFormValid="isFormValid" />
            <div class="form-check ps-0 mt-3 custome-form-check">
              <input
                class="checkbox_animated check-it"
                type="checkbox"
                id="flexCheckDefault11"
                value="saveInfo"
                v-model="saveUserInfo"
              />
              <label
                class="form-check-label checkout-label"
                for="flexCheckDefault11"
                >{{ SaveInfo }}</label
              >
            </div>

            <hr class="my-lg-5 my-4" />

            <h3 class="mb-3">{{ Payment }}</h3>

            <paymentForm @changePaymentMethod="changePaymentMethod" />
            <hr class="mb-2" />
            <button
              v-if="paymentMethod === 'stripe'"
              class="btn btn-solid-default mt-4"
              type="button"
              :disabled="validInfo"
              @click.prevent="order"
            >
              {{ Continuecheckout }}
            </button>
          </form>
        </div>

        <CheckoutCart :cartItems="cartItems" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import TopForm from '../../components/Section/Elements/CheckOut/TopForm'
import CheckoutCart from '../../components/Section/Elements/CheckOut/CheckoutCart.vue'
import paymentForm from '../../components/Section/Elements/CheckOut/paymentForm'
export default {
  data() {
    return {
      SaveInfo: 'Save this information for next time',
      Payment: 'Payment',
      Continuecheckout: 'Continue to checkout',
      saveUserInfo: false,
      validInfo: false,
      isLogin: false,
      paymentMethod: 'stripe',
      userInfo: {},
    }
  },
  components: {
    TopForm,
    CheckoutCart,
    paymentForm,
  },
  computed: {
    ...mapGetters({
      cartItems: 'cart/getCartItems',
    }),
  },
  head() {
    return {
      title: 'Checkout',
    }
  },
  created() {
    this.setBreadcrumbs({ pageParent: 'Checkout', pageName: 'checkout' })
    if (this.cartItems.length === 0) this.$router.push('/cart')
  },
  methods: {
    isFormValid(value) {
      this.userInfo = value.userInfo
      this.validInfo = value.infoValid
    },
    order() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.checkout-section {
  background: #fff !important;
  border-radius: 5px;
}
</style>
