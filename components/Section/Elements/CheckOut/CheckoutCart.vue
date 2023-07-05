<template>
  <div class="col-lg-4">
    <div class="your-cart-box p-3">
      <h3 class="mb-3 d-flex text-capitalize">
        {{ Yourcart
        }}<span class="badge bg-theme new-badge">{{ cartItems.length }}</span>
      </h3>
      <ul class="list-group mb-3" v-if="cartItems.length != 0">
        <li
          class="list-group-item d-flex justify-content-between lh-condensed"
          v-for="(item, index) in cartItems"
          :key="index"
        >
          <div>
            <h6 class="my-0">{{ item.itemName }} X {{ item.quantity }}</h6>
            <small>{{ item.brand }}</small>
          </div>
          <span
            >{{ selectedCurrencySymbol }}{{ item.price * item.quantity }}</span
          >
        </li>
        <li class="list-group-item d-flex lh-condensed justify-content-between">
          <span class="fw-bold">{{
            selectedCurrency == 'Dollar'
              ? TotalUSD
              : selectedCurrency == 'Rupee'
              ? TotalINR
              : TotalEUR
          }}</span>
          <strong>{{ selectedCurrencySymbol }} {{ cartTotal }}</strong>
        </li>
      </ul>
      <ul v-else>
        <li class="list-group-item d-flex lh-condensed justify-content-between">
          <span class="fw-bold">Your Cart Is Empty</span>
        </li>
      </ul>
      <!-- 
      <form @click="submit" class="card border-0">
        <div class="input-group custome-imput-group">
          <input type="text" class="form-control" placeholder="Promo code" />
          <div class="input-group-append">
            <button type="submit" class="btn btn-solid-default rounded-0">
              Redeem
            </button>
          </div>
        </div>
      </form> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['cartItems'],
  data() {
    return {
      TotalUSD: 'Total (USD)',
      TotalINR: 'Total (INR)',
      TotalEUR: 'Total (EUR)',
      Yourcart: 'Your cart',
      cartTotal: '0',
    }
  },
  computed: {
    // ...mapGetters({
    //   cartTotal: "cart/cartTotal",
    // }),
    selectedCurrency() {
      return 'Dollar' //this.$store.state.layout.selectedCurrency
    },
    selectedCurrencySymbol() {
      return '$' //this.$store.state.layout.selectedCurrencySymbol;
    },
  },
  methods: {
    submit() {},
  },
}
</script>
<style scoped>
.your-cart-box {
  background: #ffff;
  border-radius: 5px;
}
</style>
