<template>
  <div>
    <h2 class="flex justify-content-center">Shopping Cart</h2>
    <div class="row">
      <div class="col-md-9">
        <CartTable />
        <div class="row justify-content-end">
          <div class="col-sm-7 col-5 order-1">
            <div
              class="left-side-button text-end d-flex d-block justify-content-end align-items-end"
            >
              <!-- @click.prevent="clearCartItems" -->
              <a
                class="text-decoration-underline theme-color d-block text-capitalize"
              >
                <!-- {{ $const.clearallitems }} -->
                Clear Cart Items
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-checkout-section col-md-3">
        <div class="cart-box">
          <div class="cart-box-details">
            <div class="total-details">
              <div class="top-details">
                <!-- <h3>{{ $const.CartTotals }}</h3> -->
                <h3 class="flex justify-content-center">Cart Summary</h3>
                <table class="table table-bag">
                  <thead>
                    <tr>
                      <th>Items</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody class="table-tr">
                    <tr
                      v-for="(item, index) in items"
                      :key="index"
                      class="table-tr"
                    >
                      <td style="text-align: left">{{ item.quantity }}</td>
                      <td style="text-align: left">{{ item.unitPrice }}</td>
                    </tr>
                  </tbody>
                </table>
                <h6>
                  <!-- {{ $const.TotalMRP }} -->
                  Total MRP
                  <span>
                    <!-- <del>{{ selectedCurrencySymbol }}25.00</del> -->
                    20.00
                  </span>
                  <!-- <span>{{ selectedCurrencySymbol }}{{ cartTotal }}</span> -->
                </h6>
                <h6>
                  <!-- {{ $const.CouponDiscount }} -->
                  Coupon Discount
                  <span>
                    <!-- <del>{{ selectedCurrencySymbol }}25.00</del> -->
                    25.00
                  </span>
                  <!-- <span>-{{ selectedCurrencySymbol }}25.00</span> -->
                </h6>
                <h6>
                  <!-- {{ $const.ConvenienceFee }} -->
                  Delivery Fee
                  <span>
                    <!-- <del>{{ selectedCurrencySymbol }}25.00</del> -->
                    <del>25.00</del>
                  </span>
                </h6>
              </div>
              <div class="bottom-details">
                <nuxt-link to="/checkout"> Process Checkout </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="col-12 mt-md-5 mt-2">
      <div class="row">
        <div class="col-sm-7 col-5 order-1"></div>
        <div class="col-sm-5 col-7">
          <div class="left-side-button float-start">
            <nuxt-link
              to="/"
              class="btn btn-solid-default btn fw-bold mb-0 ms-0"
            >
              <i class="fas fa-arrow-left"></i>
              Continue Shopping
            </nuxt-link>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="cart-checkout-section" v-if="cartItems.length != 0"> -->
  </div>
</template>
<script>
import CartTable from './CartTable'
export default {
  components: { CartTable },
  data() {
    return {
      items: [
        { quantity: 'p1', unitPrice: 10, extendedPrice: 20 },
        { quantity: 'p2', unitPrice: 15, extendedPrice: 45 },
        { quantity: 'p3', unitPrice: 8, extendedPrice: 8 },
        // Add more dummy data items as needed
      ],
    }
  },
}
</script>

<style scoped>
.cart-section .cart-checkout-section {
  margin-top: 22px !important;
}

.cart-box {
  background: #ffff !important;
}
</style>
